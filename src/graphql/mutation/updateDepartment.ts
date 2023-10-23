import { gql } from "@apollo/client";

export const UPDATE_DEPARTMENT = gql`
  mutation updateDepartment($id: String!, $title: String!) {
    updateDepartment(id: $id, title: $title) {
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
