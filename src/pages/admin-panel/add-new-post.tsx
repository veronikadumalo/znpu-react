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
import { CREATE_NEWS } from "../../graphql/mutation/createNews";

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
  const { register, handleSubmit, getValues } = useForm();

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
        imageUrl: "string",
      },
    });
  };

  useEffect(() => {
    setGlobalState("isLoading", loading);
  }, [loading]);

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
          <StyledButton type="submit">Додати</StyledButton>
        </StyledForm>
      </StyledContent>
    </PanelLayout>
  );
}
