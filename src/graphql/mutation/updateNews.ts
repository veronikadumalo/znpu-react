import { gql } from "@apollo/client";

export const UPDATE_NEWS = gql`
  mutation UpdateNews(
    $description: String!
    $imageUrl: String!
    $subtitle: String!
    $title: String!
    $id: String!
    $updatedAt: Date!
  ) {
    updateNews(
      description: $description
      imageUrl: $imageUrl
      subtitle: $subtitle
      title: $title
      id: $id
      updatedAt: $updatedAt
    ) {
      description
      id
      imageUrl
      subtitle
      title
      updatedAt
    }
  }
`;
