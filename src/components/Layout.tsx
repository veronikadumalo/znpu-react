import { ReactNode, useEffect, useState } from "react";
import DesktopNavigation from "./DesktopNavigation";
import Footer from "./Footer";
import DesktopTopbar from "./DesktopTopbar";
import styled from "styled-components";
import MobileNavigation from "./MobileNavigation";
import MobileFooter from "./MobileFooter";
import PageWrapper from "./PageWrapper";
import { setGlobalState, useGlobalState } from "../context/state";
import LoadingAnimation from "./LoadingAnimation";
import { useLazyQuery } from "@apollo/client";
import { PAGE_INFO } from "../graphql/query/pageInfo";
import { PageInfo } from "../types/general";

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

const Layout = ({ children }: LayoutProps) => {
  const [isLoading] = useGlobalState("isLoading");
  const [pageInfoData, setPageInfoData] = useState<PageInfo | undefined>(
    undefined
  );
  const [pageInfo, { loading }] = useLazyQuery(PAGE_INFO, {
    onCompleted: (data) => {
      if (!data) return;
      setPageInfoData(data.pageInfo[0]);
    },
  });
  useEffect(() => {
    pageInfo();
  }, []);
  useEffect(() => {
    setGlobalState("isLoading", loading);
  }, [loading]);
  return (
    <>
      <PageWrapper>
        <StyledContent>
          <DesktopTopbar />
          <DesktopNavigation />
          <MobileNavigation />
          <StyledChildrenContainer>{children}</StyledChildrenContainer>
        </StyledContent>
        <Footer pageInfo={pageInfoData} />
        <MobileFooter pageInfo={pageInfoData} />
        {isLoading ? <LoadingAnimation /> : <></>}
      </PageWrapper>
    </>
  );
};
export default Layout;
