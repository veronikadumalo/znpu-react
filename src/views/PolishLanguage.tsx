import styled from "styled-components/macro";
import FileLink from "../components/FileLink";
import Layout from "../components/Layout";
import { SubMenu } from "../components/SubMenu";
import { NAVIGATION } from "../data/navigation";

const StyledContainer = styled.div`
  display: flex;
`;
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
`;

const PolishLanguage = () => {
  return (
    <Layout>
      <StyledContainer>
        <SubMenu submenuItems={NAVIGATION[4].subpages} />
        <StyledContent>
          <FileLink
            isFileDownload={false}
            fileLink="/znpu-react/Druha.inoz.mov.5-9-kl.Redko.ta.in.14.07.pdf"
            title="Модельна навчальна програма «Друга іноземна мова. 5-9 класи» для закладів загальної середньої освіти (автори Редько В. Г., Шаленко О. П., Сотникова С. І., Коваленко О. Я., Коропецька І. Б., Якоб О. М., Самойлюкевич І. В., Добра О. М., Кіор Т. М., Мацькович М. Р., Глинюк Л. М., Браун Є. Л.)"
          />
        </StyledContent>
      </StyledContainer>
    </Layout>
  );
};

export default PolishLanguage;
