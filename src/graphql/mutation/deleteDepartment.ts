import { gql } from "@apollo/client";

export const DELETE_DEPARTMENT = gql`
  mutation DeleteDepartment($id: String!) {
    deleteDepartment(id: $id) {
      id
      persons {
        email
        id
        name
      }
      title
    }
  }
`;
