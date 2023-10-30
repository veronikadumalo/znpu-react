import styled from "styled-components";
import { Post } from "../types/general";
import Image from "next/image";
import imagePlaceholder from "../assets/images/test-image.png";

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
const StyledImage = styled(Image)`
  width: 100px;
  height: 100px;
  object-fit: cover;
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
    <StyledImage
      src={post.imageUrl ? post.imageUrl : imagePlaceholder}
      alt={post.title}
      width={100}
      height={100}
    />
    <StyledTextContent>
      <StyledTitle>{post.title}</StyledTitle>
      <StyledDescription>{post.subtitle}</StyledDescription>
      <StyledDate>{post.updatedAt}</StyledDate>
    </StyledTextContent>
  </StyledContainer>
);
