import styled from "styled-components";
import { Post } from "../../../types/general";
import { NewPost } from "../../NewPost";
import trashIcon from "../../../assets/images/trash-icon.svg";
import editIcon from "../../../assets/images/edit-icon.png";
import Image from "next/image";

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledButtonContainer = styled.div`
  display: flex;
  gap: 25px;
`;
const StyledIconButton = styled.button`
  background-color: transparent;
  border: none;
  height: 20px;
  cursor: pointer;
`;
interface NewItemProps {
  post: Post;
  handleEditClick: (postId: string) => void;
  handleDeleteClick: (postId: string) => void;
}
export default function NewItem({
  post,
  handleEditClick,
  handleDeleteClick,
}: NewItemProps) {
  return (
    <StyledContainer>
      <NewPost post={post} />
      <StyledButtonContainer>
        <StyledIconButton onClick={() => handleEditClick(post.id)}>
          <Image src={editIcon} alt="Edit" width={30} height={30} />
        </StyledIconButton>
        <StyledIconButton onClick={() => handleDeleteClick(post.id)}>
          <Image src={trashIcon} alt="Delete" width={30} height={30} />
        </StyledIconButton>
      </StyledButtonContainer>
    </StyledContainer>
  );
}
