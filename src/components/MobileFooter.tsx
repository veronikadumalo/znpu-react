import styled from "styled-components";
import logo from "../assets/images/logo.png";
import Link from "next/link";
import { NAVIGATION } from "../data/navigation";
import facebookIcon from "../assets/images/facebook-60.png";
import Image from "next/image";

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

const MobileFooter = () => {
  return (
    <StyledFooterContainer>
      <StyledFooterTitle href="/">
        <a>
          <StyledLogo
            src={logo}
            alt="Zjednoczenie nauczycieli polskich w Ukrainie"
          />
          <StyledTitle>
            Zjednoczenie nauczycieli <br />
            polskich w Ukrainie
          </StyledTitle>
        </a>
      </StyledFooterTitle>
      <StyledContent>
        <StyledDetailsContainer>
          <StyledContactContainer>
            <StyledAddress>
              82100 Drohobycz ul. Truskawiecka <br />
              9, obwód lwowski
            </StyledAddress>
            <StyledAddress>
              Укрпошта <br />
              82100 Дрогобич <br />
              вул. Данила Галицького, 21 а/с № 17
            </StyledAddress>
            <StyledLink href="tel:0324450177">03244 50177</StyledLink>
            <StyledLink href="mailto:adam-ch@mail.lviv.ua">
              adam-ch@mail.lviv.ua
            </StyledLink>
            <StyledLink href="mailto:znpu.ua@gmail.com">
              znpu.ua@gmail.com
            </StyledLink>
            <StyledLink
              href="https://www.facebook.com/CentrumDrohobycz"
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
