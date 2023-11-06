import { gql } from "@apollo/client";

export const UPDATE_EVENT = gql`
  mutation UpdateEvent(
    $customerDate: String
    $images: [String]
    $longDescription: String!
    $shortDescription: String!
    $title: String!
    $type: String!
  ) {
    updateEvent(
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
