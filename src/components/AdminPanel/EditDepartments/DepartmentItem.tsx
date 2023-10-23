import styled from "styled-components";
import { Department } from "../../../types/general";
import Image from "next/image";
import trashIcon from "../../../assets/images/trash-icon.svg";
import saveIcon from "../../../assets/images/save-icon.png";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_DEPARTMENT } from "../../../graphql/mutation/updateDepartment";
import { setGlobalState } from "../../../context/state";
import { DELETE_DEPARTMENT } from "../../../graphql/mutation/deleteDepartment";
import { useRouter } from "next/router";
import PersonItem from "./PersonItem";
import AddNewPerson from "./AddNewPerson";

const StyledDepartment = styled.div`
  padding: 40px 0 40px;
  border-bottom: 1px solid var(--grey);
`;
const StyledTitle = styled.h4``;
const StyledTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledIconButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
const StyledEditContainer = styled.div``;

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
const StyledPersonsContainer = styled.div`
  padding: 10px 0;
`;

const StyledSubtitle = styled.p`
  font-size: 12px;
  text-transform: uppercase;
`;

interface DepartmentItemProps {
  department: Department;
}

export default function DepartmentItem({ department }: DepartmentItemProps) {
  const router = useRouter();
  const [updateDepartment, { loading }] = useMutation(UPDATE_DEPARTMENT);
  const [deleteDepartment, { loading: deleteDepartmentLoading }] =
    useMutation(DELETE_DEPARTMENT);
  const { register, handleSubmit, getValues, setValue } = useForm();

  useEffect(() => {
    if (!department) return;
    setValue(department.id, department.title);
  }, [department]);

  useEffect(() => {
    setGlobalState("isLoading", loading || deleteDepartmentLoading);
  }, [loading, deleteDepartmentLoading]);

  const onSubmit = () => {
    updateDepartment({
      variables: {
        id: department.id,
        title: getValues(department.id),
      },
    });
  };

  const handleDelete = () => {
    deleteDepartment({ variables: { id: department.id } });
    router.reload();
  };

  return (
    <StyledDepartment>
      <StyledTitleContainer>
        {/* <StyledTitle>{department.title}</StyledTitle> */}
        <StyledEditContainer>
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <StyledInput
              id={department.id}
              {...register(department.id)}
              required={true}
            />
            <StyledIconButton type="submit">
              <Image src={saveIcon} alt={"Save"} width={20} height={20} />
            </StyledIconButton>
          </StyledForm>
        </StyledEditContainer>
        <StyledIconButton onClick={handleDelete}>
          <Image src={trashIcon} alt={"Delete"} width={20} height={20} />
        </StyledIconButton>
      </StyledTitleContainer>
      <StyledPersonsContainer>
        <StyledSubtitle>Persons</StyledSubtitle>
        {department.persons.map((person) => (
          <PersonItem key={person.id} person={person} />
        ))}
      </StyledPersonsContainer>
      <AddNewPerson departmentId={department.id} />
    </StyledDepartment>
  );
}
