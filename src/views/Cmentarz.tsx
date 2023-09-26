import styled from "styled-components/macro";
import Layout from "../components/Layout";
import { SubMenu } from "../components/SubMenu";
import { NAVIGATION } from "../data/navigation";
import PdfSlider from "../components/PdfSlider";
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

const Cmentarz = () => {
  return (
    <Layout>
      <StyledContainer>
        <SubMenu submenuItems={NAVIGATION[2].subpages} />
        <StyledContent>
          <PdfSlider pdfFile={"/cmentarze.pdf"} />
          <FileLink fileLink="/cmentarze.pdf" title="Cmentarze" />
        </StyledContent>
      </StyledContainer>
    </Layout>
  );
};

export default Cmentarz;