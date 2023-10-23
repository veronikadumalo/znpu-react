import { Person } from ".prisma/client";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Image from "next/image";
import trashIcon from "../../../assets/images/trash-icon.svg";
import saveIcon from "../../../assets/images/save-icon.png";
import { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_PERSON } from "../../../graphql/mutation/updatePersona";
import { setGlobalState } from "../../../context/state";
import { DELETE_PERSON } from "../../../graphql/mutation/deletePersona";
import { useRouter } from "next/router";

const StyledPerson = styled.div`
  padding: 5px 0;
  display: flex;
  justify-content: space-between;
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

interface PersonItemProps {
  person: Person;
}

export default function PersonItem({ person }: PersonItemProps) {
  const router = useRouter();
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
    setGlobalState("isLoading", loading);
  }, [loading]);

  return (
    <StyledPerson>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
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
