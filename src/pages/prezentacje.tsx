import styled from "styled-components";
import Layout from "../components/Layout";
import { SubMenu } from "../components/SubMenu";
import { NAVIGATION } from "../data/navigation";
import { PRESENTATIONS } from "../data/teachingMaterial/presentations";
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

function Presentations() {
  return (
    <Layout>
      <StyledContainer>
        <SubMenu submenuItems={NAVIGATION[5].subpages} />
        <StyledContent>
          {PRESENTATIONS.map((file) => (
            <FileLink
              key={file.title}
              fileLink={file.link}
              title={file.title}
            />
          ))}
        </StyledContent>
      </StyledContainer>
    </Layout>
  );
}

export default Presentations;
