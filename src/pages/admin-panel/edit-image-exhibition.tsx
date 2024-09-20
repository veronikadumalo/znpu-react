import styled from "styled-components";
import PanelLayout from "../../components/AdminPanel/PanelLayout";
import { useEffect, useState } from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import { setGlobalState } from "../../context/state";
import { useForm } from "react-hook-form";
import { FileData } from "../../types/general";
import { uploadPhoto } from "../../utils/uploadPhoto";
import { FILE_BY_SUBCATEGORY } from "../../graphql/query/fileBySubcategory";
import { UPDATE_FILE } from "../../graphql/mutation/updateFile";
import PdfSlider from "../../components/PdfSlider";
import { FILES_BY_SUBCATEGORY_NAME } from "../../graphql/query/fileBySubcategoryName";

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
    width: 300px;
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

export default function Page() {
  const { register, handleSubmit, getValues, setValue } = useForm();
  const [fileData, setFileData] = useState<FileData | undefined>(undefined);
  const [fileBySubcategoryName, { loading }] = useLazyQuery(
    FILES_BY_SUBCATEGORY_NAME,
    {
      fetchPolicy: "network-only",
      onCompleted: (data) => {
        if (!data) return;
        console.log(data);
        setFileData(data.filesBySubcategoryName[0]);
        setValue("title", data.filesBySubcategoryName[0].title);
      },
    }
  );
  const [updateFile, { loading: updateFileLoading }] = useMutation(
    UPDATE_FILE,
    {
      onCompleted: (data) => {
        if (!data) return;
        alert("Зміни збережено");
      },
    }
  );

  const onSubmit = () => {
    updateFile({
      variables: {
        id: fileData?.id,
        title: getValues("title"),
        subcategoryId: "66e91f69a08bad60fe3d114f",
        url: fileData?.url,
      },
    });
  };

  useEffect(() => {
    fileBySubcategoryName({
      variables: { subcategoryName: "WYSTAWA OBRAZÓW" },
    });
  }, []);

  useEffect(() => {
    setGlobalState("isLoading", loading || updateFileLoading);
  }, [loading, updateFileLoading]);

  const handleFileSelect = async (file?: File) => {
    if (!file) return;
    const result = uploadPhoto(file);
    if (await result) {
      const newFileURL = `https://${
        process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME
      }.s3.eu-central-1.amazonaws.com/${encodeURIComponent(file.name)}`;
      if (!fileData) return;
      const newFileDate: FileData = {
        ...fileData,
        url: newFileURL,
      };
      setFileData(newFileDate);
    }
  };

  return (
    <PanelLayout pageTitle={"Wystawa obrazów"}>
      <StyledContent>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <StyledFormItem>
            <StyledLabel>Назва файлу, яка буде на сторінці:</StyledLabel>
            <StyledInput
              id={"title"}
              {...register("title")}
              required={true}
              placeholder="Назва файлу, яка буде на сторінці:"
              type={"text"}
            />
          </StyledFormItem>
          <input
            type="file"
            id="file-input"
            name="file-input"
            accept="application/pdf"
            onChange={(e) =>
              handleFileSelect(e.target.files ? e.target.files[0] : undefined)
            }
          />
          <PdfSlider pdfFile={fileData?.url} />
          <label id="file-input-label" htmlFor="file-input">
            Додати новий файл (максимальний розмір 2MB )
          </label>{" "}
          <StyledButton type="submit">Зберегти зміни</StyledButton>
        </StyledForm>
      </StyledContent>
    </PanelLayout>
  );
}
