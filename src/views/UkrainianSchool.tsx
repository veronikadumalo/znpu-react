import styled from "styled-components/macro";
import FileLink from "../components/FileLink";
import Layout from "../components/Layout";
import { SubMenu } from "../components/SubMenu";
import { NAVIGATION } from "../data/navigation";
import { UKRAINIAN_SCHOOLS } from "../data/programs/ukrainianSchools";

const StyledContainer = styled.div`
  display: flex;
`;
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
`;

const UkrainianSchool = () => {
  return (
    <Layout>
      <StyledContainer>
        <SubMenu submenuItems={NAVIGATION[4].subpages} />
        <StyledContent>
          {UKRAINIAN_SCHOOLS.map(({ title, link }) => (
            <FileLink key={title} fileLink={link} title={title} />
          ))}
        </StyledContent>
      </StyledContainer>
    </Layout>
  );
};

export default UkrainianSchool;
