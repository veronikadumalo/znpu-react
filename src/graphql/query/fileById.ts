import { gql } from "@apollo/client";

export const FILE_BY_ID = gql`
  query FileById($id: String!) {
    fileById(id: $id) {
      id
      title
      url
    }
  }
`;
