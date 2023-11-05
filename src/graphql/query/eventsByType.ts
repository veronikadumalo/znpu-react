import { gql } from "@apollo/client";

export const EVENTS_BY_TYPE = gql`
  query EventsByType($type: String!) {
    eventsByType(type: $type) {
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
