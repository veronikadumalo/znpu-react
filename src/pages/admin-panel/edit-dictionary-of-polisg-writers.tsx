import styled from "styled-components";
import PanelLayout from "../../components/AdminPanel/PanelLayout";
import { useEffect, useState } from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import { setGlobalState } from "../../context/state";
import { useForm } from "react-hook-form";
import { EVENTS_BY_TYPE } from "../../graphql/query/eventsByType";
import { Event } from "../../types/general";
import { uploadPhoto } from "../../utils/uploadPhoto";
import { UPDATE_EVENT } from "../../graphql/mutation/updateEvent";
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
  const [eventDate, setEventDate] = useState<Event | undefined>(undefined);
  const [eventsByType, { loading }] = useLazyQuery(EVENTS_BY_TYPE, {
    fetchPolicy: "network-only",
    onCompleted: (data) => {
      if (!data) return;
      setEventDate(data.eventsByType[0]);
      setValue("title", data.eventsByType[0].title);
      setValue("longDesc", data.eventsByType[0].longDescription);
    },
  });
  const [updateEvent, { loading: updateEventLoading }] = useMutation(
    UPDATE_EVENT,
    {
      onCompleted: (data) => {
        if (!data) return;
        alert("Зміни збережено");
      },
    }
  );

  const onSubmit = () => {
    updateEvent({
      variables: {
        id: eventDate?.id,
        type: "dictationOfPolishWriters",
        title: getValues("title"),
        images: eventDate?.images,
        longDescription: getValues("longDesc"),
        shortDescription: "string",
        customerDate: "string",
      },
    });
  };

  useEffect(() => {
    eventsByType({ variables: { type: "dictationOfPolishWriters" } });
  }, []);

  useEffect(() => {
    setGlobalState("isLoading", loading || updateEventLoading);
  }, [loading, updateEventLoading]);

  const handleFileSelect = async (file?: File) => {
    if (!file) return;
    const result = uploadPhoto(file);
    if (await result) {
      const newImageURL = `https://${
        process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME
      }.s3.eu-central-1.amazonaws.com/${encodeURIComponent(file.name)}`;
      if (!eventDate) return;
      const newEventDate: Event = {
        ...eventDate,
        images: [...eventDate.images, newImageURL],
      };
      setEventDate(newEventDate);
    }
  };

  return (
    <PanelLayout pageTitle={"Słownik literatów polskich"}>
      <StyledContent>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <StyledFormItem>
            <StyledLabel>Заголовок на сторінці:</StyledLabel>
            <StyledInput
              id={"title"}
              {...register("title")}
              required={true}
              placeholder="Заголовок на сторінці"
              type={"text"}
            />
          </StyledFormItem>
          <StyledFormItem>
            <StyledLabel>Опис:</StyledLabel>
            <StyledTextarea
              id={"longDesc"}
              {...register("longDesc")}
              required={true}
              placeholder="Опис"
            />
          </StyledFormItem>
          {eventDate?.images[0] && <PdfSlider pdfFile={eventDate?.images[0]} />}
          <input
            type="file"
            id="file-input"
            name="file-input"
            accept="application/pdf"
            onChange={(e) =>
              handleFileSelect(e.target.files ? e.target.files[0] : undefined)
            }
          />
          <label id="file-input-label" htmlFor="file-input">
            Додати новий файл (максимальний розмір 2 МБ)
          </label>{" "}
          <StyledButton type="submit">Зберегти зміни</StyledButton>
        </StyledForm>
      </StyledContent>
    </PanelLayout>
  );
}
