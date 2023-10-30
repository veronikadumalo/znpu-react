import styled from "styled-components";
import Layout from "../components/Layout";
import { SubMenu } from "../components/SubMenu";
import { NAVIGATION } from "../data/navigation";
import { useLazyQuery } from "@apollo/client";
import { HOME_PAGE_CONTENT } from "../graphql/query/homePageContent";
import { useEffect, useState } from "react";
import { HomePageInfo } from "../types/general";
import { setGlobalState } from "../context/state";

const StyledContainer = styled.div`
  display: flex;
`;
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
`;
const StyledTitle = styled.h2`
  text-align: center;
  font-style: italic;
  max-width: 70%;
  margin: 0 auto;
  padding-bottom: 30px;
`;

const StyledDescription = styled.div`
  & ul {
    list-style: decimal;
    padding-left: 20px;
    padding-bottom: 15px;
  }
`;

export default function ONas() {
  const [aboutUsPageInfo, setAboutUsPageInfo] = useState<
    HomePageInfo | undefined
  >(undefined);
  const [homePageContent, { loading }] = useLazyQuery(HOME_PAGE_CONTENT, {
    onCompleted: (data) => {
      if (!data) return;
      const pageInfo = data.homePageContent.find(
        (item: any) => item.type === "aboutUs"
      );
      setAboutUsPageInfo(pageInfo);
    },
  });
  useEffect(() => {
    homePageContent();
  }, []);
  useEffect(() => {
    setGlobalState("isLoading", loading);
  }, [loading]);
  return (
    <Layout>
      <StyledContainer>
        <SubMenu submenuItems={NAVIGATION[0].subpages} />
        <StyledContent>
          <StyledTitle>{aboutUsPageInfo?.pageTitle}</StyledTitle>
          <StyledDescription>
            <span
              dangerouslySetInnerHTML={{
                __html: String(aboutUsPageInfo?.longDescription || ""),
              }}
            />
          </StyledDescription>
        </StyledContent>
      </StyledContainer>
    </Layout>
  );
}
