import styled from "styled-components";
import Layout from "../components/Layout";
import { SubMenu } from "../components/SubMenu";
import { NAVIGATION } from "../data/navigation";
import nataliaTulasiewiczImage from "../assets/images/natalia-tulasiewicz.png";
import Image from "next/image";
import { HomePageInfo } from "../types/general";
import { useEffect, useState } from "react";
import { HOME_PAGE_CONTENT } from "../graphql/query/homePageContent";
import { useLazyQuery } from "@apollo/client";
import { setGlobalState } from "../context/state";
import testImage from "../assets/images/test-image.png";

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
const StyledImage = styled(Image)`
  max-width: 300px;
  height: auto;
  object-fit: cover;
`;
const StyledDescription = styled.p`
  text-align: justify;
  font-size: 15px;
  line-height: 20px;
  padding-top: 30px;
`;

function NataliaTulasiewicz() {
  const [nataliaPageInfo, setNataliPageInfo] = useState<
    HomePageInfo | undefined
  >(undefined);
  const [homePageContent, { loading }] = useLazyQuery(HOME_PAGE_CONTENT, {
    onCompleted: (data) => {
      if (!data) return;
      const pageInfo = data.homePageContent.find(
        (item: any) => item.type === "natalia"
      );
      setNataliPageInfo(pageInfo);
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
          <StyledTitle>{nataliaPageInfo?.pageTitle}</StyledTitle>
          <StyledImage
            src={
              nataliaPageInfo?.imageUrl ? nataliaPageInfo?.imageUrl : testImage
            }
            alt="Natalia Tulaśiewicz"
            width={300}
            height={300}
          />
          <StyledDescription>
            <span
              dangerouslySetInnerHTML={{
                __html: String(nataliaPageInfo?.longDescription || ""),
              }}
            />
          </StyledDescription>
        </StyledContent>
      </StyledContainer>
    </Layout>
  );
}
export default NataliaTulasiewicz;
