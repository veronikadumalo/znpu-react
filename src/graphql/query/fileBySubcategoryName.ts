import { gql } from "@apollo/client";

export const FILES_BY_SUBCATEGORY_NAME = gql`
  query FilesBySubcategoryName($subcategoryName: String!) {
    filesBySubcategoryName(subcategoryName: $subcategoryName) {
      id
      subcategoryId
      title
      url
    }
  }
`;
