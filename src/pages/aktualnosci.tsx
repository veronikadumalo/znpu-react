import styled from "styled-components";
import Layout from "../components/Layout";
import { SubMenu } from "../components/SubMenu";
import { NAVIGATION } from "../data/navigation";
import { POSTS } from "../data/newsPosts";
import { NewPost } from "../components/NewPost";

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
  return (
    <Layout>
      <StyledContainer>
        <SubMenu submenuItems={NAVIGATION[0].subpages} />
        <StyledNews>
          <StyledTitle>Aktualności</StyledTitle>
          {POSTS.map((post, i) => (
            <NewPost post={post} key={i} />
          ))}
        </StyledNews>
      </StyledContainer>
    </Layout>
  );
}

export default Aktualnosci;
