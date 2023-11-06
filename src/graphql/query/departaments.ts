import { gql } from "@apollo/client";

export const DEPARTAMENTS_QUERY = gql`
  query Deparments {
    deparments {
      id
      persons {
        email
        id
        name
        avatar
      }
      title
    }
  }
`;
