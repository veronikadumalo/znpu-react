import styled from "styled-components";
import Layout from "../components/Layout";
import { SubMenu } from "../components/SubMenu";
import { NAVIGATION } from "../data/navigation";
import { useLazyQuery } from "@apollo/client";
import { NEWS } from "../graphql/query/news";
import { useEffect, useState } from "react";
import { setGlobalState } from "../context/state";
import { Post } from "../types/general";
import { useRouter } from "next/router";
import Image from "next/image";

const StyledContainer = styled.div`
  display: flex;
`;
const StyledNews = styled.div`
  padding: 0 20px;
  width: 100%;
`;
const StyledTitle = styled.h2`
  padding-bottom: 10px;
  @media (max-width: 700px) {
    font-size: 16px;
  }
`;
const StyledDescription = styled.div`
  padding-bottom: 10px;
  @media (max-width: 700px) {
    font-size: 14px;
  }
`;
const StyledSubtitle = styled.h4`
  padding-bottom: 8px;
  color: var(--grey);
  @media (max-width: 700px) {
    font-size: 14px;
  }
`;
const StyledMainImage = styled(Image)`
  width: auto;
  height: 250px;
  @media (max-width: 700px) {
    height: 150px;
    width: auto;
  }
`;
const StyledContentContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 20px;
  @media (max-width: 700px) {
    flex-direction: column-reverse;
  }
`;
const StyledDate = styled.p`
  color: var(--grey);
  font-size: 12px;
`;

function New() {
  const router = useRouter();
  const [newsData, setNewsData] = useState<Post[] | []>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [news, { loading }] = useLazyQuery(NEWS, {
    onCompleted: (data) => {
      if (!data) return;
      setNewsData(data.news);
    },
  });
  useEffect(() => {
    news();
  }, []);
  useEffect(() => {
    if (!router && !newsData) return;
    const id = router.query.id;
    const selectedPost = newsData.find((item) => item.id === id);
    selectedPost && setSelectedPost(selectedPost);
  }, [router, newsData]);
  useEffect(() => {
    setGlobalState("isLoading", loading);
  }, [loading]);
  return (
    <Layout>
      <StyledContainer>
        <SubMenu submenuItems={NAVIGATION[0].subpages} />
        <StyledNews>
          <StyledContentContainer>
            <StyledMainImage
              src={selectedPost?.imageUrl || ""}
              alt="Test"
              width={300}
              height={300}
            />
            <div>
              <StyledTitle>{selectedPost?.title}</StyledTitle>
              <StyledSubtitle>{selectedPost?.subtitle}</StyledSubtitle>
              <StyledDate>{selectedPost?.updatedAt}</StyledDate>
            </div>
          </StyledContentContainer>
          <StyledDescription>{selectedPost?.description}</StyledDescription>
        </StyledNews>
      </StyledContainer>
    </Layout>
  );
}

export default New;
