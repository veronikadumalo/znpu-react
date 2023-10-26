import styled from "styled-components";
import Layout from "../components/Layout";
import { SubMenu } from "../components/SubMenu";
import { NAVIGATION } from "../data/navigation";
import { NewPost } from "../components/NewPost";
import { useLazyQuery } from "@apollo/client";
import { NEWS } from "../graphql/query/news";
import { useEffect, useState } from "react";
import { setGlobalState } from "../context/state";
import { Post } from "../types/general";

const StyledContainer = styled.div`
  display: flex;
`;
const StyledNews = styled.div`
  padding: 0 20px;
  width: 100%;
`;
const StyledTitle = styled.h2`
  text-align: center;
  font-style: italic;
  max-width: 70%;
  margin: 0 auto;
  padding-bottom: 30px;
  @media (max-width: 700px) {
    padding-bottom: 10px;
  }
`;

function Aktualnosci() {
  const [newsData, setNewsData] = useState<Post[] | []>([]);
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
    setGlobalState("isLoading", loading);
  }, [loading]);
  return (
    <Layout>
      <StyledContainer>
        <SubMenu submenuItems={NAVIGATION[0].subpages} />
        <StyledNews>
          <StyledTitle>Aktualności</StyledTitle>
          {newsData?.map((post, i) => (
            <NewPost post={post} key={i} />
          ))}
        </StyledNews>
      </StyledContainer>
    </Layout>
  );
}

export default Aktualnosci;
