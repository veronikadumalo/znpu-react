import styled from "styled-components/macro";
import Layout from "../components/Layout";
import { SubMenu } from "../components/SubMenu";
import { NAVIGATION } from "../data/navigation";
import FileLink from "../components/FileLink";

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
          <FileLink
            isFileDownload={false}
            fileLink="/files/Geografia.pdf"
            title="Програма ДЛЯ ЗАГАЛЬНООСВІТНІХ НАВЧАЛЬНИХ ЗАКЛАДІВ. Географія Польщі 5-6 клас, 10 -11 клас факультативний курс/ курс за вибором. Автор: Шпроцер Н.І."
          />
          <FileLink
            isFileDownload={false}
            fileLink="/files/HistoriaPolski.pdf"
            title="ПРОГРАМA ІСТОРІЯ ПОЛЬЩІ ДЛЯ ЗАГАЛЬНООСВІТНІХ НАВЧАЛЬНИХ ЗАКЛАДІВ ФАКУЛЬТАТИВНИЙ КУРС/КУРС ЗА ВИБОРОМ 5-9, 10-11 класи"
          />
          <FileLink
            isFileDownload={false}
            fileLink="/files/Jezyk_polski.pdf"
            title="ПРОГРАМА для загальноосвітніх навчальних закладів. Польська мова 5-11 класи. Факультативний курс /курс за вибором/ Автор: Л. М. Глинюк."
          />
          <FileLink
            isFileDownload={false}
            fileLink="/files/Literatura_Polski.pdf"
            title="ПРОГРАМА для загальноосвітніх навчальних закладів. Польська література 7-11 класи. Факультативний курс /курс за вибором/ Автор: Мацькович Марія Романівна"
          />
          <FileLink
            isFileDownload={false}
            fileLink="/files/Narodoznawstwo.pdf"
            title="Програма ДЛЯ ЗАГАЛЬНООСВІТНІХ НАВЧАЛЬНИХ ЗАКЛАДІВ З ПОЛЬСЬКОГО НАРОДОЗНАВСТВА10 – 11 КЛАСИ ФАКУЛЬТАТИВНИЙ КУРС/Курс за виборомю. Укладачі програми: К.філос. н., доц. Білан Т. О., Міськевич К.І., Хлопек А.Б."
          />
        </StyledContent>
      </StyledContainer>
    </Layout>
  );
};

export default PolishLanguageClasses;
