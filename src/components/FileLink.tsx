import styled from "styled-components";
import downloadIcon from "../assets/images/download-icon.png";

interface FileLinkProps {
  fileLink: string;
  title: string;
  isFileDownload?: boolean;
}

const StyledLink = styled.a`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  color: var(--black);
  padding: 10px 20px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin: 10px 0;
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
}: FileLinkProps) => {
  return (
    <StyledLink href={fileLink} download={isFileDownload} target="_blank">
      <StyledTitle>{title}</StyledTitle>
      <StyledDownloadIcon src={downloadIcon} alt="Download Icon" />
    </StyledLink>
  );
};

export default FileLink;
