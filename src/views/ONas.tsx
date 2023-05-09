import styled from "styled-components";
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
const StyledTitle = styled.h2`
  text-align: center;
  font-style: italic;
  max-width: 70%;
  margin: 0 auto;
  padding-bottom: 30px;
`;

const StyledDescription = styled.div``;
const StyledParagraph = styled.p`
  padding: 15px 0;
`;
const StyledDecimalList = styled.ul`
  list-style: decimal;
  padding-left: 20px;
  padding-bottom: 15px;
`;
const StyledList = styled.ul`
  list-style: inside;
  padding-bottom: 15px;
`;

const ONas = () => {
  return (
    <Layout>
      <StyledContainer>
        <SubMenu submenuItems={NAVIGATION[0].subpages} />
        <StyledContent>
          <StyledTitle>
            Szanowni Państwo, Drogie Koleżanki i Drodzy Koledzy!
          </StyledTitle>
          <StyledDescription>
            <StyledParagraph>
              Na stronie ZNPnU będziemy zamieszczali materiały dotyczące
              nauczania języka i kultury polskiej w systemie oświaty
              ukraińskiej.
            </StyledParagraph>
            <StyledParagraph>
              Na podstronie{" "}
              <strong>
                <i>„O nas”</i>
              </strong>{" "}
              poznacie Państwo historię założenia Zjednoczenia Nauczycieli
              Polskich na Ukrainie, zadania statutowe organizacji, zasady
              powołania Ogólnoukraińskiego Koordynacyjno-Metodycznego Centrum
              Nauczania Języka i Kultury Polskiej w Drohobyczu, cele i
              działalność Centrum, historię adaptacji budynku będącego siedzibą
              Centrum przy ul. Truskawieckiej 9 w Drohobyczu w obwodzie lwowskim
              oraz uzasadnienie nauczania języka i wiedzy o kulturze polskiej w
              świetle prawa ukraińskiego.
            </StyledParagraph>
            <StyledParagraph>
              Na podstronie{" "}
              <strong>
                <i>„Materiały”</i>
              </strong>
              , w dziale zatytułowanym Programy, znajdziecie Państwo programy
              nauczania języka polskiego i przedmiotów nauczanych w języku
              polskim w różnych typach szkół ogólnokształcących funkcjonujących
              na terytorium Ukrainy:
            </StyledParagraph>
            <StyledDecimalList>
              <li>
                Programy nauczania w klasach z polskim językiem nauczania: Język
                polski dla klas 1-4, 5-9, 10-11; Czytanie kl. 1-4; Kurs
                integrowany (literatura polska i powszechna); Programy nauczania
                geografii Polski, historii Polski, literatury polskiej i wiedzy
                o narodzie polskim.
              </li>
              <li>
                Program nauczania języka polskiego jako ojczystego dla klas 1-4,
                5-9 (kontynuacja) oraz 5-9 (początek nauki w klasie 5).
              </li>
              <li>
                Program nauczania języka polskiego jako drugiego obcego dla klas
                5-9. Program według koncepcji Nowej Szkoły Ukraińskiej. Dla
                klasy 5 rozpoczynającej nauczanie języka polskiego w roku
                szkolnym 2022/23 opracowano podręcznik dla klasy 5, rozkład
                materiału i konspekty lekcji.
              </li>
              <li>
                Program zajęć fakultatywnych z języka polskiego dla klas 1-4,
                5-9, 10-11 wraz z przykładowymi konspektami. Program języka
                polskiego jako fakultatywnego dla kl. 5-11.
              </li>
              <li>
                Programy dla pozaszkolnych placówek oświatowych:
                oświatowo-kulturalnych, centrów polskiej mniejszości narodowej,
                polskich sobotnio-niedzielnych szkół z przedmiotów: język
                polski, literatura polska, geografia Polski, historia Polski,
                polska kultura muzyczna, wiedza o narodzie polskim.
              </li>
            </StyledDecimalList>
            <StyledParagraph>
              Ponadto podstrona{" "}
              <strong>
                <i>„Materiały”</i>
              </strong>{" "}
              będzie zawierała następujące działy:
            </StyledParagraph>
            <StyledParagraph>
              <i>Konspekty</i> zawierające konspekty i scenariusze lekcji,
              zajęć, imprez, uroczystości, wycieczek szkolnych, a także
              propozycje ćwiczeń do wykorzystania w pracy dydaktycznej.
            </StyledParagraph>
            <StyledParagraph>
              <i>Kursy</i> zawierające wykłady, ćwiczenia oraz prezentacje z
              kursów i warsztatów doskonalenia zawodowego nauczycieli języka
              polskiego.
            </StyledParagraph>
            <StyledParagraph>
              <i>Podręczniki</i> zawierające informacje o podręcznikach
              dopuszczonych do użytku szkolnego.
            </StyledParagraph>
            <StyledParagraph>
              <i>Olimpiady</i> zawierające informacje o Ogólnoukraińskich
              Olimpiadach Języka Polskiego i Literatury Polskiej, arkusze zadań
              z lat poprzednich i klucze do ich rozwiązania.
            </StyledParagraph>
            <StyledParagraph>
              Na podstronie{" "}
              <strong>
                <i>Dokumenty</i>
              </strong>{" "}
              znajdziecie Państwo kompendium wiedzy z dziedziny prawa
              oświatowego i organizacji szkolnictwa. Dowiecie się Państwo m.in.
              jak rejestrować różne typy placówek oświatowych, na jakich
              zasadach wprowadzać język polski do nauczania, jakie uniwersytety
              kształcą polonistów. Poznacie adresy szkół i placówek
              przedszkolnych.
            </StyledParagraph>
            <StyledParagraph>
              Informacje te zostały ujęte w następujących działach:
            </StyledParagraph>
            <StyledList>
              <li>
                <i>Klasy z polskim językiem nauczania;</i>
              </li>
              <li>
                <i>Filologia polska na Ukrainie;</i>
              </li>
              <li>
                <i>Nauczanie języka polskiego jako obcego;</i>
              </li>
              <li>
                <i>Pozaszkolne placówki oświatowe;</i>
              </li>
              <li>
                <i>Sobotnio-niedzielne szkoły;</i>
              </li>
              <li>
                <i>Przedszkola i grupy przedszkolne.</i>
              </li>
            </StyledList>
            <StyledParagraph>
              Na podstronie{" "}
              <strong>
                <i>Kontakt</i>
              </strong>{" "}
              zamieściliśmy numery telefonów i adresy poczty elektronicznej
              Zjednoczenia Nauczycieli Polskich na Ukrainie i Ogólnoukraińskiego
              Koordynacyjno-Metodycznego Centrum Nauczania Języka i Kultury
              Polskiej w Drohobyczu
            </StyledParagraph>
          </StyledDescription>
        </StyledContent>
      </StyledContainer>
    </Layout>
  );
};

export default ONas;
