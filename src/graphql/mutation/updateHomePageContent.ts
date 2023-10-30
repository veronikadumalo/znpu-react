import { gql } from "@apollo/client";

export const UPDATE_HOMEPAGE_CONTENT = gql`
  mutation UpdateHomePageContent(
    $homeTitle: String!
    $imageUrl: String!
    $longDescription: String!
    $pageTitle: String!
    $shortDescription: String!
    $type: String!
  ) {
    updateHomePageInfo(
      homeTitle: $homeTitle
      imageUrl: $imageUrl
      longDescription: $longDescription
      pageTitle: $pageTitle
      shortDescription: $shortDescription
      type: $type
    ) {
      homeTitle
      id
      imageUrl
      longDescription
      pageTitle
      shortDescription
      type
    }
  }
`;
