import styled from "styled-components";
import PanelLayout from "../../components/AdminPanel/PanelLayout";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getEventTitle } from "../../utils/getEventTitle";
import { useForm } from "react-hook-form";
import { uploadPhoto } from "../../utils/uploadPhoto";
import Image from "next/image";
import trashIcon from "../../assets/images/trash-icon.svg";
import { useMutation } from "@apollo/client";
import { CREATE_EVENT } from "../../graphql/mutation/createEvent";
import { setGlobalState } from "../../context/state";

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
    max-width: 700px;
  }
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
const StyledTextarea = styled.textarea`
  max-width: 700px;
  min-height: 400px;
  font-size: 14px;
  border: 1px solid black;
  border-radius: 3px;
  padding: 5px;
`;
const StyledImageContainer = styled.div`
  display: flex;
  gap: 10px;
`;
const StyledImageItem = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
`;
const StyledImage = styled(Image)`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border: 1px solid var(--grey);
`;
const StyledIconButton = styled.button`
  background-color: transparent;
  border: none;
  height: 20px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export default function AddNewEvent() {
  const router = useRouter();
  const [eventType, setEventType] = useState<string | undefined>(undefined);
  const [pageTitle, setPageTitle] = useState<string | undefined>(undefined);
  const { register, handleSubmit, getValues } = useForm();
  const [imageFiles, setImageFiles] = useState<string[] | []>([]);
  const [createEvent, { loading }] = useMutation(CREATE_EVENT, {
    onCompleted: (data) => {
      if (!data) return;
      router.back();
    },
  });

  const onSubmit = () => {
    createEvent({
      variables: {
        type: eventType,
        title: getValues("title"),
        images: [...imageFiles],
        longDescription: getValues("longDesc"),
        shortDescription: getValues("shortDesc"),
        customerDate: "string",
      },
    });
  };

  useEffect(() => {
    if (!router) return;
    const type = router.query.eventType;
    setEventType(String(type));
  }, [router]);

  useEffect(() => {
    if (!eventType) return;
    const title = getEventTitle(eventType);
    setPageTitle(title);
  }, [eventType]);

  useEffect(() => {
    setGlobalState("isLoading", loading);
  }, [loading]);

  const handleFileSelect = async (file?: File) => {
    if (!file) return;
    const result = uploadPhoto(file);
    if (await result) {
      const newImageURL = `https://${
        process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME
      }.s3.eu-central-1.amazonaws.com/${encodeURIComponent(file.name)}`;
      setImageFiles((prev) => {
        if (!prev) {
          return [newImageURL];
        } else {
          return [...prev, newImageURL];
        }
      });
    }
  };

  const handleImageDelete = (imageUrl: string) => {
    const newImages = imageFiles.filter((image) => image !== imageUrl);
    setImageFiles(newImages);
  };

  return (
    <PanelLayout pageTitle={pageTitle || ""}>
      <StyledContent>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <StyledFormItem>
            <StyledLabel>Заголовок:</StyledLabel>
            <StyledInput
              id={"title"}
              {...register("title")}
              required={true}
              placeholder="Заголовок"
              type={"text"}
            />
          </StyledFormItem>
          <StyledFormItem>
            <StyledLabel>
              Короткий опис (буде розміщений в списку подій):
            </StyledLabel>
            <StyledInput
              id={"shortDesc"}
              {...register("shortDesc")}
              required={true}
              placeholder="Короткий опис (буде розміщений в списку подій)"
              type={"text"}
            />
          </StyledFormItem>
          <StyledFormItem>
            <StyledLabel>
              Oпис (буде розміщений на сторінці вибраної події):
            </StyledLabel>
            <StyledTextarea
              id={"longDesc"}
              {...register("longDesc")}
              required={true}
              placeholder="Oпис (буде розміщений на сторінці вибраної події)"
            />
          </StyledFormItem>
          {imageFiles && (
            <StyledImageContainer>
              {imageFiles.map((image) => (
                <StyledImageItem key={image}>
                  <StyledImage
                    src={image}
                    alt="New Image"
                    width={300}
                    height={300}
                  />
                  <StyledIconButton onClick={() => handleImageDelete(image)}>
                    <Image
                      src={trashIcon}
                      alt="Delete"
                      width={30}
                      height={30}
                    />
                  </StyledIconButton>
                </StyledImageItem>
              ))}
            </StyledImageContainer>
          )}
          <input
            type="file"
            id="file-input"
            name="file-input"
            accept="image/*"
            onChange={(e) =>
              handleFileSelect(e.target.files ? e.target.files[0] : undefined)
            }
          />
          <label id="file-input-label" htmlFor="file-input">
            Додати нове зображення
          </label>{" "}
          <StyledButton type="submit">Додати новий</StyledButton>
        </StyledForm>
      </StyledContent>
    </PanelLayout>
  );
}
