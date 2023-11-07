import { useEffect, useState } from "react";
import PanelLayout from "../../components/AdminPanel/PanelLayout";
import styled from "styled-components";
import { uploadPhoto } from "../../utils/uploadPhoto";
import PdfSlider from "../../components/PdfSlider";
import { useLazyQuery, useMutation } from "@apollo/client";
import { FILE_BY_SUBCATEGORY } from "../../graphql/query/fileBySubcategory";
import { setGlobalState } from "../../context/state";
import { CREATE_FILE } from "../../graphql/mutation/createFile";
import { UPDATE_FILE } from "../../graphql/mutation/updateFile";
import { useForm } from "react-hook-form";

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
    max-width: 300px;
  }
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const StyledLabel = styled.label``;
const StyledFormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const StyledInput = styled.input`
  border: 1px solid black;
  border-radius: 3px;
  padding: 5px;
  font-size: 14px;
  min-width: 300px;
  max-width: 700px;
`;
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
interface FileData {
  title: string;
  url: string;
  id: string;
  subcategoryId: string;
}
export default function EditUkrainianLaw() {
  const { register, handleSubmit, getValues, setValue } = useForm();
  const [file, setFile] = useState<FileData | undefined>(undefined);
  const [fileUrl, setFileUrl] = useState<string | undefined>(undefined);
  const [filesBySubcategory, { loading }] = useLazyQuery(FILE_BY_SUBCATEGORY, {
    onCompleted: (data) => {
      if (!data) return;
      if (data.filesBySubcategory[0]) {
        setValue("title", data.filesBySubcategory[0].title);
        setFileUrl(data.filesBySubcategory[0].url);
        setFile(data.filesBySubcategory[0]);
      }
    },
  });
  const [createFile, { loading: createFileLoading }] = useMutation(
    CREATE_FILE,
    {
      onCompleted: (data) => {
        if (!data) return;
        alert("Зміни збережено");
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
  useEffect(() => {
    filesBySubcategory({
      variables: { subcategoryId: "52aabdcb-00a5-4845-aefd-89ab27b64e97" },
    });
  }, []);
  useEffect(() => {
    setGlobalState(
      "isLoading",
      loading || createFileLoading || updateFileLoading
    );
  }, [loading, createFileLoading, updateFileLoading]);

  const handleFileSelect = async (file?: File) => {
    if (!file) return;
    const result = uploadPhoto(file);
    if (await result) {
      const newURL = `https://${
        process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME
      }.s3.eu-central-1.amazonaws.com/${encodeURIComponent(file.name)}`;
      setFileUrl(newURL);
    }
  };

  const onSubmit = () => {
    if (file) {
      updateFile({
        variables: {
          title: getValues("title"),
          url: fileUrl,
          subcategoryId: "52aabdcb-00a5-4845-aefd-89ab27b64e97",
          id: file.id,
        },
      });
    } else {
      createFile({
        variables: {
          title: getValues("title"),
          url: fileUrl,
          subcategoryId: "52aabdcb-00a5-4845-aefd-89ab27b64e97",
        },
      });
    }
  };
  return (
    <PanelLayout pageTitle={"prawo ukrainskie"}>
      <StyledContent>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <StyledFormItem>
            <StyledLabel>Назва файла:</StyledLabel>
            <StyledInput
              id={"title"}
              {...register("title")}
              required={true}
              placeholder="Заголовок"
              type={"text"}
            />
          </StyledFormItem>
          <input
            type="file"
            id="file-input"
            name="file-input"
            accept="pdf"
            onChange={(e) =>
              handleFileSelect(e.target.files ? e.target.files[0] : undefined)
            }
          />
          <label id="file-input-label" htmlFor="file-input">
            Додати новий pdf файл
          </label>
          {fileUrl && <PdfSlider pdfFile={fileUrl} />}
          <StyledButton type="submit">Зберегти зміни</StyledButton>
        </StyledForm>
      </StyledContent>
    </PanelLayout>
  );
}
