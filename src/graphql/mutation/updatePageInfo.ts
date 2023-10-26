import { gql } from "@apollo/client";

export const UPDATE_PAGE_INFO = gql`
  mutation UpdatePageInfo(
    $id: String!
    $additionalEmail: String!
    $email: String!
    $facebookLink: String!
    $phoneNuber: String!
    $plAddress: String!
    $uaAddress: String!
    $plPageTitle: String!
    $uaPageTitle: String!
  ) {
    updatePageInfo(
      additionalEmail: $additionalEmail
      email: $email
      facebookLink: $facebookLink
      id: $id
      phoneNuber: $phoneNuber
      plAddress: $plAddress
      plPageTitle: $plPageTitle
      uaAddress: $uaAddress
      uaPageTitle: $uaPageTitle
    ) {
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
