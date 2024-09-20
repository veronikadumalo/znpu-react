import { gql } from "@apollo/client";

export const DELETE_FILE = gql`
  mutation DeleteFile($id: String!) {
    deleteFile(id: $id) {
      id
    }
  }
`;
