import { gql } from "@apollo/client";

export const CREATE_PERSON = gql`
  mutation createPerson(
    $deparmentId: String!
    $name: String!
    $email: String!
    $avatar: String
  ) {
    createPerson(
      deparmentId: $deparmentId
      name: $name
      email: $email
      avatar: $avatar
    ) {
      email
      id
      name
    }
  }
`;
