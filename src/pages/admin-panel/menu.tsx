import styled from "styled-components";
import PageWrapper from "../../components/PageWrapper";
import Link from "next/link";
import logo from "../../assets/images/logo.png";
import Image from "next/image";
import { ADMIN_PANEL_MENU } from "../../data/adminPanel/menu";

const StyledContainer = styled.div``;
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
  font-size: 1.6rem;
  font-weight: 900;
  text-align: center;
  @media (max-width: 1200px) {
    font-size: 1.3em;
  }
  @media (max-width: 1000px) {
    font-size: 1rem;
  }
`;
const StyledLogo = styled(Image)`
  width: 80px;
  height: auto;
  @media (max-width: 1200px) {
    width: 70px;
  }
`;
const StyledMenuItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
const StyledMainMenuItemLink = styled(Link)`
  padding: 15px;
  text-decoration: none;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--white);
  background-color: var(--primary);
  margin-top: 20px;
`;
const StyledSubmenuItemLink = styled(Link)`
  padding: 15px;
  text-decoration: none;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--white);
  background-color: var(--secondary);
`;
export default function AdminPanel() {
  return (
    <PageWrapper>
      <StyledTitle href="/">
        <StyledHeading>Cпілка вчителів - полоністів України</StyledHeading>
        <StyledLogo src={logo} alt="Cпілка вчителів - полоністів України" />
        <StyledHeading>
          Zjednoczenie nauczycieli polskich w Ukrainie
        </StyledHeading>
      </StyledTitle>
      <StyledContainer>
        {ADMIN_PANEL_MENU.map((item) => (
          <StyledMenuItem key={item.title}>
            <StyledMainMenuItemLink href={item.link}>
              {item.title}
            </StyledMainMenuItemLink>
            {item?.submenu?.map((submenuItem) => (
              <StyledSubmenuItemLink href={submenuItem.link}>
                {submenuItem.title}
              </StyledSubmenuItemLink>
            ))}
          </StyledMenuItem>
        ))}
      </StyledContainer>
    </PageWrapper>
  );
}
