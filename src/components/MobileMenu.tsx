import styled from "styled-components/macro";
import { Overlay } from "./Overlay";
import { NAVIGATION } from "../data/navigation";
import { Link, useLocation, useNavigate } from "react-router-dom";
import chevronIcon from "../assets/images/chevron-down.png";
import closeIcon from "../assets/images/close-icon.png";
import { useEffect, useState } from "react";
import { NavigationLink } from "../types/general";
import React from "react";

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

const StyledMobileItem = styled.button<{ isSelected?: boolean }>`
  color: var(--white);
  text-decoration: none;
  text-transform: uppercase;
  font-size: 13px;
  width: 100%;
  padding: 15px;
  border: none;
  text-align: left;
  border-bottom: 1px solid var(--white);
  background: ${({ isSelected }) =>
    isSelected ? "rgba(0,0,0,0.4)" : "transparent"};
  font-weight: ${({ isSelected }) => (isSelected ? "700" : "500")};
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
const StyledSubmenu = styled.div`
  width: 100%;
`;
const StyledSubmenuItem = styled(Link)<{ isActive?: boolean }>`
  display: block;
  color: var(--white);
  text-decoration: none;
  text-transform: uppercase;
  font-size: 13px;
  width: 100%;
  padding: 15px;
  border: none;
  text-align: left;
  border-bottom: 1px solid var(--white);
  background: rgba(0, 0, 0, 0.2);
  text-decoration: ${({ isActive }) => (isActive ? "underline" : "none")};
`;

interface MobileMenuProps {
  handleCloseClick?: () => void;
  isOpened?: boolean;
}

const MobileMenu = ({ handleCloseClick, isOpened }: MobileMenuProps) => {
  const [openedMenuItem, setOpenedMenuItem] = useState<NavigationLink | null>(
    null
  );
  const [activeMenuItem, setActiveMenuItem] = useState<NavigationLink | null>(
    null
  );
  const navigate = useNavigate();
  const location = useLocation();
  const handleMenuItmeClick = (item: NavigationLink) => {
    if (item.subpages) {
      if (openedMenuItem && openedMenuItem === item) {
        setOpenedMenuItem(null);
      } else {
        setOpenedMenuItem(item);
      }
    } else {
      navigate(item.link);
    }
  };

  useEffect(() => {
    const selectedNavigationItem = NAVIGATION.find(
      (item) =>
        item.link === location.pathname ||
        item?.subpages?.find((subpage) => subpage.link === location.pathname)
    );
    if (selectedNavigationItem) {
      setOpenedMenuItem(selectedNavigationItem);
      setActiveMenuItem(selectedNavigationItem);
    }
  }, [location]);

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
          <React.Fragment key={item.title}>
            <StyledMobileItem
              onClick={() => handleMenuItmeClick(item)}
              isSelected={item === activeMenuItem}
            >
              {item.title}{" "}
              {item.subpages && (
                <StyledChevronIcon
                  src={chevronIcon}
                  alt="Chevron Icon"
                  width={15}
                  height={15}
                  isOpened={item === openedMenuItem}
                />
              )}
            </StyledMobileItem>
            {item === openedMenuItem && (
              <StyledSubmenu>
                {item.subpages?.map((item) => (
                  <StyledSubmenuItem
                    key={item.link}
                    to={item.link}
                    isActive={item.link === location.pathname}
                  >
                    {item.title}
                  </StyledSubmenuItem>
                ))}
              </StyledSubmenu>
            )}
          </React.Fragment>
        ))}
      </StyledContainer>
    </>
  );
};
export default MobileMenu;
