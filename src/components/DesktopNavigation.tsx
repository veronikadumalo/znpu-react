import styled from "styled-components";
import { NAVIGATION } from "../data/navigation";
import chevronIcon from "../assets/images/chevron-down.png";
import { useState } from "react";
import { NavigationLink } from "../types/general";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";

const StyledNavigationContainer = styled.div`
  background: var(--secondary);
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  position: relative;
  border-bottom: 1px solid var(--white);
  z-index: 9999;
  @media (max-width: 700px) {
    display: none;
  }
`;
interface StyledNavigationLinkProps {
  isActive?: boolean;
}
const StyledNavigationLink = styled(Link)<StyledNavigationLinkProps>`
  text-decoration: ${({ isActive }) => (isActive ? "underline" : "none")};
  color: var(--white);
  text-transform: uppercase;
  font-size: 0.82rem;
  font-weight: 900;
  /* text-decoration: none; */
  padding: 25px 25px 25px 0;
  min-width: 100px;
  max-width: 15%;
  display: flex;
  align-items: center;
  /* text-transform: uppercase; */
  &:first-child {
    padding-left: 25px;
  }
  @media (max-width: 1200px) {
    font-size: 0.7rem;
    min-width: 80px;
    max-width: 10%;
    padding: 15px 15px 15px 0;
  }
  @media (max-width: 1000px) {
    font-size: 0.65rem;
    min-width: 70px;
    max-width: 10%;
    padding: 0;
    margin: 15px 10px 15px 0;
  }
  &:hover {
    text-decoration: underline;
    /* color: var(--dark-text); */
  }
`;
interface StyledChevronIconProps {
  isHovered: boolean;
}
const StyledChevronIcon = styled(Image)<StyledChevronIconProps>`
  margin-left: 5px;
  transition: transform 0.3s;
  transform: ${({ isHovered }) =>
    isHovered ? "rotate(180deg)" : "rotate(0deg)"};
`;
const StyledSubpages = styled.div`
  position: absolute;
  background: var(--secondary);
  width: 100%;
  top: 70px;
  min-height: 200px;
  padding: 20px 40px;
  display: flex;
  flex-wrap: wrap;
  .subpage {
    max-width: max-content;
    min-width: auto;
    margin: 0;
    &:first-child {
      padding-left: 0;
    }
  }
`;

const DesktopNavigation = () => {
  const [hoveredNavigationItem, setHoveredNavigationItem] =
    useState<NavigationLink | null>(null);
  const router = useRouter();
  return (
    <StyledNavigationContainer
      onMouseLeave={() => setHoveredNavigationItem(null)}
      onBlur={() => setHoveredNavigationItem(null)}
    >
      {NAVIGATION.map((item) => {
        const isActive =
          Boolean(item.subpages?.find((item) => item.link === router.asPath)) ||
          item.link === router.asPath;
        return (
          <StyledNavigationLink
            href={item.link}
            key={item.title}
            onMouseOver={() => setHoveredNavigationItem(item)}
            onFocus={() => setHoveredNavigationItem(item)}
            isActive={isActive}
          >
            <span>{item.title}</span>
            {item.subpages && (
              <StyledChevronIcon
                src={chevronIcon}
                alt="Chevron Icon"
                width={15}
                height={15}
                isHovered={hoveredNavigationItem === item}
              />
            )}
          </StyledNavigationLink>
        );
      })}
      {hoveredNavigationItem?.subpages && (
        <StyledSubpages>
          {hoveredNavigationItem?.subpages?.map((subpage) => (
            <StyledNavigationLink
              href={subpage.link}
              key={subpage.title}
              className="subpage"
            >
              {subpage.title}
            </StyledNavigationLink>
          ))}
        </StyledSubpages>
      )}
    </StyledNavigationContainer>
  );
};

export default DesktopNavigation;
