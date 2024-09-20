import styled from "styled-components";
import PanelLayout from "../../components/AdminPanel/PanelLayout";
import { useEffect, useState } from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import { setGlobalState } from "../../context/state";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { UPDATE_HOMEPAGE_CONTENT } from "../../graphql/mutation/updateHomePageContent";
import { HomePageInfo } from "../../types/general";
import { HOME_PAGE_CONTENT } from "../../graphql/query/homePageContent";
import { uploadPhoto } from "../../utils/uploadPhoto";
import Image from "next/image";

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
  const { register, handleSubmit, getValues, setValue } = useForm();
  const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);
  const [pageInfo, setPageInfo] = useState<HomePageInfo | undefined>(undefined);

  const [homePageContent, { loading: homePageContentLoading }] = useLazyQuery(
    HOME_PAGE_CONTENT,
    {
      onCompleted: (data) => {
        if (!data) return;
        const pageInfo = data.homePageContent.find(
          (item: any) => item.type === "aboutUs"
        );
        setPageInfo(pageInfo);
        setValue("homeTitle", pageInfo.homeTitle);
        setValue("longDescription", pageInfo.longDescription);
        setValue("pageTitle", pageInfo.pageTitle);
        setValue("shortDescription", pageInfo.shortDescription);
      },
    }
  );
  const [updateHomePageContent, { loading }] = useMutation(
    UPDATE_HOMEPAGE_CONTENT,
    {
      onCompleted: (data) => {
        if (!data) return;
        alert("Зміни збережено");
        // router.push("/admin-panel");
      },
    }
  );

  const onSubmit = () => {
    updateHomePageContent({
      variables: {
        homeTitle: getValues("homeTitle"),
        longDescription: getValues("longDescription"),
        pageTitle: getValues("pageTitle"),
        shortDescription: getValues("shortDescription"),
        type: "aboutUs",
        imageUrl: selectedFile
          ? `https://${process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME}.s3.eu-central-1.amazonaws.com/${selectedFile.name}`
          : pageInfo?.imageUrl,
      },
    });
  };

  useEffect(() => {
    homePageContent();
  }, []);

  useEffect(() => {
    setGlobalState("isLoading", loading || homePageContentLoading);
  }, [loading, homePageContentLoading]);

  const generateRandom = () =>
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(23).substring(2, 5);

  const handleFileSelect = async (file?: File) => {
    const newFileName = generateRandom();
    const myNewFile =
      file &&
      new File([file], `${newFileName}.${file.name.split(".")[1]}`, {
        type: file.type,
      });
    const result = uploadPhoto(myNewFile);
    if (await result) {
      setSelectedFile(myNewFile);
    }
  };

  return (
    <PanelLayout pageTitle={"Dodawanie nowej aktualności"}>
      <StyledContent>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <StyledFormItem>
            <StyledLabel>Заголовок секції на головній сторінці:</StyledLabel>
            <StyledInput
              id={"homeTitle"}
              {...register("homeTitle")}
              required={true}
              placeholder="Заголовок секції на головній сторінці"
              type={"text"}
            />
          </StyledFormItem>
          <StyledFormItem>
            <StyledLabel>Заголовок на сторінці:</StyledLabel>
            <StyledInput
              id={"pageTitle"}
              {...register("pageTitle")}
              required={true}
              placeholder="Заголовок на сторінці:"
              type={"text"}
            />
          </StyledFormItem>
          <StyledFormItem>
            <StyledLabel>Короткий текст на головній сторінці:</StyledLabel>
            <StyledTextarea
              id={"shortDescription"}
              {...register("shortDescription")}
              required={true}
              placeholder="Короткий текст на головній сторінці"
            />
          </StyledFormItem>
          <StyledFormItem>
            <StyledLabel>Текст на сторінці:</StyledLabel>
            <StyledTextarea
              id={"longDescription"}
              {...register("longDescription")}
              required={true}
              placeholder="Текст на сторінці"
            />
          </StyledFormItem>
          <StyledImageContainer>
            {pageInfo?.imageUrl ? (
              <StyledMainImage
                src={
                  selectedFile
                    ? URL.createObjectURL(selectedFile)
                    : pageInfo.imageUrl
                }
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
          <StyledButton type="submit">Зберегти зміни</StyledButton>
        </StyledForm>
      </StyledContent>
    </PanelLayout>
  );
}
