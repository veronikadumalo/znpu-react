import { gql } from "@apollo/client";

export const PAGE_INFO = gql`
  query PageInfo {
    pageInfo {
      additionalEmail
      email
      facebookLink
      id
      phoneNuber
      plAddress
      plPageTitle
      uaAddress
      uaPageTitle
    }
  }
`;
