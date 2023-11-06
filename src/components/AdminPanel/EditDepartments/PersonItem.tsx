import { useForm } from "react-hook-form";
import styled from "styled-components";
import Image from "next/image";
import trashIcon from "../../../assets/images/trash-icon.svg";
import saveIcon from "../../../assets/images/save-icon.png";
import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_PERSON } from "../../../graphql/mutation/updatePersona";
import { setGlobalState } from "../../../context/state";
import { DELETE_PERSON } from "../../../graphql/mutation/deletePersona";
import { useRouter } from "next/router";
import { uploadPhoto } from "../../../utils/uploadPhoto";
import { Person } from "../../../types/general";

const StyledPerson = styled.div`
  padding: 5px 0;
  display: flex;
  justify-content: space-between;
  .file-input {
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

const StyledForm = styled.form`
  display: flex;
  gap: 15px;
`;
const StyledIconButton = styled.button`
  background-color: transparent;
  border: none;
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

interface PersonItemProps {
  person: Person;
}

export default function PersonItem({ person }: PersonItemProps) {
  const router = useRouter();
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
  const { register, handleSubmit, getValues, setValue } = useForm();
  const [updateDepartment, { loading }] = useMutation(UPDATE_PERSON);
  const [deleteDepartment, { loading: deleteDepartmentLoading }] =
    useMutation(DELETE_PERSON);

  const onSubmit = () => {
    updateDepartment({
      variables: {
        name: getValues(`${person.id}_name`),
        email: getValues(`${person.id}_email`),
        id: person.id,
        avatar: imageUrl ? imageUrl : person.avatar,
      },
    });
  };
  const handleDelete = () => {
    deleteDepartment({ variables: { id: person.id } });
    router.reload();
  };

  useEffect(() => {
    if (!person) return;
    setValue(`${person.id}_name`, person.name);
    setValue(`${person.id}_email`, person.email);
  }, [person]);

  useEffect(() => {
    setGlobalState("isLoading", loading || deleteDepartmentLoading);
  }, [loading, deleteDepartmentLoading]);

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
    <StyledPerson>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        {person?.avatar && (
          <StyledAvatarContainer>
            <StyledAvatar
              src={imageUrl ? imageUrl : person?.avatar}
              alt="Avatar"
              width={80}
              height={80}
            />
            <input
              type="file"
              id={person.id}
              name="file-input"
              accept="image/*"
              className="file-input"
              onChange={(e) =>
                handleFileSelect(e.target.files ? e.target.files[0] : undefined)
              }
            />
            <label id="file-input-label" htmlFor={person.id}>
              Додати нове фото
            </label>{" "}
          </StyledAvatarContainer>
        )}

        <StyledInput
          id={`${person.id}_name`}
          {...register(`${person.id}_name`)}
          required={true}
          type="text"
        />
        <StyledInput
          id={`${person.id}_email`}
          {...register(`${person.id}_email`)}
          required={true}
          type="email"
        />
        <StyledIconButton type="submit">
          <Image src={saveIcon} alt={"Save"} width={20} height={20} />
        </StyledIconButton>
      </StyledForm>
      <StyledIconButton onClick={handleDelete}>
        <Image src={trashIcon} alt={"Delete"} width={20} height={20} />
      </StyledIconButton>
    </StyledPerson>
  );
}
