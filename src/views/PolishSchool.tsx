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

const PolishSchool = () => {
  return (
    <Layout>
      <StyledContainer>
        <SubMenu submenuItems={NAVIGATION[4].subpages} />
        <StyledContent>
          <FileLink
            isFileDownload={false}
            fileLink="/Intehr.kurs.polskoyi.ta.zarub.lit.5-9-kl.Lebed.14.07.pdf"
            title="Модельна навчальна програма «Інтегрований курс польської та зарубіжної літератури. 5-9 класи» для закладів загальної середньої освіти  (укл. Лебедь Р. К.)"
          />
          <FileLink
            isFileDownload={false}
            fileLink="/literatura-polska-ta-zarubizhna-dlya-zagalnoosvitnix-navchalnix-zaklladiv-z-navchannyam-polskoyu-movoyu.pdf"
            title="ІНТЕГРОВАНИЙ КУРС «ЛІТЕРАТУРА» (ПОЛЬСЬКА ТА ЗАРУБІЖНА). ПРОГРАМА для загальноосвітніх навчальних закладів з навчанням польською мовою 5 –9 класи"
          />
          <FileLink
            isFileDownload={false}
            fileLink="/polska-mova-dlya-zagalnoosvitnix-navchalnix-zakladiv-z-navchannyam-polskoyu-movoyu.pdf"
            title="ПОЛЬСЬКА МОВА. ПРОГРАМА для загальноосвітніх навчальних закладів з навчанням польською мовою 5 –9 КЛАСИ"
          />
          <FileLink
            isFileDownload={false}
            fileLink="/polska-mova-dlya-zagalnoosvitnix-navchalnix-zakladiv-z-navchannyam-polskoyu-movoyu-profilnij-riven_1.pdf"
            title="ПОЛЬСЬКА МОВА. Профільний рівень. ПРОГРАМА з профільного навчання для 10–11 класів  загальноосвітніх навчальних закладів з навчанням польською мовою"
          />
          <FileLink
            isFileDownload={false}
            fileLink="/5-6__10-11______.pdf"
            title="Програма ДЛЯ ЗАГАЛЬНООСВІТНІХ НАВЧАЛЬНИХ ЗАКЛАДІВ. Географія Польщі 5-6 клас, 10 -11 клас факультативний курс/ курс за вибором. Автор: Шпроцер Н.І."
          />
          <FileLink
            isFileDownload={false}
            fileLink="/historiaPolski5-11.pdf"
            title="ПРОГРАМA. ІСТОРІЯ ПОЛЬЩІ ДЛЯ ЗАГАЛЬНООСВІТНІХ НАВЧАЛЬНИХ ЗАКЛАДІВ. ФАКУЛЬТАТИВНИЙ КУРС/КУРС ЗА ВИБОРОМ 5-9, 10-11 класи АВТОР: ВІНЦЕНЗ Р.Л."
          />
          <FileLink
            isFileDownload={false}
            fileLink="/7-11.pdf"
            title="ПРОГРАМА для загальноосвітніх навчальних закладів. Польська література 7-11 класи. Факультативний курс /курс за вибором/ Автор: Мацькович Марія Романівна"
          />
          <FileLink
            isFileDownload={false}
            fileLink="/polska-literatura-dlya-zagalnoosvitnix-navchalnix-zakladiv-z-navchannyam-polskoyu-movoyu-profilnij-riven.doc"
            title="ПОЛЬСЬКА ЛІТЕРАТУРА. ПРОГРАМА для загальноосвітніх навчальних закладів з навчанням польською мовою 10–11 класи. Профільний рівень"
          />
          <FileLink
            isFileDownload={false}
            fileLink="/polska-mova-ta-literatura-z-navchannyam-polskoyu-movoyu-riven-standartu.docx"
            title="ПРОГРАМА  «польська мова та література» 10–11 класи для загальноосвітніх навчальних закладів з навчанням польською мовою (рівень стандарту)"
          />
          <FileLink
            isFileDownload={false}
            fileLink="/Пол. мова 1-2 кл. шк. з пол. мовою навчання.doc"
            title="Типова навчальна програма з польської мови та читання для 1-2 класів закладів загальної середньої освіти з навчанням польською мовою"
          />
          <FileLink
            isFileDownload={false}
            fileLink="/Пол.мова3-4кл.шк.зпольськоюмовоюнавчання2018..doc"
            title="Навчальна програма з літературного читання для 3-4 класів закладів загальної середньої освіти з навчанням польською мовою"
          />
        </StyledContent>
      </StyledContainer>
    </Layout>
  );
};

export default PolishSchool;
