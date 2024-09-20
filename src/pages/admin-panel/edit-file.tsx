import styled from "styled-components";
import PanelLayout from "../../components/AdminPanel/PanelLayout";
import { useEffect, useState } from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import { setGlobalState } from "../../context/state";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { CREATE_NEWS } from "../../graphql/mutation/createNews";
import Image from "next/image";
import { uploadPhoto } from "../../utils/uploadPhoto";
import { CREATE_FILE } from "../../graphql/mutation/createFile";
import FileLink from "../../components/FileLink";
import { UPDATE_FILE } from "../../graphql/mutation/updateFile";
import { FILE_BY_ID } from "../../graphql/query/fileById";
import { FileData } from "../../types/general";

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
  min-height: 400px;
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

const StyledImageContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export default function EditFile() {
  const router = useRouter();
  const { register, handleSubmit, getValues, setValue } = useForm();
  const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);
  const [file, setFile] = useState<FileData | undefined>(undefined);

  const [fileById, { loading: fileLoading }] = useLazyQuery(FILE_BY_ID, {
    fetchPolicy: "network-only",
    onCompleted: (data) => {
      if (!data || data?.fileById?.length < 0) return;
      setFile(data.fileById[0]);
      setValue("title", data.fileById[0].title);
    },
  });

  useEffect(() => {
    const id = router.query?.fileid;
    if (id) {
      fileById({ variables: { id: String(id) } });
    }
  }, [router]);

  const [updateFile, { loading }] = useMutation(UPDATE_FILE, {
    onCompleted: (data) => {
      if (!data) return;
      router.back();
    },
  });

  const onSubmit = () => {
    if (selectedFile) {
      updateFile({
        variables: {
          title: getValues("title"),
          url: `https://${process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME}.s3.eu-central-1.amazonaws.com/${selectedFile?.name}`,
          id: String(router?.query?.fileid),
        },
      });
    } else {
      updateFile({
        variables: {
          title: getValues("title"),
          url: file?.url,
          id: String(router?.query?.fileid),
        },
      });
    }
  };

  useEffect(() => {
    setGlobalState("isLoading", loading || fileLoading);
  }, [loading, fileLoading]);

  const generateRandom = () =>
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(23).substring(2, 5);

  const handleFileSelect = async (file?: File) => {
    const newFileName = generateRandom();
    const myNewFile =
      file &&
      new File([file], `${newFileName}.${file.name.split(".")[1]}`, {
        type: file.type,
      });
    const result = uploadPhoto(myNewFile);
    if (await result) {
      setSelectedFile(myNewFile);
    }
  };

  console.log(selectedFile);
  return (
    <PanelLayout pageTitle={"Edycja plika"}>
      <StyledContent>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <StyledFormItem>
            <StyledLabel>Назва файла на сторінці:</StyledLabel>
            <StyledInput
              id={"title"}
              {...register("title")}
              required={true}
              placeholder="Назва файла на сторінці"
              type={"text"}
            />
          </StyledFormItem>

          <StyledImageContainer>
            {selectedFile ? (
              <FileLink
                title={getValues("title")}
                fileLink={`https://${process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME}.s3.eu-central-1.amazonaws.com/${selectedFile?.name}`}
              />
            ) : (
              <FileLink title={getValues("title")} fileLink={file?.url || ""} />
            )}
            <input
              type="file"
              id="file-input"
              name="file-input"
              onChange={(e) =>
                handleFileSelect(e.target.files ? e.target.files[0] : undefined)
              }
            />
            <label id="file-input-label" htmlFor="file-input">
              Додати новий файл
            </label>
          </StyledImageContainer>
          <StyledButton type="submit">Зберегти зміни</StyledButton>
        </StyledForm>
      </StyledContent>
    </PanelLayout>
  );
}
