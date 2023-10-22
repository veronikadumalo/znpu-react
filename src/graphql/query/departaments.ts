import { gql } from "@apollo/client";

export const DEPARTAMENTS_QUERY = gql`
  query Deparments {
    deparments {
      id
      title
      persons {
        id
        name
        email
      }
    }
  }
`;
