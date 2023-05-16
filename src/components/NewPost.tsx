import styled from "styled-components/macro";
import { Post } from "../types/general";

interface NewPostProps {
  post: Post;
}

const StyledContainer = styled.div`
  display: flex;
  padding: 30px 0;
  border-bottom: 1px solid var(--grey);
  &:last-child {
    border: none;
  }
`;
const StyledImage = styled.img`
  width: 100px;
  height: 100px;
`;
const StyledTextContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;
const StyledTitle = styled.h5`
  color: var(--primary);
  font-size: 18px;
`;
const StyledDescription = styled.p`
  font-size: 13px;
  color: var(--grey);
`;
const StyledDate = styled.p`
  font-size: 12px;
  color: var(--grey);
  padding-top: 10px;
`;

export const NewPost = ({ post }: NewPostProps) => (
  <StyledContainer>
    <StyledImage src={post.image} alt={post.title} />
    <StyledTextContent>
      <StyledTitle>{post.title}</StyledTitle>
      <StyledDescription>{post.description}</StyledDescription>
      <StyledDate>{post.date}</StyledDate>
    </StyledTextContent>
  </StyledContainer>
);
