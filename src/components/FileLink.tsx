import styled from "styled-components/macro";
import downloadIcon from "../assets/images/download-icon.png";

interface FileLinkProps {
  fileLink: string;
  title: string;
  isFileDownload?: boolean;
  isDisabled?: boolean;
}
interface StyledLinkProps {
  isDisabled: boolean;
}
const StyledLink = styled.a<StyledLinkProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  color: ${({ isDisabled }) => (isDisabled ? "var(--grey)" : "var(--black)")};
  padding: 10px 20px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin: 10px 0;
  pointer-events: ${({ isDisabled }) => (isDisabled ? "none" : "auto")};
  &:first-child {
    margin-top: 0;
  }
`;
const StyledTitle = styled.p`
  font-size: 16px;
  font-weight: 700;
  @media (max-width: 700px) {
    font-size: 12px;
  }
`;
const StyledDownloadIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 20px;
  @media (max-width: 700px) {
    width: 20px;
    height: 20px;
  }
`;

const FileLink = ({
  fileLink,
  title,
  isFileDownload = true,
  isDisabled = false,
}: FileLinkProps) => {
  return (
    <StyledLink
      href={fileLink}
      download={isFileDownload}
      target="_blank"
      style={{ pointerEvents: isDisabled ? "none" : "auto" }}
      isDisabled={isDisabled}
    >
      <StyledTitle>{title}</StyledTitle>
      <StyledDownloadIcon src={downloadIcon} alt="Download Icon" />
    </StyledLink>
  );
};

export default FileLink;
