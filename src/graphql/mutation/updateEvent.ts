import { gql } from "@apollo/client";

export const UPDATE_EVENT = gql`
  mutation UpdateEvent(
    $customerDate: String!
    $images: [String!]!
    $longDescription: String!
    $shortDescription: String!
    $title: String!
    $type: String!
    $id: String!
  ) {
    updateEvent(
      customerDate: $customerDate
      images: $images
      longDescription: $longDescription
      shortDescription: $shortDescription
      title: $title
      type: $type
      id: $id
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
