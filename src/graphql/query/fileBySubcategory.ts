import { gql } from "@apollo/client";

export const FILE_BY_SUBCATEGORY = gql`
  query FilesBySubcategory($subcategoryId: String!) {
    filesBySubcategory(subcategoryId: $subcategoryId) {
      id
      subcategoryId
      title
      url
    }
  }
`;
