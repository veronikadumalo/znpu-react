import { ReactNode } from "react";
import DesktopNavigation from "./DesktopNavigation";
import Footer from "./Footer";
import DesktopTopbar from "./DesktopTopbar";
import styled from "styled-components/macro";
import MobileNavigation from "./MobileNavigation";
import MobileFooter from "./MobileFooter";

interface LayoutProps {
  children: ReactNode;
}

const StyledContent = styled.div`
  max-width: 1640px;
  margin: 0 auto;
  padding: 0 30px;
  @media (max-width: 700px) {
    padding: 0;
    margin: 0;
  }
`;

const StyledChildrenContainer = styled.div`
  padding: 50px 0;
  @media (max-width: 700px) {
    padding: 25px 15px;
  }
`;

const Layout = ({ children }: LayoutProps) => (
  <>
    <StyledContent>
      <DesktopTopbar />
      <DesktopNavigation />
      <MobileNavigation />
      <StyledChildrenContainer>{children}</StyledChildrenContainer>
    </StyledContent>
    <Footer />
    <MobileFooter />
  </>
);
export default Layout;
