import { gql } from "@apollo/client";

export const CREATE_EVENT = gql`
  mutation CreateEvent(
    $customerDate: String!
    $images: [String!]!
    $longDescription: String!
    $shortDescription: String!
    $title: String!
    $type: String!
  ) {
    createEvent(
      customerDate: $customerDate
      images: $images
      longDescription: $longDescription
      shortDescription: $shortDescription
      title: $title
      type: $type
    ) {
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
