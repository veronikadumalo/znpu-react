import styled from "styled-components";
import Layout from "../components/Layout";
import { useForm } from "react-hook-form";
import { useState } from "react";

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
`;
const StyledInput = styled.input`
  border: 1px solid var(--primary);
  height: 45px;
  border-radius: 7px;
  outline: none;
  font-size: 18px;
  padding: 5px;
  width: 100%;
`;
const StyledLabel = styled.label`
  font-weight: bold;
`;
const StyledTitle = styled.h2`
  text-align: center;
  font-style: italic;
  max-width: 70%;
  margin: 0 auto;
  padding-bottom: 30px;
`;
const StyledButton = styled.button`
  background-color: var(--primary);
  color: var(--white);
  border: none;
  padding: 15px 30px;
  font-size: 18px;
  border-radius: 7px;
  text-align: center;
  max-width: 220px;
  margin-top: 20px;
  cursor: pointer;
`;
const StyledError = styled.div`
  height: 20px;
  color: var(--primary);
`;
const DolaczDoNas = () => {
  const [formError, setFormError] = useState<string | null>(null);
  const { register, handleSubmit, getValues } = useForm();
  const onSubmit = () => {
    if (getValues("password") !== getValues("confirmPassword")) {
      setFormError("Підтверджений пароль не збігається з поданим паролем");
      return;
    }
    if (getValues("email") !== getValues("confirmEmail")) {
      setFormError(
        "Підтверджена електронна адреса не збігається з поданою адресою"
      );
      return;
    }
    setFormError(null);
  };

  return (
    <Layout>
      <StyledTitle>Dalącz do nas</StyledTitle>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        {REGISTRATION_FORM.map((item) => (
          <StyledField key={item.id}>
            <StyledLabel>
              {item.lable}: {item.isRequired && <span>*</span>}
            </StyledLabel>
            <StyledInput
              id={item.id}
              {...register(item.id)}
              required={item.isRequired}
              type={item.type}
            />
          </StyledField>
        ))}
        <StyledError>{formError}</StyledError>
        <StyledButton type="submit">Зареєструватися</StyledButton>
      </StyledForm>
    </Layout>
  );
};

export default DolaczDoNas;

interface Field {
  lable: string;
  id: string;
  isRequired: boolean;
  type: string;
}
const REGISTRATION_FORM: Field[] = [
  {
    lable: "Ім'я",
    id: "name",
    isRequired: true,
    type: "text",
  },
  {
    lable: "Логін",
    id: "login",
    isRequired: true,
    type: "text",
  },
  {
    lable: "Пароль",
    id: "password",
    isRequired: true,
    type: "password",
  },
  {
    lable: "Підтвердіть пароль",
    id: "confirmPassword",
    isRequired: true,
    type: "password",
  },
  {
    lable: "Адреса електронної пошти",
    id: "email",
    isRequired: true,
    type: "email",
  },
  {
    lable: "Підтвердіть електронну адресу",
    id: "confirmEmail",
    isRequired: true,
    type: "email",
  },
  {
    lable: "Адреса 1 ",
    id: "address",
    isRequired: false,
    type: "text",
  },
  {
    lable: "Місто",
    id: "city",
    isRequired: true,
    type: "text",
  },
  {
    lable: "Область/Регіон",
    id: "region",
    isRequired: true,
    type: "text",
  },
  {
    lable: "Телефон",
    id: "phoneNumber",
    isRequired: false,
    type: "number",
  },
  {
    lable: "Про себе",
    id: "about",
    isRequired: false,
    type: "text",
  },
];
