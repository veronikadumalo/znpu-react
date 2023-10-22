import styled from "styled-components";
import FileLink from "../components/FileLink";
import Layout from "../components/Layout";
import { SubMenu } from "../components/SubMenu";
import { NAVIGATION } from "../data/navigation";
import { COLLECTION_OF_DICTATIONS } from "../data/teachingMaterial/collectionOfDictations";

const StyledContainer = styled.div`
  display: flex;
`;
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  @media (max-width: 700px) {
    padding: 0;
  }
`;

const CollectionOfDictations = () => {
  return (
    <Layout>
      <StyledContainer>
        <SubMenu submenuItems={NAVIGATION[5].subpages} />
        <StyledContent>
          {COLLECTION_OF_DICTATIONS.map((book) => (
            <FileLink
              key={book.title}
              fileLink={book.link}
              title={book.title}
            />
          ))}
        </StyledContent>
      </StyledContainer>
    </Layout>
  );
};

export default CollectionOfDictations;
