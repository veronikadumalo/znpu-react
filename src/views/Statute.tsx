import styled from "styled-components/macro";
import Layout from "../components/Layout";
import { SubMenu } from "../components/SubMenu";
import { NAVIGATION } from "../data/navigation";
import FileLink from "../components/FileLink";
import { STATUTE } from "../data/statute";

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
const StyledTitle = styled.h2`
  text-align: center;
  font-style: italic;
  max-width: 70%;
  margin: 0 auto;
  padding-bottom: 30px;
  @media (max-width: 700px) {
    padding-bottom: 10px;
    font-size: 17px;
  }
`;
const StyledStatuteContent = styled.p`
  font-size: 16px;
  line-height: 20px;
  padding-bottom: 30px;
  @media (max-width: 700px) {
    font-size: 14px;
    line-height: 18px;
  }
`;

const Statute = () => {
  return (
    <Layout>
      <StyledContainer>
        <SubMenu submenuItems={NAVIGATION[0].subpages} />
        <StyledContent>
          <StyledTitle>
            Zjednoczenie Nauczycieli Polskich na Ukrainie – witamy!
          </StyledTitle>
          <StyledStatuteContent>{STATUTE}</StyledStatuteContent>
          <FileLink fileLink="/statut.docx" title="Statut " />
          <FileLink fileLink="/Статут.doc" title="Статут" />
        </StyledContent>
      </StyledContainer>
    </Layout>
  );
};

export default Statute;
