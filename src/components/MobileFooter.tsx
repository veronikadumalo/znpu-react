import styled from "styled-components";
import logo from "../assets/images/logo.png";
import Link from "next/link";
import { NAVIGATION } from "../data/navigation";
import facebookIcon from "../assets/images/facebook-60.png";
import Image from "next/image";
import { PageInfo } from "../types/general";

const StyledFooterContainer = styled.div`
  margin-top: auto;
  background: var(--secondary);
  width: 100vw;
  color: #fff;
  display: none;
  padding: 15px 15px 15px 10px;
  @media (max-width: 700px) {
    display: block;
  }
`;
const StyledContent = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledDetailsContainer = styled.div``;
const StyledWebsiteMapContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
`;
const StyledFooterTitle = styled(Link)`
  display: flex;
  align-items: center;
  padding-bottom: 15px;
  text-decoration: none;
  color: var(--white);
`;
const StyledLogo = styled(Image)`
  height: 50px;
  width: auto;
  margin-right: 5px;
`;
const StyledTitle = styled.h2`
  font-size: 14px;
  font-weight: 500;
  max-width: 250px;
`;
const StyledContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 11px;
  line-height: 16px;
`;
const StyledAddress = styled.p`
  color: var(--light-text);
  padding-bottom: 10px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--light-text);
  transition: color 0.3s;
  padding-bottom: 10px;
  &:last-child {
    padding-bottom: 0;
  }
`;
const StyledPageMapLink = styled(Link)`
  color: var(--light-text);
  text-decoration: none;
  font-size: 11px;
  line-height: 20px;
  text-transform: capitalize;
`;
const StyledBottomText = styled.p`
  font-size: 10px;
  text-align: center;
  color: var(--secondary-light-text);
  padding-top: 30px;
`;
interface FooterProps {
  pageInfo?: PageInfo;
}
const MobileFooter = ({ pageInfo }: FooterProps) => {
  return (
    <StyledFooterContainer>
      <StyledFooterTitle href="/">
        <StyledLogo
          src={logo}
          alt="Zjednoczenie nauczycieli polskich w Ukrainie"
        />
        <StyledTitle>{pageInfo?.plAddress}</StyledTitle>
      </StyledFooterTitle>
      <StyledContent>
        <StyledDetailsContainer>
          <StyledContactContainer>
            <StyledAddress>{pageInfo?.plAddress}</StyledAddress>
            <StyledAddress>
              <span
                dangerouslySetInnerHTML={{
                  __html: String(pageInfo?.uaAddress),
                }}
              />
            </StyledAddress>
            <StyledLink href="tel:0324450177">
              {pageInfo?.phoneNuber}
            </StyledLink>
            <StyledLink href={`mailto:${pageInfo?.email}`}>
              {pageInfo?.email}
            </StyledLink>
            <StyledLink href={`mailto:${pageInfo?.additionalEmail}`}>
              {pageInfo?.additionalEmail}
            </StyledLink>
            <StyledLink
              href={pageInfo?.facebookLink || ""}
              className="facebookLink"
            >
              <Image
                src={facebookIcon}
                alt="Facebook Icon"
                height={30}
                width={30}
              />
            </StyledLink>
          </StyledContactContainer>
        </StyledDetailsContainer>
        <StyledWebsiteMapContainer>
          {NAVIGATION.map((item) => (
            <StyledPageMapLink href={item.link} key={item.title}>
              {item.title}
            </StyledPageMapLink>
          ))}
        </StyledWebsiteMapContainer>
      </StyledContent>
      <StyledBottomText>
        2023 © Zjednoczenie nauczycieli polskich w Ukraine
      </StyledBottomText>
    </StyledFooterContainer>
  );
};
export default MobileFooter;
