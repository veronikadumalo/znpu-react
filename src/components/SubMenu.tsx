import styled from "styled-components/macro";
import { SubpageLink } from "../types/general";
import { Link, useLocation } from "react-router-dom";

interface SubMenuProps {
  submenuItems?: SubpageLink[];
}

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  height: 800px;
  background-color: var(--secondary);
  display: flex;
  flex-direction: column;
  max-width: 400px;
  min-width: 400px;
  @media (max-width: 1250px) {
    max-width: 300px;
    min-width: 300px;
  }
  @media (max-width: 1050px) {
    max-width: 220px;
    min-width: 220px;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;
interface StyledItemLinkProps {
  isActive?: boolean;
}
const StyledItemLink = styled(Link)<StyledItemLinkProps>`
  color: var(--white);
  text-decoration: none;
  text-transform: uppercase;
  font-size: 13px;
  width: 100%;
  padding: 15px;
  border-bottom: 1px solid var(--white);
  background-color: ${({ isActive }) =>
    isActive ? "var(--primary)" : "transparent"};
`;

export const SubMenu = ({ submenuItems }: SubMenuProps) => {
  const location = useLocation();
  return (
    <StyledContainer>
      {submenuItems?.map((item) => (
        <StyledItemLink
          key={item.title}
          to={item.link}
          isActive={location.pathname === item.link}
        >
          {item.title}
        </StyledItemLink>
      ))}
    </StyledContainer>
  );
};
