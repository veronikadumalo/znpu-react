import styled from "styled-components";
import PanelLayout from "../../components/AdminPanel/PanelLayout";
import { useEffect, useState } from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import { setGlobalState } from "../../context/state";
import { PageInfo } from "../../types/general";

import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { UPDATE_PAGE_INFO } from "../../graphql/mutation/updatePageInfo";
import { PAGE_INFO } from "../../graphql/query/pageInfo";

const StyledButton = styled.button`
  margin-top: 30px;
  background-color: transparent;
  border: 1px solid black;
  border-radius: 3px;
  text-transform: uppercase;
  width: 300px;
  padding: 5px;
  cursor: pointer;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px 0;
`;
const StyledInput = styled.input`
  border: 1px solid black;
  border-radius: 3px;
  padding: 5px;
  font-size: 14px;
  min-width: 300px;
  max-width: 700px;
`;

const StyledLabel = styled.label``;
const StyledFormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export default function EditHomepage() {
  const { register, handleSubmit, getValues, setValue } = useForm();
  const router = useRouter();
  const [pageInfoData, setPageInfoData] = useState<PageInfo | null>(null);
  const [pageInfo, { loading: pageInfoLoading }] = useLazyQuery(PAGE_INFO, {
    fetchPolicy: "cache-and-network",
    onCompleted: (data) => {
      if (!data) return;
      setPageInfoData(data.pageInfo[0]);
    },
  });
  const [updatePageInfo, { loading }] = useMutation(UPDATE_PAGE_INFO, {
    onCompleted: (data) => {
      if (!data) return;
      router.push("/admin-panel/menu");
    },
  });

  useEffect(() => {
    pageInfo();
  }, []);

  useEffect(() => {
    setGlobalState("isLoading", loading || pageInfoLoading);
  }, [loading, pageInfoLoading]);

  useEffect(() => {
    if (!pageInfoData) return;
    setValue("email", pageInfoData?.email);
    setValue("additionalEmail", pageInfoData?.additionalEmail);
    setValue("facebookLink", pageInfoData?.facebookLink);
    setValue("phoneNuber", pageInfoData?.phoneNuber);
    setValue("plAddress", pageInfoData?.plAddress);
    setValue("plPageTitle", pageInfoData?.plPageTitle);
    setValue("uaAddress", pageInfoData?.uaAddress);
    setValue("uaPageTitle", pageInfoData?.uaPageTitle);
  }, [pageInfoData]);

  const onSubmit = () => {
    updatePageInfo({
      variables: {
        id: pageInfoData?.id,
        email: getValues("email"),
        additionalEmail: getValues("additionalEmail"),
        facebookLink: getValues("facebookLink"),
        phoneNuber: getValues("phoneNuber"),
        plPageTitle: getValues("plPageTitle"),
        uaPageTitle: getValues("uaPageTitle"),
        plAddress: getValues("plAddress"),
        uaAddress: getValues("uaAddress"),
      },
    });
  };

  return (
    <PanelLayout pageTitle={"Edycja strony głownej"}>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledFormItem>
          <StyledLabel>Заголовок сторінки польською:</StyledLabel>
          <StyledInput
            id={"plPageTitle"}
            {...register("plPageTitle")}
            required={true}
            placeholder="Заголовок сторінки польською"
            type={"text"}
          />
        </StyledFormItem>
        <StyledFormItem>
          <StyledLabel>Заголовок сторінки польською:</StyledLabel>
          <StyledInput
            id={"uaPageTitle"}
            {...register("uaPageTitle")}
            required={true}
            placeholder="Заголовок сторінки українською"
            type={"text"}
          />
        </StyledFormItem>
        <StyledFormItem>
          <StyledLabel>Адреса польською:</StyledLabel>
          <StyledInput
            id={"plAddress"}
            {...register("plAddress")}
            required={true}
            placeholder="Адреса польською"
          />
        </StyledFormItem>
        <StyledFormItem>
          <StyledLabel>Адреса українською:</StyledLabel>
          <StyledInput
            id={"uaAddress"}
            {...register("uaAddress")}
            required={true}
            placeholder="Адреса українською"
          />
        </StyledFormItem>
        <StyledFormItem>
          <StyledLabel>Номер телефону:</StyledLabel>
          <StyledInput
            id={"phoneNuber"}
            {...register("phoneNuber")}
            required={true}
            placeholder="Номер телефоную"
          />
        </StyledFormItem>
        <StyledFormItem>
          <StyledLabel>Електронна пошта:</StyledLabel>
          <StyledInput
            id={"email"}
            {...register("email")}
            required={true}
            placeholder="Електронна пошта"
          />
        </StyledFormItem>
        <StyledFormItem>
          <StyledLabel>Додаткова електронна пошта:</StyledLabel>
          <StyledInput
            id={"additionalEmail"}
            {...register("additionalEmail")}
            required={true}
            placeholder="Додаткова електронна пошта"
          />
        </StyledFormItem>
        <StyledFormItem>
          <StyledLabel>Посилання на фейсбук:</StyledLabel>
          <StyledInput
            id={"facebookLink"}
            {...register("facebookLink")}
            required={true}
            placeholder="Посилання на фейсбук"
          />
        </StyledFormItem>
        <StyledButton type="submit">Зберегти зміни</StyledButton>
      </StyledForm>
    </PanelLayout>
  );
}
