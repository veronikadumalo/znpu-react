import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { CREATE_PERSON } from "../../../graphql/mutation/createPersona";
import { setGlobalState } from "../../../context/state";
import { useEffect } from "react";
import { useRouter } from "next/router";

const StyledForm = styled.form`
  display: flex;
  gap: 15px;
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

interface AddNewPersonProps {
  departmentId: string;
}

export default function AddNewPerson({ departmentId }: AddNewPersonProps) {
  const router = useRouter();
  const [createPersona, { loading }] = useMutation(CREATE_PERSON, {
    onCompleted: (data) => {
      if (!data) return;
      router.reload();
    },
  });
  const { register, handleSubmit, getValues } = useForm();
  const onSubmit = () => {
    console.log("submit");
    createPersona({
      variables: {
        deparmentId: departmentId,
        name: getValues(`${departmentId}_name`),
        email: getValues(`${departmentId}_email`),
      },
    });
  };
  useEffect(() => {
    setGlobalState("isLoading", loading);
  }, [loading]);
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
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
