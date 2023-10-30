import { gql } from "@apollo/client";

export const HOME_PAGE_CONTENT = gql`
  query HomePageContent {
    homePageContent {
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
