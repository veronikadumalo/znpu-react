import styled from "styled-components/macro";
import Layout from "../components/Layout";
import { SubMenu } from "../components/SubMenu";
import { NAVIGATION } from "../data/navigation";
import FileLink from "../components/FileLink";
import { POLISH_LANGUAGE_CLASSES } from "../data/programs/polishLanguageClasses";

const StyledContainer = styled.div`
  display: flex;
`;
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
`;

const PolishLanguageClasses = () => {
  return (
    <Layout>
      <StyledContainer>
        <SubMenu submenuItems={NAVIGATION[4].subpages} />
        <StyledContent>
          {POLISH_LANGUAGE_CLASSES.map(({ title, link }) => (
            <FileLink key={title} fileLink={link} title={title} />
          ))}
        </StyledContent>
      </StyledContainer>
    </Layout>
  );
};

export default PolishLanguageClasses;
