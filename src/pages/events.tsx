import { useRouter } from "next/router";
import Layout from "../components/Layout";
import { SubMenu } from "../components/SubMenu";
import { NAVIGATION } from "../data/navigation";
import { useEffect, useState } from "react";
import { getEventTitle } from "../utils/getEventTitle";
import styled from "styled-components";
import { Event } from "../types/general";
import Link from "next/link";
import Image from "next/image";
import { useLazyQuery } from "@apollo/client";
import { setGlobalState } from "../context/state";
import { EVENTS_BY_TYPE } from "../graphql/query/eventsByType";

const StyledContainer = styled.div`
  display: flex;
`;
const StyledContent = styled.div`
  width: 100%;
  padding: 0 30px;
`;
const StyledTitle = styled.h2`
  text-align: center;
  font-style: italic;
  max-width: 70%;
  margin: 0 auto;
  padding-bottom: 30px;
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

function Events() {
  const router = useRouter();
  const [eventType, setEventType] = useState<string | undefined>(undefined);
  const [pageTitle, setPageTitle] = useState<string | undefined>(undefined);
  const [eventsData, setEventsData] = useState<Event[] | []>([]);
  const [events, { loading }] = useLazyQuery(EVENTS_BY_TYPE, {
    onCompleted: (data) => {
      if (!data) return;
      setEventsData(data.eventsByType);
    },
  });

  useEffect(() => {
    if (!router) return;
    const type = router.query.eventType;
    setEventType(String(type));
  }, [router]);

  useEffect(() => {
    if (!eventType) return;
    const title = getEventTitle(eventType);
    setPageTitle(title);
    events({ variables: { type: eventType } });
  }, [eventType]);

  useEffect(() => {
    setGlobalState("isLoading", loading);
  }, [loading]);
  return (
    <Layout>
      <StyledContainer>
        <SubMenu submenuItems={NAVIGATION[3].subpages} />
        <StyledContent>
          <StyledTitle>{pageTitle}</StyledTitle>
          <StyledEventList>
            {eventsData?.map((event) => (
              <Link href={`/event?id=${event.id}`} key={event.id}>
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
                    <StyledEventDate>{event.createdAt}</StyledEventDate>
                  </StyledEventContent>
                </StyledEventItem>
              </Link>
            ))}
          </StyledEventList>
        </StyledContent>
      </StyledContainer>
    </Layout>
  );
}

export default Events;
