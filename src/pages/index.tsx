import Layout from "../components/Layout";
import styled from "styled-components";
import { SubMenu } from "../components/SubMenu";
import { NAVIGATION } from "../data/navigation";
import testImage from "../assets/images/test-image.png";
import nataliaTulasiewiczImage from "../assets/images/natalia-tulasiewicz.png";
import { NewPost } from "../components/NewPost";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { NEWS } from "../graphql/query/news";
import { Post } from "../types/general";
import { setGlobalState } from "../context/state";

const StyledContent = styled.div`
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;

const StyledAboutUsContainer = styled.div`
  border: 1px solid var(--grey);
  padding: 20px;
  min-height: 800px;
  @media (max-width: 700px) {
    min-height: auto;
  }
`;

const StyledSectionTitle = styled.h4`
  text-align: center;
  font-size: 20px;
  text-transform: uppercase;
  @media (max-width: 700px) {
    padding-bottom: 10px;
    font-size: 18px;
  }
`;

const StyledGirlContainer = styled.div`
  border: 1px solid var(--grey);
  padding: 20px 15px;
  min-height: 800px;
  @media (max-width: 700px) {
    min-height: auto;
  }
`;

const StyledNewsContainer = styled.div`
  border: 1px solid var(--grey);
  padding: 20px 15px;
  min-height: 800px;
`;

const StyledAboutUsImage = styled(Image)`
  height: auto;
  width: 100%;
  padding: 20px 30px;
  @media (max-width: 700px) {
    height: 100px;
    width: 100px;
    padding: 0px;
    padding-top: 5px;
    padding-right: 10px;
  }
`;

const StyledDescription = styled.p`
  font-size: 14px;
  text-align: justify;
  @media (max-width: 700px) {
    max-height: 137px;
    overflow: hidden;
    font-size: 12px;
  }
`;
const StyledMoreLink = styled(Link)`
  color: var(--black);
  text-align: center;
  display: block;
  width: 100%;
  font-weight: 700;
  margin-top: 20px;
`;

const StyledGirlTitle = styled.h4`
  font-style: italic;
  text-align: center;
  font-size: 18px;
  line-height: 25px;
  font-weight: 900;
  @media (max-width: 700px) {
    font-size: 14px;
    line-height: 20px;
  }
`;
const StyledImageContainer = styled.div`
  @media (max-width: 700px) {
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
const StyledGirlImage = styled(Image)`
  height: auto;
  width: 100%;
  padding: 20px 40px;
  @media (max-width: 700px) {
    max-height: 200px;
    width: auto;
    padding: 20px 0;
    text-align: center;
  }
`;
const StyledSectionContent = styled.div`
  @media (max-width: 700px) {
    display: flex;
  }
`;

export default function Page() {
  const [newsData, setNewsData] = useState<Post[] | []>([]);
  const [news, { loading }] = useLazyQuery(NEWS, {
    onCompleted: (data) => {
      if (!data) return;
      setNewsData(data.news.slice(0, 4));
    },
  });
  useEffect(() => {
    news();
  }, []);
  useEffect(() => {
    setGlobalState("isLoading", loading);
  }, [loading]);
  return (
    <Layout>
      <StyledContent>
        <SubMenu submenuItems={NAVIGATION[0].subpages} />
        <StyledAboutUsContainer>
          <StyledSectionTitle>o nas</StyledSectionTitle>
          <StyledSectionContent>
            <StyledAboutUsImage src={testImage} alt="O nas" />
            <StyledDescription>
              Zrzeszamy nauczycieli języka polskiego i przedmiotów nauczanych po
              polsku w przedszkolach, szkołach średnich, wyższych i punktach
              pozaszkolnych. Popularyzujemy wiedzę o polskiej kulturze i
              historii. Pomagamy podnosić kwalifikacje nauczycieli, tworzyć
              programy nauczania. Opracowujemy i zaopatrujemy szkoły w
              podręczniki i pomoce szkolne. Udzielamy pomocy metodycznej i
              dydaktycznej swoim członkom, przeprowadzamy konferencje
              naukowo-praktyczne, seminaria, szkolenia i staże, a także obozy i
              wczasy, festiwale, konkursy, olimpiady przedmiotowe, kongresy i
              zjazdy z udziałem ekspertów z kraju i zagranicy. Wysyłamy także
              dzieci, młodzież i osoby dorosłe na staże w wyższych,
              specjalistycznych i średnich placówkach oświatowych, wspieramy
              również inne formy nauki na Ukrainie i poza jej granicami.
              Publikujemy wybitne prace zagranicznych i miejscowych ekspertów w
              zakresie oświaty, okazujemy materialną i metodyczną pomoc
              placówkom oświatowym. Prowadzimy wymianę doświadczeń między
              nauczycielami z Polski, Ukrainy i innych państw.
            </StyledDescription>
          </StyledSectionContent>
          <StyledMoreLink href="/o-nas">więcej {`  >`}</StyledMoreLink>
        </StyledAboutUsContainer>
        <StyledGirlContainer>
          <StyledGirlTitle>
            «Wybrał mnie pan do cudownej misji miłości w świecie» dla której
            zycie oddać warto, a cóż dopiero talent i wszystkie siły
          </StyledGirlTitle>
          <StyledImageContainer>
            <StyledGirlImage
              src={nataliaTulasiewiczImage}
              alt="Natalia Tulasiewicz"
            />
          </StyledImageContainer>
          <StyledDescription>
            Natalia Tułasiewicz urodziła się 9 kwietnia 1906 roku w Rzeszowie.
             Jej rodzina pochodziła z Krakowa. Od 1913 roku uczęszczała do
            Szkoły Podstawowej w Kętach, a od 1917 roku była uczennicą
            Prywatnego Gimnazjum Żeńskiego w Krakowie. W 1921 roku przeniosła
            się wraz z rodziną do Poznania. Tam rozpoczęła naukę w
            Gimnazjum Sióstr Urszulanek Unii Rzymskiej. Ukończyła je w 1926
            roku. Po maturze studiowała polonistykę i muzykologię na
            Uniwersytecie Poznańskim. Studia ukończyła w 1931 roku. W 1932 roku
            obroniła pracę ,,Mickiewicz a muzyka” i uzyskała tytuł magistra
            filologii polskiej. Na wszystkich etapach edukacyjnych dała się
            poznać jako ambitna, zdolna uczennica....
          </StyledDescription>
          <StyledMoreLink href="/natalia-tulasiewicz">
            więcej {`  >`}
          </StyledMoreLink>
        </StyledGirlContainer>
        <StyledNewsContainer>
          <StyledSectionTitle>aktualności</StyledSectionTitle>
          <div>
            {newsData?.map((post, i) => (
              <NewPost post={post} key={i} />
            ))}
          </div>
          <StyledMoreLink href="/aktualnosci">
            wszystkie aktualności {`  >`}
          </StyledMoreLink>
        </StyledNewsContainer>
      </StyledContent>
    </Layout>
  );
}
