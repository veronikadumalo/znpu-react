import Layout from "../components/Layout";
import styled from "styled-components";
import { SubMenu } from "../components/SubMenu";
import { NAVIGATION } from "../data/navigation";
import testImage from "../assets/images/test-image.png";
import nataliaTulasiewiczImage from "../assets/images/natalia-tulasiewicz.png";
import { NewPost } from "../components/NewPost";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { NEWS } from "../graphql/query/news";
import { HomePageInfo, Post } from "../types/general";
import { setGlobalState } from "../context/state";
import { HOME_PAGE_CONTENT } from "../graphql/query/homePageContent";

const StyledContent = styled.div`
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;

const StyledAboutUsContainer = styled.div`
  border: 1px solid var(--grey);
  padding: 20px;
  min-height: 800px;
  @media (max-width: 700px) {
    min-height: auto;
  }
`;

const StyledSectionTitle = styled.h4`
  text-align: center;
  font-size: 20px;
  text-transform: uppercase;
  @media (max-width: 700px) {
    padding-bottom: 10px;
    font-size: 18px;
  }
`;

const StyledGirlContainer = styled.div`
  border: 1px solid var(--grey);
  padding: 20px 15px;
  min-height: 800px;
  @media (max-width: 700px) {
    min-height: auto;
  }
`;

const StyledNewsContainer = styled.div`
  border: 1px solid var(--grey);
  padding: 20px 15px;
  min-height: 800px;
`;

const StyledAboutUsImage = styled(Image)`
  height: auto;
  width: 100%;
  padding: 20px 30px;
  @media (max-width: 700px) {
    height: 100px;
    width: 100px;
    padding: 0px;
    padding-top: 5px;
    padding-right: 10px;
  }
`;

const StyledDescription = styled.p`
  font-size: 14px;
  text-align: justify;
  @media (max-width: 700px) {
    max-height: 137px;
    overflow: hidden;
    font-size: 12px;
  }
`;
const StyledMoreLink = styled(Link)`
  color: var(--black);
  text-align: center;
  display: block;
  width: 100%;
  font-weight: 700;
  margin-top: 20px;
`;

const StyledGirlTitle = styled.h4`
  font-style: italic;
  text-align: center;
  font-size: 18px;
  line-height: 25px;
  font-weight: 900;
  @media (max-width: 700px) {
    font-size: 14px;
    line-height: 20px;
  }
`;
const StyledImageContainer = styled.div`
  @media (max-width: 700px) {
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
const StyledGirlImage = styled(Image)`
  height: auto;
  width: 100%;
  padding: 20px 40px;
  @media (max-width: 700px) {
    max-height: 200px;
    width: auto;
    padding: 20px 0;
    text-align: center;
  }
`;
const StyledSectionContent = styled.div`
  @media (max-width: 700px) {
    display: flex;
  }
`;

export default function Page() {
  const [aboutUsPageInfo, setAboutUsPageInfo] = useState<
    HomePageInfo | undefined
  >(undefined);
  const [NTPageInfo, setNTPageInfo] = useState<HomePageInfo | undefined>(
    undefined
  );
  const [newsData, setNewsData] = useState<Post[] | []>([]);

  const [news, { loading }] = useLazyQuery(NEWS, {
    onCompleted: (data) => {
      if (!data) return;
      setNewsData(data.news.slice(0, 4));
    },
  });
  const [homePageContent, { loading: homePageContentLoading }] = useLazyQuery(
    HOME_PAGE_CONTENT,
    {
      onCompleted: (data) => {
        if (!data) return;
        const pageInfo = data.homePageContent.find(
          (item: any) => item.type === "aboutUs"
        );
        const NTPageInfo = data.homePageContent.find(
          (item: any) => item.type === "natalia"
        );
        setAboutUsPageInfo(pageInfo);
        setNTPageInfo(NTPageInfo);
      },
    }
  );

  useEffect(() => {
    news();
    homePageContent();
  }, []);
  useEffect(() => {
    setGlobalState("isLoading", loading || homePageContentLoading);
  }, [loading, homePageContentLoading]);
  return (
    <Layout>
      <StyledContent>
        <SubMenu submenuItems={NAVIGATION[0].subpages} />
        <StyledAboutUsContainer>
          <StyledSectionTitle>{aboutUsPageInfo?.homeTitle}</StyledSectionTitle>
          <StyledSectionContent>
            <StyledAboutUsImage
              src={
                aboutUsPageInfo?.imageUrl
                  ? aboutUsPageInfo?.imageUrl
                  : testImage
              }
              alt="O nas"
              width={300}
              height={300}
            />
            <StyledDescription>
              <span
                dangerouslySetInnerHTML={{
                  __html: String(aboutUsPageInfo?.shortDescription || ""),
                }}
              />
            </StyledDescription>
          </StyledSectionContent>
          <StyledMoreLink href="/o-nas">więcej {`  >`}</StyledMoreLink>
        </StyledAboutUsContainer>
        <StyledGirlContainer>
          <StyledGirlTitle>{NTPageInfo?.homeTitle}</StyledGirlTitle>
          <StyledImageContainer>
            <StyledGirlImage
              src={NTPageInfo?.imageUrl ? NTPageInfo.imageUrl : testImage}
              alt="Natalia Tulasiewicz"
              width={300}
              height={300}
            />
          </StyledImageContainer>
          <StyledDescription>{NTPageInfo?.shortDescription}</StyledDescription>
          <StyledMoreLink href="/natalia-tulasiewicz">
            więcej {`  >`}
          </StyledMoreLink>
        </StyledGirlContainer>
        <StyledNewsContainer>
          <StyledSectionTitle>aktualności</StyledSectionTitle>
          <div>
            {newsData?.map((post, i) => (
              <NewPost post={post} key={i} />
            ))}
          </div>
          <StyledMoreLink href="/aktualnosci">
            wszystkie aktualności {`  >`}
          </StyledMoreLink>
        </StyledNewsContainer>
      </StyledContent>
    </Layout>
  );
}
