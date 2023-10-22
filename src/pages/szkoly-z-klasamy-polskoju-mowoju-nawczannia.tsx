import styled from "styled-components";
import Layout from "../components/Layout";
import { SubMenu } from "../components/SubMenu";
import { NAVIGATION } from "../data/navigation";
import FileLink from "../components/FileLink";
import { POLISH_SCHOOLS } from "../data/programs/polishSchools";

const StyledContainer = styled.div`
  display: flex;
`;
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
`;

function PolishSchool() {
  return (
    <Layout>
      <StyledContainer>
        <SubMenu submenuItems={NAVIGATION[4].subpages} />
        <StyledContent>
          {POLISH_SCHOOLS.map(({ title, link }) => (
            <FileLink key={title} title={title} fileLink={link} />
          ))}
        </StyledContent>
      </StyledContainer>
    </Layout>
  );
}

export default PolishSchool;
