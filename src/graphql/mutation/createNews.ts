import { gql } from "@apollo/client";

export const CREATE_NEWS = gql`
  mutation CreateNews(
    $description: String!
    $imageUrl: String!
    $subtitle: String!
    $title: String!
  ) {
    createNews(
      description: $description
      imageUrl: $imageUrl
      subtitle: $subtitle
      title: $title
    ) {
      description
      id
      imageUrl
      subtitle
      title
    }
  }
`;
