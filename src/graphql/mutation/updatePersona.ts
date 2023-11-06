import { gql } from "@apollo/client";

export const UPDATE_PERSON = gql`
  mutation updatePerson(
    $id: String!
    $name: String!
    $email: String!
    $avatar: String
  ) {
    updatePerson(id: $id, name: $name, email: $email, avatar: $avatar) {
      email
      id
      name
      avatar
    }
  }
`;
