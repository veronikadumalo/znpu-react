import styled from "styled-components/macro";
import Layout from "../components/Layout";
import { SubMenu } from "../components/SubMenu";
import { NAVIGATION } from "../data/navigation";
import { SCENARIOS_OF_CELEBRATIONS } from "../data/teachingMaterial/scenariosOfCelebrations";
import FileLink from "../components/FileLink";

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

const ScenariosOfCelebrations = () => {
  return (
    <Layout>
      <StyledContainer>
        <SubMenu submenuItems={NAVIGATION[5].subpages} />
        <StyledContent>
          {SCENARIOS_OF_CELEBRATIONS.map((book) => (
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

export default ScenariosOfCelebrations;
