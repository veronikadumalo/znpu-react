import { gql } from "@apollo/client";

export const DELETE_NEWS = gql`
  mutation DeleteNews($id: String!) {
    deleteNews(id: $id) {
      id
    }
  }
`;
