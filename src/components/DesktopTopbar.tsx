import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import facebookIcon from "../assets/images/facebook-48.png";

const StyledTopbarContainer = styled.div`
  width: 100%;
  text-align: right;
  @media (max-width: 700px) {
    display: none;
  }
`;
const StyledAddress = styled.p`
  color: var(--primary);
  font-size: 0.8rem;
  font-weight: 700;
  border-bottom: 1px solid rgba(158, 0, 50, 0.7);
  padding: 1.8rem 0 1.2rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const StyledTitle = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: var(--primary);
  padding: 40px 50px;
  text-transform: uppercase;
  @media (max-width: 1200px) {
    padding: 30px;
  }
`;
const StyledHeading = styled.h1`
  font-size: 2.5rem;
  font-weight: 900;
  text-align: center;
  @media (max-width: 1200px) {
    font-size: 2rem;
  }
  @media (max-width: 1000px) {
    font-size: 1.7rem;
  }
`;
const StyledLogo = styled.img`
  width: 80px;
  height: auto;
  @media (max-width: 1200px) {
    width: 70px;
  }
`;
const StyledFacebookLink = styled.a`
  margin-left: 10px;
`;

const DesktopTopbar = () => (
  <StyledTopbarContainer>
    <StyledAddress>
      82100 Drohobycz ul. Truskawiecka 9 obwód lwowski
      <StyledFacebookLink href="https://www.facebook.com/CentrumDrohobycz">
        <img src={facebookIcon} alt="Facebook Icon" height={30} width={30} />
      </StyledFacebookLink>
    </StyledAddress>
    <StyledTitle to="/">
      <StyledHeading>Cпілка вчителів - полоністів України</StyledHeading>
      <StyledLogo src={logo} alt="Cпілка вчителів - полоністів України" />
      <StyledHeading>
        Zjednoczenie nauczycieli polskich w Ukrainie
      </StyledHeading>
    </StyledTitle>
  </StyledTopbarContainer>
);
export default DesktopTopbar;
