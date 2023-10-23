import { useForm } from "react-hook-form";
import styled from "styled-components";
import { CREATE_DEPARTMENT } from "../../../graphql/mutation/createDepartment";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { setGlobalState } from "../../../context/state";

const StyledForm = styled.form`
  display: flex;
  gap: 15px;
  padding: 20px 0;
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
const StyledContainer = styled.div`
  padding: 20px 0;
`;

export default function AddNewDepartment() {
  const router = useRouter();
  const { register, handleSubmit, getValues } = useForm();
  const [createDepartment, { loading }] = useMutation(CREATE_DEPARTMENT, {
    onCompleted: (data) => {
      if (!data) return;
      router.reload();
    },
  });
  const onSubmit = () => {
    createDepartment({
      variables: {
        title: getValues("title"),
        name: getValues("name"),
        email: getValues("email"),
      },
    });
  };
  useEffect(() => {
    setGlobalState("isLoading", loading);
  }, [loading]);
  return (
    <StyledContainer>
      <h3>Нова організація</h3>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledInput
          id="title"
          {...register("title")}
          type="text"
          required={true}
        />
        <StyledInput
          id="name"
          {...register("name")}
          type="text"
          required={true}
        />
        <StyledInput
          id="email"
          {...register("email")}
          type="email"
          required={true}
        />
        <StyledButton type="submit">Додати нову організацію</StyledButton>
      </StyledForm>
    </StyledContainer>
  );
}
