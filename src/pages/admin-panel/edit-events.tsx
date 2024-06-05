import styled from "styled-components";
import PanelLayout from "../../components/AdminPanel/PanelLayout";
import { useEffect, useState } from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import { setGlobalState } from "../../context/state";
import { useRouter } from "next/router";
import { EVENTS_BY_TYPE } from "../../graphql/query/eventsByType";
import { getEventTitle } from "../../utils/getEventTitle";
import Image from "next/image";
import { Event } from "../../types/general";
import trashIcon from "../../assets/images/trash-icon.svg";
import editIcon from "../../assets/images/edit-icon.png";
import { DELETE_EVENT } from "../../graphql/mutation/deleteEvent";
import { getFormattedDate } from "../../utils/getFormattedDate";

const StyledContent = styled.div`
  padding: 30px;
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

const StyledEventList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
  & a {
    text-decoration: none;
  }
`;
const StyledEventItem = styled.li`
  display: flex;
  gap: 20px;
  border-bottom: 1px solid var(--grey);
  padding-bottom: 25px;
  width: 100%;
`;
const StyledMainImage = styled(Image)`
  min-width: 250px;
  width: 250px;
  height: auto;
  object-fit: cover;
`;
const StyledEventContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;
const StyledEventTitle = styled.h3`
  font-size: 25px;
  padding: 8px 0;
  color: var(--primary);
  font-weight: 900;
  width: 100%;
  /* border-bottom: 1px solid var(--primary); */
`;
const StyledEventDescription = styled.p`
  color: var(--black);
  font-size: 20px;
  padding: 8px 0;
`;
const StyledEventDate = styled.p`
  color: var(--black);
  font-size: 15px;
`;

const StyledEventContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  gap: 25px;
`;
const StyledIconButton = styled.button`
  background-color: transparent;
  border: none;
  height: 20px;
  cursor: pointer;
`;

export default function EditEvents() {
  const router = useRouter();
  const [eventType, setEventType] = useState<string | undefined>(undefined);

  const [pageTitle, setPageTitle] = useState<string | undefined>(undefined);
  const [eventsData, setEventsData] = useState<Event[] | []>([]);
  const [eventsByType, { loading, refetch }] = useLazyQuery(EVENTS_BY_TYPE, {
    onCompleted: (data) => {
      if (!data) return;
      const newArr = [...data.eventsByType].sort(function (a: any, b: any) {
        const dateA = new Date(a.customerDate).getTime();
        const dateB = new Date(b.customerDate).getTime();
        return dateA < dateB ? 1 : -1; // ? -1 : 1 for ascending/increasing order
      });
      setEventsData(newArr);
    },
    fetchPolicy: "cache-and-network",
  });
  const [deleteEvent, { loading: deleteEventLoading }] = useMutation(
    DELETE_EVENT,
    {
      onCompleted: (data) => {
        if (!data) return;
        refetch({ variables: { type: eventType } }).then((result) => {
          if (!result) return;
          const newArr = result.data.eventsByType.sort(function (
            a: any,
            b: any
          ) {
            const dateA = new Date(a.customerDate).getTime();
            const dateB = new Date(b.customerDate).getTime();
            return dateA < dateB ? 1 : -1; // ? -1 : 1 for ascending/increasing order
          });
          setEventsData(newArr);
        });
      },
    }
  );
  useEffect(() => {
    if (!router) return;
    const type = router.query.eventType;
    setEventType(String(type));
  }, [router]);

  useEffect(() => {
    if (!eventType) return;
    const title = getEventTitle(eventType);
    setPageTitle(title);
    eventsByType({ variables: { type: eventType } });
  }, [eventType]);

  useEffect(() => {
    setGlobalState("isLoading", loading || deleteEventLoading);
  }, [loading, deleteEventLoading]);

  return (
    <PanelLayout pageTitle={pageTitle || ""}>
      <StyledContent>
        <StyledEventList>
          {eventsData?.map((event) => {
            const date = getFormattedDate(event.customerDate);
            return (
              <StyledEventContainer key={event.id}>
                <StyledEventItem>
                  <StyledMainImage
                    src={event.images[0]}
                    width={200}
                    height={200}
                    alt={event.title}
                  />
                  <StyledEventContent>
                    <StyledEventTitle>{event.title}</StyledEventTitle>
                    <StyledEventDescription>
                      {event.shortDescription}
                    </StyledEventDescription>
                    <StyledEventDate>{date}</StyledEventDate>
                  </StyledEventContent>
                </StyledEventItem>
                <StyledButtonContainer>
                  <StyledIconButton
                    onClick={() =>
                      router.push(`/admin-panel/edit-event?id=${event.id}`)
                    }
                  >
                    <Image src={editIcon} alt="Edit" width={30} height={30} />
                  </StyledIconButton>
                  <StyledIconButton
                    onClick={() => deleteEvent({ variables: { id: event.id } })}
                  >
                    <Image
                      src={trashIcon}
                      alt="Delete"
                      width={30}
                      height={30}
                    />
                  </StyledIconButton>
                </StyledButtonContainer>
              </StyledEventContainer>
            );
          })}
        </StyledEventList>
        <StyledButton
          onClick={() =>
            router.push(`/admin-panel/add-new-event?eventType=${eventType}`)
          }
        >
          Dodaj nowy
        </StyledButton>
      </StyledContent>
    </PanelLayout>
  );
}
