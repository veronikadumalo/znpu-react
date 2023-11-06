import { gql } from "@apollo/client";

export const DELETE_EVENT = gql`
  mutation DeleteEvent($id: String!) {
    deleteEvent(id: $id) {
      id
    }
  }
`;
