import { gql } from "@apollo/client";

export const CREATE_DEPARTMENT = gql`
  mutation createDepartment($title: String!, $name: String!, $email: String!) {
    createDepartment(input: { email: $email, name: $name }, title: $title) {
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
