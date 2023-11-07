import { gql } from "@apollo/client";

export const CREATE_FILE = gql`
  mutation CreateFile($title: String!, $url: String!, $subcategoryId: String!) {
    createFile(title: $title, url: $url, subcategoryId: $subcategoryId) {
      subcategoryId
      id
      title
      url
    }
  }
`;
