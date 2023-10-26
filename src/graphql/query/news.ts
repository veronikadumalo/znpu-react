import { gql } from "@apollo/client";

export const NEWS = gql`
  query News {
    news {
      description
      id
      imageUrl
      subtitle
      title
      createdAt
      updatedAt
    }
  }
`;
