import { gql } from "@apollo/client";

export const UPDATE_NEWS = gql`
  mutation UpdateNews(
    $description: String!
    $imageUrl: String!
    $subtitle: String!
    $title: String!
    $id: String!
  ) {
    updateNews(
      description: $description
      imageUrl: $imageUrl
      subtitle: $subtitle
      title: $title
      id: $id
    ) {
      description
      id
      imageUrl
      subtitle
      title
    }
  }
`;
