import styled from "styled-components";
import Layout from "../components/Layout";
import { SubMenu } from "../components/SubMenu";
import { NAVIGATION } from "../data/navigation";
import FileLink from "../components/FileLink";
import { useEffect, useState } from "react";
import { HomePageInfo } from "../types/general";
import { HOME_PAGE_CONTENT } from "../graphql/query/homePageContent";
import { setGlobalState } from "../context/state";
import { useLazyQuery } from "@apollo/client";

const StyledContainer = styled.div`
  display: flex;
`;
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  @media (max-width: 700px) {
    padding: 0;
  }
`;
const StyledTitle = styled.h2`
  text-align: center;
  font-style: italic;
  max-width: 70%;
  margin: 0 auto;
  padding-bottom: 30px;
  @media (max-width: 700px) {
    padding-bottom: 10px;
    font-size: 17px;
  }
`;
const StyledStatuteContent = styled.div`
  font-size: 16px;
  line-height: 20px;
  padding-bottom: 30px;
  @media (max-width: 700px) {
    font-size: 14px;
    line-height: 18px;
  }
`;

function Statute() {
  const [statutPageInfo, setStatutPageInfo] = useState<
    HomePageInfo | undefined
  >(undefined);
  const [homePageContent, { loading }] = useLazyQuery(HOME_PAGE_CONTENT, {
    onCompleted: (data) => {
      if (!data) return;
      const pageInfo = data.homePageContent.find(
        (item: any) => item.type === "statut"
      );
      setStatutPageInfo(pageInfo);
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
          <StyledTitle>{statutPageInfo?.pageTitle}</StyledTitle>
          <StyledStatuteContent>
            <span
              dangerouslySetInnerHTML={{
                __html: String(statutPageInfo?.longDescription || ""),
              }}
            />
          </StyledStatuteContent>
          <FileLink fileLink="/statut.docx" title="Statut " />
          <FileLink fileLink="/Статут.doc" title="Статут" />
        </StyledContent>
      </StyledContainer>
    </Layout>
  );
}

export default Statute;
