import { gql } from "@apollo/client";

export const EVENTS_BY_ID = gql`
  query EventsById($id: String!) {
    eventsById(id: $id) {
      createdAt
      customerDate
      id
      images
      longDescription
      shortDescription
      title
      type
    }
  }
`;
