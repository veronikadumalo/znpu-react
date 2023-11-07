import { gql } from "@apollo/client";

export const UPDATE_FILE = gql`
  mutation UpdateFile(
    $title: String!
    $url: String!
    $subcategoryId: String!
    $id: String!
  ) {
    updateFile(
      title: $title
      url: $url
      subcategoryId: $subcategoryId
      id: $id
    ) {
      subcategoryId
      id
      title
      url
    }
  }
`;
