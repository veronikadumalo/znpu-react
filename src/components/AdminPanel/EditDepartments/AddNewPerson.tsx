import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { CREATE_PERSON } from "../../../graphql/mutation/createPersona";
import { setGlobalState } from "../../../context/state";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { uploadPhoto } from "../../../utils/uploadPhoto";
import Image from "next/image";

const StyledForm = styled.form`
  display: flex;
  gap: 15px;
  .fileInput {
    display: none;
  }

  #file-input-label {
    font-size: 11px;
    padding: 3px 8px;
    border: 1px solid black;
    border-radius: 4%;
    max-width: 700px;
  }
`;

const StyledInput = styled.input`
  border: 1px solid black;
  border-radius: 3px;
  padding: 5px;
  font-size: 14px;
  min-width: 300px;
`;

const StyledButton = styled.button`
  background-color: transparent;
  padding: 5px;
  border-radius: 3px;
  font-size: 13px;
  text-transform: uppercase;
  border: 1px solid black;
  cursor: pointer;
`;
const StyledAvatar = styled(Image)`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
`;
const StyledAvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

interface AddNewPersonProps {
  departmentId: string;
}

export default function AddNewPerson({ departmentId }: AddNewPersonProps) {
  const router = useRouter();
  const [imageUrl, setImageUrl] = useState<string>(
    "https://znpu-bucket.s3.eu-central-1.amazonaws.com/default-avatar.jpg"
  );
  const [createPersona, { loading }] = useMutation(CREATE_PERSON, {
    onCompleted: (data) => {
      if (!data) return;
      router.reload();
    },
  });
  const { register, handleSubmit, getValues } = useForm();
  const onSubmit = () => {
    createPersona({
      variables: {
        deparmentId: departmentId,
        name: getValues(`${departmentId}_name`),
        email: getValues(`${departmentId}_email`),
        avatar: imageUrl,
      },
    });
  };
  useEffect(() => {
    setGlobalState("isLoading", loading);
  }, [loading]);

  const handleFileSelect = async (file?: File) => {
    if (!file) return;
    const result = uploadPhoto(file);
    if (await result) {
      const newImageURL = `https://${
        process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME
      }.s3.eu-central-1.amazonaws.com/${encodeURIComponent(file.name)}`;
      setImageUrl(newImageURL);
    }
  };
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledAvatarContainer>
        <StyledAvatar src={imageUrl} alt="Avatar" width={80} height={80} />
        <input
          type="file"
          id={`${departmentId}_file-input`}
          name={`${departmentId}_file-input`}
          className="fileInput"
          accept="image/*"
          onChange={(e) =>
            handleFileSelect(e.target.files ? e.target.files[0] : undefined)
          }
        />
        <label id="file-input-label" htmlFor={`${departmentId}_file-input`}>
          Додати нове фото
        </label>{" "}
      </StyledAvatarContainer>
      <StyledInput
        id={`${departmentId}_name`}
        {...register(`${departmentId}_name`)}
        required={true}
        placeholder="Ім'я"
        type={"text"}
      />
      <StyledInput
        id={`${departmentId}_email`}
        {...register(`${departmentId}_email`)}
        required={true}
        placeholder="Електронна пошта"
        type={"email"}
      />
      <StyledButton type="submit">Додати нову особу</StyledButton>
    </StyledForm>
  );
}
