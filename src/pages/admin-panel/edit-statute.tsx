import styled from "styled-components";
import PanelLayout from "../../components/AdminPanel/PanelLayout";
import { useEffect } from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import { setGlobalState } from "../../context/state";
import { useForm } from "react-hook-form";
import { UPDATE_HOMEPAGE_CONTENT } from "../../graphql/mutation/updateHomePageContent";
import { HOME_PAGE_CONTENT } from "../../graphql/query/homePageContent";

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
  min-height: 700px;
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
  const { register, handleSubmit, getValues, setValue } = useForm();

  const [homePageContent, { loading: homePageContentLoading }] = useLazyQuery(
    HOME_PAGE_CONTENT,
    {
      onCompleted: (data) => {
        if (!data) return;
        const pageInfo = data.homePageContent.find(
          (item: any) => item.type === "statut"
        );
        setValue("homeTitle", pageInfo.homeTitle);
        setValue("longDescription", pageInfo.longDescription);
        setValue("pageTitle", pageInfo.pageTitle);
        setValue("shortDescription", pageInfo.shortDescription);
      },
    }
  );
  const [updateHomePageContent, { loading }] = useMutation(
    UPDATE_HOMEPAGE_CONTENT,
    {
      onCompleted: (data) => {
        if (!data) return;
        alert("Зміни збережено");
        // router.push("/admin-panel");
      },
    }
  );

  const onSubmit = () => {
    updateHomePageContent({
      variables: {
        homeTitle: "string",
        longDescription: getValues("longDescription"),
        pageTitle: getValues("pageTitle"),
        shortDescription: "string",
        type: "statut",
        imageUrl: "string",
      },
    });
  };

  useEffect(() => {
    homePageContent();
  }, []);

  useEffect(() => {
    setGlobalState("isLoading", loading || homePageContentLoading);
  }, [loading, homePageContentLoading]);

  return (
    <PanelLayout pageTitle={"Dodawanie nowej aktualności"}>
      <StyledContent>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <StyledFormItem>
            <StyledLabel>Заголовок на сторінці:</StyledLabel>
            <StyledInput
              id={"pageTitle"}
              {...register("pageTitle")}
              required={true}
              placeholder="Заголовок на сторінці:"
              type={"text"}
            />
          </StyledFormItem>
          <StyledFormItem>
            <StyledLabel>Текст на сторінці:</StyledLabel>
            <StyledTextarea
              id={"longDescription"}
              {...register("longDescription")}
              required={true}
              placeholder="Текст на сторінці"
            />
          </StyledFormItem>

          <StyledButton type="submit">Зберегти зміни</StyledButton>
        </StyledForm>
      </StyledContent>
    </PanelLayout>
  );
}
