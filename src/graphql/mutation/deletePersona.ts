import { gql } from "@apollo/client";

export const DELETE_PERSON = gql`
  mutation DeletePerson($id: String!) {
    deletePerson(id: $id) {
      email
      id
      name
    }
  }
`;
