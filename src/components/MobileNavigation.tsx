import styled from "styled-components/macro";
import logo from "../assets/images/logo.png";
import menuIcon from "../assets/images/menu-icon.png";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import facebookIcon from "../assets/images/facebook-48.png";

const StyledContainer = styled.div`
  padding: 15px 15px 5px 10px;
  z-index: 9999;
  display: none;
  @media (max-width: 700px) {
    display: block;
  }
`;

const StyledHeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const StyledHeadingLink = styled.a`
  display: flex;
  align-items: center;
  color: var(--primary);
  text-decoration: none;
  width: auto;
`;
const StyledTitle = styled.div`
  margin-left: 10px;
`;

const StyledLogo = styled.img`
  height: 80px;
  width: auto;
`;

const StyledSpan = styled.h1`
  position: relative;
  font-size: 14px;
  line-height: 16px;
  margin-bottom: 15px;
  &::after {
    content: "";
    width: 150px;
    height: 1px;
    background-color: var(--primary);
    position: absolute;
    left: 0;
    bottom: -7.5px;
  }
  &:last-child {
    margin: 0;
    &::after {
      width: 0;
      height: 0;
    }
  }
`;

interface StyledButtonProps {
  isMenuOpened: boolean;
}
const StyledButton = styled.button<StyledButtonProps>`
  background-color: transparent;
  border: none;
  margin-top: 10px;
  display: ${({ isMenuOpened }) => (isMenuOpened ? "none" : "block")};
`;

const StyledAddress = styled.p`
  font-size: 11px;
  font-weight: 700;
  color: var(--primary);
  text-align: right;
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1px solid var(--primary);
  padding-bottom: 10px;
`;

const StyledFacebookLink = styled.a`
  margin-left: 10px;
`;

const MobileNavigation = () => {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  return (
    <>
      <StyledContainer>
        <StyledHeadingContainer>
          <StyledHeadingLink href="/">
            <StyledLogo src={logo} alt="Cпілка вчителів - полоністів України" />
            <StyledTitle>
              <StyledSpan>
                Zjednoczenie nauczycieli <br />
                polskich w Ukrainie
              </StyledSpan>
              <StyledSpan>
                Cпілка вчителів - <br />
                полоністів України
              </StyledSpan>
            </StyledTitle>
          </StyledHeadingLink>
          <StyledButton
            onClick={() => setIsMenuOpened(true)}
            isMenuOpened={isMenuOpened}
          >
            <img src={menuIcon} alt="Menu Icon" width={40} />
          </StyledButton>
        </StyledHeadingContainer>
        <StyledAddress>
          82100 Drohobycz ul. Truskawiecka 9 obwód lwowski
          <StyledFacebookLink href="https://www.facebook.com/CentrumDrohobycz">
            <img
              src={facebookIcon}
              alt="Facebook Icon"
              height={25}
              width={25}
            />
          </StyledFacebookLink>
        </StyledAddress>
      </StyledContainer>
      <MobileMenu
        handleCloseClick={() => setIsMenuOpened(false)}
        isOpened={isMenuOpened}
      />
    </>
  );
};
export default MobileNavigation;
