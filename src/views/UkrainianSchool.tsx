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

const UkrainianSchool = () => {
  return (
    <Layout>
      <StyledContainer>
        <SubMenu submenuItems={NAVIGATION[4].subpages} />
        <StyledContent>
          <FileLink
            isFileDownload={false}
            fileLink="/files/Pol.5-9-kl.pdf"
            title="Модельна навчальна програма «Польська мова. 5-9 класи ( початок вивчення з 1 класу)» для закладів загальної середньої освіти (авт. Войцева О.А., Бучацька Т.Г.)"
          />
          <FileLink
            isFileDownload={false}
            fileLink="/files/PolMatskovych.pdf"
            title="Модельна навчальна програма «Польська мова. 5-9 класи (початок вивчення з 5-го класу)» для закладів загальної середньої освіти (укл. Мацькович М.Р., Калуські Томаш-Аркадіуш, Калуська Р.Ю.)"
          />
          <FileLink
            isFileDownload={false}
            fileLink="/files/dlya-zagalnoosvitnix-navchalnix-zakladiv.pdf"
            title="Польська мова 10 –11 класи рівень стандарту  Програма для загальноосвітніх навчальних закладів з українською мовою навчання"
          />
          <FileLink
            isFileDownload={false}
            fileLink="/files/Polmowawojcewa1-2kl.doc"
            title="Типова навчальна програма з польської мови та читання для 1-2 класів закладів загальної середньої освіти"
          />
          <FileLink
            isFileDownload={false}
            fileLink="/files/3-4кл.Войцева.doc"
            title="Мови корінних народів та національних меншин України. Навчальна програма з польської мови та читання для 3-4 класів закладів загальної середньої освіти з навчанням українською мовою"
          />
        </StyledContent>
      </StyledContainer>
    </Layout>
  );
};

export default UkrainianSchool;
