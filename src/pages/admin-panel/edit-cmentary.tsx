import styled from "styled-components";
import PanelLayout from "../../components/AdminPanel/PanelLayout";
import { useEffect, useState } from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import { setGlobalState } from "../../context/state";
import { useForm } from "react-hook-form";
import { FileData } from "../../types/general";
import Image from "next/image";
import { uploadPhoto } from "../../utils/uploadPhoto";
import { FILE_BY_SUBCATEGORY } from "../../graphql/query/fileBySubcategory";
import { UPDATE_FILE } from "../../graphql/mutation/updateFile";
import PdfSlider from "../../components/PdfSlider";

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
  const [fileBySubcategory, { loading }] = useLazyQuery(FILE_BY_SUBCATEGORY, {
    fetchPolicy: "network-only",
    onCompleted: (data) => {
      if (!data) return;
      setFileData(data.filesBySubcategory[0]);
      setValue("title", data.filesBySubcategory[0].title);
    },
  });
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
        subcategoryId: "b704e3fa-6a4d-4c8b-a0b5-0bcb9f04566d",
        url: fileData?.url,
      },
    });
  };

  useEffect(() => {
    fileBySubcategory({
      variables: { subcategoryId: "b704e3fa-6a4d-4c8b-a0b5-0bcb9f04566d" },
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
    <PanelLayout pageTitle={"Cmentarz"}>
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
