import { gql } from "@apollo/client";

export const CREATE_PERSON = gql`
  mutation createPerson(
    $deparmentId: String!
    $name: String!
    $email: String!
  ) {
    createPerson(deparmentId: $deparmentId, name: $name, email: $email) {
      email
      id
      name
    }
  }
`;
