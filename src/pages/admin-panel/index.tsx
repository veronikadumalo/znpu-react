import styled from "styled-components";
import PageWrapper from "../../components/PageWrapper";
import Link from "next/link";
import logo from "../../assets/images/logo.png";
import Image from "next/image";
import { ADMIN_PANEL_MENU } from "../../data/adminPanel/menu";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const StyledContainer = styled.div``;
const StyledTitle = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: var(--primary);
  padding: 40px 50px;
  text-transform: uppercase;
  @media (max-width: 1200px) {
    padding: 30px;
  }
`;
const StyledHeading = styled.h1`
  font-size: 1.6rem;
  font-weight: 900;
  text-align: center;
  @media (max-width: 1200px) {
    font-size: 1.3em;
  }
  @media (max-width: 1000px) {
    font-size: 1rem;
  }
`;
const StyledLogo = styled(Image)`
  width: 80px;
  height: auto;
  @media (max-width: 1200px) {
    width: 70px;
  }
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
  padding: 50px;
  gap: 15px;
  border: 1px solid black;
  border-radius: 5px;
  margin-top: 30px;
`;
const StyledFormItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
const StyledFormTitle = styled.h2`
  text-align: center;
  padding-bottom: 15px;
`;
const StyledLabel = styled.label``;
const StyledInput = styled.input`
  padding: 8px 4px;
  border: 1px solid grey;
  border-radius: 4px;
  outline: none;
`;
const StyledButton = styled.button`
  border: none;
  background-color: black;
  color: white;
  padding: 8px;
  border-radius: 4px;
`;
const StyledError = styled.p`
  height: 10px;
  color: red;
  font-size: 11px;
`;

export default function AdminPanel() {
  const router = useRouter();
  const { register, handleSubmit, getValues, setValue, watch } = useForm();
  const [isPasswordOpened, setIsPasswordOpened] = useState<boolean>(false);
  const [isLoginError, setIsLoginError] = useState<boolean>(false);
  const onSubmit = () => {
    const login = getValues("login");
    const password = getValues("password");
    if (
      login === process.env.NEXT_PUBLIC_USER_LOGIN &&
      password === process.env.NEXT_PUBLIC_USER_PASSOWRD
    ) {
      sessionStorage.setItem("isLogin", "true");
      router.push("/admin-panel/menu");
    } else {
      setIsLoginError(true);
    }
  };
  useEffect(() => {
    setIsLoginError(false);
  }, [watch("login"), watch("password")]);
  return (
    <PageWrapper>
      <StyledTitle href="/">
        <StyledHeading>Cпілка вчителів - полоністів України</StyledHeading>
        <StyledLogo src={logo} alt="Cпілка вчителів - полоністів України" />
        <StyledHeading>
          Zjednoczenie nauczycieli polskich w Ukrainie
        </StyledHeading>
      </StyledTitle>
      <StyledContainer>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <StyledFormTitle>Вхід</StyledFormTitle>
          <StyledFormItemContainer>
            <StyledLabel>Логін</StyledLabel>
            <StyledInput
              id={"login"}
              {...register("login")}
              required={true}
              placeholder="Логін"
              type={"text"}
            />
          </StyledFormItemContainer>
          <StyledFormItemContainer>
            <StyledLabel>Пароль</StyledLabel>
            <StyledInput
              id={"password"}
              {...register("password")}
              required={true}
              placeholder="Пароль"
              type={"password"}
            />
          </StyledFormItemContainer>
          <StyledError>
            {isLoginError ? "Неправильний логін або пароль" : ""}
          </StyledError>
          <StyledButton type={"submit"}>Увійти</StyledButton>
        </StyledForm>
      </StyledContainer>
    </PageWrapper>
  );
}
