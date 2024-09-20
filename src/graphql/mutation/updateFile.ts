import { gql } from "@apollo/client";

export const UPDATE_FILE = gql`
  mutation UpdateFile($title: String!, $url: String!, $id: String!) {
    updateFile(title: $title, url: $url, id: $id) {
      id
      title
      url
    }
  }
`;
