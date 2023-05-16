import styled from "styled-components/macro";
import { Overlay } from "./Overlay";
import { NAVIGATION } from "../data/navigation";
import { Link } from "react-router-dom";
import chevronIcon from "../assets/images/chevron-down.png";
import closeIcon from "../assets/images/close-icon.png";

interface StyledContainerProps {
  isOpened?: boolean;
}

const StyledContainer = styled.div<StyledContainerProps>`
  background-color: var(--primary);
  position: fixed;
  top: 0;
  left: ${({ isOpened }) => (isOpened ? "0" : "-700px")};
  width: 80%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  transition: left 0.3s;
  display: none;
  z-index: 9999;
  @media (max-width: 700px) {
    display: flex;
  }
`;

const StyledMobileItem = styled(Link)`
  color: var(--white);
  text-decoration: none;
  text-transform: uppercase;
  font-size: 13px;
  width: 100%;
  padding: 15px;
  border-bottom: 1px solid var(--white);
`;

interface StyledChevronIconProps {
  isOpened?: boolean;
}

const StyledChevronIcon = styled.img<StyledChevronIconProps>`
  margin-left: 5px;
  transition: transform 0.3s;
  transform: ${({ isOpened }) =>
    isOpened ? "rotate(180deg)" : "rotate(0deg)"};
`;
const StyledCloseIcon = styled.img`
  position: fixed;
  top: 15px;
  right: 15px;
  width: 20px;
  height: 20px;
  z-index: 9999;
`;

interface MobileMenuProps {
  handleCloseClick?: () => void;
  isOpened?: boolean;
}

const MobileMenu = ({ handleCloseClick, isOpened }: MobileMenuProps) => {
  return (
    <>
      {isOpened && (
        <>
          <Overlay />
          <StyledCloseIcon
            src={closeIcon}
            alt="Close Icon"
            onClick={handleCloseClick}
          />
        </>
      )}
      <StyledContainer isOpened={isOpened}>
        {NAVIGATION.map((item) => (
          <StyledMobileItem key={item.title} to={item.link}>
            {item.title}{" "}
            {item.subpages && (
              <StyledChevronIcon
                src={chevronIcon}
                alt="Chevron Icon"
                width={15}
                height={15}
                isOpened={false}
              />
            )}
          </StyledMobileItem>
        ))}
      </StyledContainer>
    </>
  );
};
export default MobileMenu;
