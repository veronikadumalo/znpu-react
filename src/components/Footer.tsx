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
  @media (max-width: 700px) {
    display: none;
  }
  .facebookLink {
    margin-left: -5px;
    img {
      margin-top: 15px;
    }
  }
`;
const StyledFooterContent = styled.div`
  max-width: 1640px;
  padding: 30px 30px 10px 30px;
  margin: 0 auto;
`;
const StyledFooterTitle = styled(Link)`
  display: flex;
  align-items: center;
  padding-bottom: 40px;
  text-decoration: none;
  color: var(--white);
`;
const StyledLogo = styled(Image)`
  height: 80px;
  width: auto;
  margin-right: 15px;
`;
const StyledTitle = styled.h2`
  font-size: 20px;
  font-weight: 500;
`;
const StyledFooterMainContainer = styled.div`
  display: flex;
`;
const StyledContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  line-height: 40px;
  @media (max-width: 1075px) {
    font-size: 14px;
    line-height: 30px;
  }
`;
const StyledAddress = styled.p`
  color: var(--light-text);
  line-height: 25px;
  padding-bottom: 10px;
  @media (max-width: 1075px) {
    max-width: 300px;
    line-height: 18px;
    padding-bottom: 10px;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--light-text);
  transition: color 0.3s;
  &:hover {
    color: var(--white);
  }
`;
const StyledFooterPageMap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 200px;
  margin-left: 300px;
  @media (max-width: 1330px) {
    margin-left: 150px;
    column-gap: 100px;
  }
  @media (max-width: 1075px) {
    margin-left: 70px;
    column-gap: 70px;
  }
`;
const StyledPageMapLink = styled(Link)`
  text-decoration: none;
  color: var(--light-text);
  text-transform: capitalize;
  font-size: 15px;
  line-height: 35px;
  transition: color 0.3s;
  &:hover {
    color: var(--white);
  }
`;
const StyledBottomText = styled.p`
  font-size: 12px;
  text-align: center;
  margin-top: 100px;
  color: var(--secondary-light-text);
`;
const Footer = () => (
  <StyledFooterContainer>
    <StyledFooterContent>
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
      <StyledFooterMainContainer>
        <StyledContactContainer>
          <StyledAddress>
            82100 Drohobycz ul. Truskawiecka 9 obwód lwowski
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
        </StyledContactContainer>
        <StyledFooterPageMap>
          {NAVIGATION.map((item) => (
            <StyledPageMapLink href={item.link} key={item.title}>
              <a>{item.title}</a>
            </StyledPageMapLink>
          ))}
        </StyledFooterPageMap>
      </StyledFooterMainContainer>
      <StyledLink
        href="https://www.facebook.com/CentrumDrohobycz"
        className="facebookLink"
      >
        <a>
          <Image
            src={facebookIcon}
            alt="Facebook Icon"
            height={40}
            width={40}
          />
        </a>
      </StyledLink>
      <StyledBottomText>
        2023 © Zjednoczenie nauczycieli polskich w Ukraine
      </StyledBottomText>
    </StyledFooterContent>
  </StyledFooterContainer>
);
export default Footer;
