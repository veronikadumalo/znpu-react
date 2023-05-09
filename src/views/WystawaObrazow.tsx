import styled from "styled-components/macro";
import Layout from "../components/Layout";
import { SubMenu } from "../components/SubMenu";
import { NAVIGATION } from "../data/navigation";
import PdfSlider from "../components/PdfSlider";
import FileLink from "../components/FileLink";
import pdf from "../assets/files/PrezentacjaIkon.pdf";

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

const WystawaObrazow = () => {
  return (
    <Layout>
      <StyledContainer>
        <SubMenu submenuItems={NAVIGATION[2].subpages} />
        <StyledContent>
          <PdfSlider pdfFile={pdf} />
          <FileLink fileLink="/PrezentacjaIkon.pdf" title="Prezentacja Ikon" />
        </StyledContent>
      </StyledContainer>
    </Layout>
  );
};

export default WystawaObrazow;
