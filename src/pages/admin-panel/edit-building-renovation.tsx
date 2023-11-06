import styled from "styled-components";
import PanelLayout from "../../components/AdminPanel/PanelLayout";
import { useEffect, useState } from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import { setGlobalState } from "../../context/state";
import { useForm } from "react-hook-form";
import { EVENTS_BY_TYPE } from "../../graphql/query/eventsByType";
import { Event } from "../../types/general";
import Image from "next/image";
import trashIcon from "../../assets/images/trash-icon.svg";
import { uploadPhoto } from "../../utils/uploadPhoto";
import { UPDATE_EVENT } from "../../graphql/mutation/updateEvent";

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

export default function EditBuildingRenovation() {
  const { register, handleSubmit, getValues, setValue } = useForm();
  const [eventDate, setEventDate] = useState<Event | undefined>(undefined);
  const [eventsByType, { loading }] = useLazyQuery(EVENTS_BY_TYPE, {
    onCompleted: (data) => {
      if (!data) return;
      setEventDate(data.eventsByType[0]);
      setValue("title", data.eventsByType[0].title);
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
        type: "buildingRenovation",
        title: getValues("title"),
        images: eventDate?.images,
        longDescription: "string",
        shortDescription: "string",
        customerDate: "string",
      },
    });
  };

  useEffect(() => {
    eventsByType({ variables: { type: "buildingRenovation" } });
  }, []);

  useEffect(() => {
    setGlobalState("isLoading", loading || updateEventLoading);
  }, [loading, updateEventLoading]);

  const handleImageDelete = (e: any, image: string) => {
    e.preventDefault();
    if (!eventDate) return;
    const newImages = eventDate?.images.filter((item) => image !== item);
    setEventDate({ ...eventDate, images: newImages });
  };
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
    <PanelLayout pageTitle={"Dodawanie nowej aktualności"}>
      <StyledContent>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <StyledFormItem>
            <StyledLabel>Заголовок на сторінці:</StyledLabel>
            <StyledInput
              id={"title"}
              {...register("title")}
              required={true}
              placeholder="Заголовок на сторінці:"
              type={"text"}
            />
          </StyledFormItem>
          {eventDate?.images && (
            <StyledImageContainer>
              {eventDate?.images?.map((image) => (
                <StyledImageItem key={image}>
                  <StyledImage
                    src={image}
                    alt="New Image"
                    width={300}
                    height={300}
                  />
                  <StyledIconButton
                    onClick={(e) => handleImageDelete(e, image)}
                  >
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
            Додати зображення в галерею
          </label>{" "}
          <StyledButton type="submit">Зберегти зміни</StyledButton>
        </StyledForm>
      </StyledContent>
    </PanelLayout>
  );
}
