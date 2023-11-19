import styled from "styled-components";
import Layout from "../components/Layout";
import { SubMenu } from "../components/SubMenu";
import { NAVIGATION } from "../data/navigation";
import PdfSlider from "../components/PdfSlider";
import FileLink from "../components/FileLink";
import { useEffect, useState } from "react";
import { Event } from "../types/general";
import { useLazyQuery } from "@apollo/client";
import { setGlobalState } from "../context/state";
import { EVENTS_BY_TYPE } from "../graphql/query/eventsByType";

const StyledContainer = styled.div`
  display: flex;
`;
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  width: 100%;
  @media (max-width: 700px) {
    padding: 0;
  }
`;
const StyledTitle = styled.h2`
  text-align: center;
  font-style: italic;
  max-width: 70%;
  margin: 0 auto;
  padding-bottom: 30px;
`;
const StyledDescription = styled.p`
  padding-bottom: 30px;
`;

function Slownik() {
  const [event, setEvent] = useState<Event | undefined>(undefined);
  const [eventsByType, { loading }] = useLazyQuery(EVENTS_BY_TYPE, {
    onCompleted: (data) => {
      const newEvent = data.eventsByType[0];
      setEvent(newEvent);
    },
  });
  useEffect(() => {
    eventsByType({
      variables: { type: "dictationOfPolishWriters" },
    });
  }, []);
  useEffect(() => {
    setGlobalState("isLoading", loading);
  }, [loading]);
  return (
    <Layout>
      <StyledContainer>
        <SubMenu submenuItems={NAVIGATION[2].subpages} />
        <StyledContent>
          {event?.title && <StyledTitle>{event?.title}</StyledTitle>}
          {event?.longDescription && (
            <StyledDescription>{event?.longDescription}</StyledDescription>
          )}
          {event?.images[0] && <PdfSlider pdfFile={event?.images[0]} />}
          {event?.images[0] && (
            <FileLink fileLink={event?.images[0]} title={event?.title} />
          )}
        </StyledContent>
      </StyledContainer>
    </Layout>
  );
}

export default Slownik;
