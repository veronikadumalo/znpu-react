import styled from "styled-components";
import PanelLayout from "../../components/AdminPanel/PanelLayout";
import { useEffect, useState } from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import { setGlobalState } from "../../context/state";
import { Post } from "../../types/general";
import { NEWS } from "../../graphql/query/news";
import NewItem from "../../components/AdminPanel/EditNews/NewItem";
import { DELETE_NEWS } from "../../graphql/mutation/deleteNews";
import { useRouter } from "next/router";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { UPDATE_NEWS } from "../../graphql/mutation/updateNews";

const StyledContent = styled.div`
  padding: 30px;
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

export default function EditPost() {
  const router = useRouter();
  const { register, handleSubmit, getValues, setValue } = useForm();
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

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
