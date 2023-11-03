import styled from "styled-components";
import PanelLayout from "../../components/AdminPanel/PanelLayout";
import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { setGlobalState } from "../../context/state";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { CREATE_NEWS } from "../../graphql/mutation/createNews";
import Image from "next/image";
import { uploadPhoto } from "../../utils/uploadPhoto";

const StyledContent = styled.div`
  padding: 30px;
  #file-input {
    display: none;
  }

  #file-input-label {
    font-size: 14px;
    padding: 5px 8px;
    border: 1px solid black;
    border-radius: 4%;
  }
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const StyledInput = styled.input`
  border: 1px solid black;
  border-radius: 3px;
  padding: 5px;
  font-size: 14px;
  min-width: 300px;
  max-width: 700px;
`;
const StyledTextarea = styled.textarea`
  max-width: 700px;
  min-height: 400px;
  font-size: 14px;
  border: 1px solid black;
  border-radius: 3px;
  padding: 5px;
`;
const StyledLabel = styled.label``;
const StyledFormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const StyledButton = styled.button`
  background-color: transparent;
  border: 1px solid black;
  border-radius: 3px;
  text-transform: uppercase;
  width: 300px;
  padding: 5px;
  cursor: pointer;
`;
const StyledMainImage = styled(Image)`
  width: 300px;
  height: auto;
  object-fit: cover;
`;
const StyledImageContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export default function EditPost() {
  const router = useRouter();
  const { register, handleSubmit, getValues } = useForm();
  const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);

  const [createNews, { loading }] = useMutation(CREATE_NEWS, {
    onCompleted: (data) => {
      if (!data) return;
      router.push("/admin-panel/edit-news");
    },
  });

  const onSubmit = () => {
    createNews({
      variables: {
        title: getValues("title"),
        subtitle: getValues("subtitle"),
        description: getValues("description"),
        imageUrl: selectedFile
          ? `https://${process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME}.s3.eu-central-1.amazonaws.com/${selectedFile.name}`
          : "noPhoto",
      },
    });
  };

  useEffect(() => {
    setGlobalState("isLoading", loading);
  }, [loading]);

  const handleFileSelect = async (file?: File) => {
    const result = uploadPhoto(file);
    if (await result) {
      setSelectedFile(file);
    }
  };
  return (
    <PanelLayout pageTitle={"Dodawanie nowej aktualności"}>
      <StyledContent>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <StyledFormItem>
            <StyledLabel>Заголовок:</StyledLabel>
            <StyledInput
              id={"title"}
              {...register("title")}
              required={true}
              placeholder="Заголовок"
              type={"text"}
            />
          </StyledFormItem>
          <StyledFormItem>
            <StyledLabel>Короткий опис:</StyledLabel>
            <StyledInput
              id={"subtitle"}
              {...register("subtitle")}
              required={true}
              placeholder="Короткий опис"
              type={"text"}
            />
          </StyledFormItem>
          <StyledFormItem>
            <StyledLabel>Oпис:</StyledLabel>
            <StyledTextarea
              id={"description"}
              {...register("description")}
              required={true}
              placeholder="Oпис"
            />
          </StyledFormItem>
          <StyledImageContainer>
            {selectedFile ? (
              <StyledMainImage
                src={URL.createObjectURL(selectedFile)}
                alt="Page image"
                width={300}
                height={300}
              />
            ) : (
              <></>
            )}
            <input
              type="file"
              id="file-input"
              name="file-input"
              accept="image/*"
              onChange={(e) =>
                handleFileSelect(e.target.files ? e.target.files[0] : undefined)
              }
            />
            <label id="file-input-label" htmlFor="file-input">
              Додати нове зображення
            </label>
          </StyledImageContainer>
          <StyledButton type="submit">Додати</StyledButton>
        </StyledForm>
      </StyledContent>
    </PanelLayout>
  );
}
