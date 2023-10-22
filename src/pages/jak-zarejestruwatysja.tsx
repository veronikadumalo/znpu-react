import styled from "styled-components";
import Layout from "../components/Layout";
import { SubMenu } from "../components/SubMenu";
import { NAVIGATION } from "../data/navigation";
import FileLink from "../components/FileLink";
import { HOW_TO_REGISTER } from "../data/saturdaySchools/howToRegister";

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

const HowToRegister = () => {
  return (
    <Layout>
      <StyledContainer>
        <SubMenu submenuItems={NAVIGATION[6].subpages} />
        <StyledContent>
          {HOW_TO_REGISTER.map((file) => (
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
};

export default HowToRegister;
