import styled from "styled-components";
import PanelLayout from "../../components/AdminPanel/PanelLayout";
import { useEffect, useState } from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import { setGlobalState } from "../../context/state";
import { Post } from "../../types/general";
import { NEWS } from "../../graphql/query/news";
import { DELETE_NEWS } from "../../graphql/mutation/deleteNews";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { UPDATE_NEWS } from "../../graphql/mutation/updateNews";
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
  const { register, handleSubmit, getValues, setValue } = useForm();
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);

  const [news, { loading, refetch }] = useLazyQuery(NEWS, {
    onCompleted: (data) => {
      if (!data) return;
      const post = data.news.find(
        (item: any) => item.id === String(router.query.postId)
      );
      setSelectedPost(post);
    },
  });
  const [deleteNews, { loading: deleteNewsLoading }] = useMutation(
    DELETE_NEWS,
    {
      onCompleted: (data) => {
        if (!data) return;
        router.push("/admin-panel/edit-news");
      },
    }
  );
  const [updateNews, { loading: updateNewsLoading }] = useMutation(
    UPDATE_NEWS,
    {
      onCompleted: (data) => {
        if (!data) return;
        router.push("/admin-panel/edit-news");
      },
    }
  );

  const onSubmit = () => {
    updateNews({
      variables: {
        title: getValues("title"),
        subtitle: getValues("subtitle"),
        description: getValues("description"),
        id: selectedPost?.id,
        imageUrl: "string",
      },
    });
  };

  const handleFileSelect = async (file?: File) => {
    const result = uploadPhoto(file);
    if (await result) {
      setSelectedFile(file);
    }
  };

  useEffect(() => {
    news();
  }, []);

  useEffect(() => {
    setGlobalState(
      "isLoading",
      loading || deleteNewsLoading || updateNewsLoading
    );
  }, [loading, deleteNewsLoading, updateNewsLoading]);

  useEffect(() => {
    if (!selectedPost) return;
    setValue("title", selectedPost.title);
    setValue("subtitle", selectedPost.subtitle);
    setValue("description", selectedPost.description);
  }, [selectedPost]);
  return (
    <PanelLayout
      pageTitle={`Edycja aktualności "${
        selectedPost?.title ? selectedPost.title : ""
      }"`}
    >
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
            {selectedPost?.imageUrl ? (
              <StyledMainImage
                src={
                  selectedFile
                    ? URL.createObjectURL(selectedFile)
                    : selectedPost.imageUrl
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
          <StyledButton
            onClick={(e) => {
              e.preventDefault();
              deleteNews({ variables: { id: selectedPost?.id } });
            }}
          >
            Видалити
          </StyledButton>
        </StyledForm>
      </StyledContent>
    </PanelLayout>
  );
}
