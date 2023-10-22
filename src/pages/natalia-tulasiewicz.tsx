import styled from "styled-components";
import Layout from "../components/Layout";
import { SubMenu } from "../components/SubMenu";
import { NAVIGATION } from "../data/navigation";
import nataliaTulasiewiczImage from "../assets/images/natalia-tulasiewicz.png";
import Image from "next/image";

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
const StyledImage = styled(Image)`
  max-width: 300px;
`;
const StyledDescription = styled.p`
  text-align: justify;
  font-size: 15px;
  line-height: 20px;
  padding-top: 30px;
`;

function NataliaTulasiewicz() {
  return (
    <Layout>
      <StyledContainer>
        <SubMenu submenuItems={NAVIGATION[0].subpages} />
        <StyledContent>
          <StyledTitle>
            «Wybrał mnie pan do cudownej misji miłości w świecie» dla której
            zycie oddać warto, a cóż dopiero talent i wszystkie siły
          </StyledTitle>
          <StyledImage
            src={nataliaTulasiewiczImage}
            alt="Natalia Tulaśiewicz"
          />
          <StyledDescription>
            <strong>Natalia Tułasiewicz</strong> urodziła się 9 kwietnia 1906
            roku w Rzeszowie. Jej rodzina pochodziła z Krakowa. Od 1913 roku
            uczęszczała do Szkoły Podstawowej w Kętach, a od 1917 roku była
            uczennicą Prywatnego Gimnazjum Żeńskiego w Krakowie. W 1921 roku
            przeniosła się wraz z rodziną do Poznania. Tam rozpoczęła naukę w
            Gimnazjum Sióstr Urszulanek Unii Rzymskiej. Ukończyła je w 1926
            roku. Po maturze studiowała polonistykę i muzykologię na
            Uniwersytecie Poznańskim. Studia ukończyła w 1931 roku. W 1932 roku
            obroniła pracę ,,Mickiewicz a muzyka” i uzyskała tytuł magistra
            filologii polskiej. Na wszystkich etapach edukacyjnych dała się
            poznać jako ambitna, zdolna uczennica. Fascynowała się literaturą,
            filozofią, teologią, muzyką i teatrem. Żywo angażowała się w życie
            kulturalne poprzez uczestnictwo w koncertach i wystawach. Pisała
            wiersze i prowadziła dziennik. Równolegle pogłębiała swoje życie
            duchowe. Brała udział w dniach skupienia i rekolekcjach.
            Interesowała się ideą apostolstwa ludzi świeckich.
            <br /> Na temat swych pełnych pasji dążeń i wyboru drogi życiowej
            napisała:
            <i>
              ,,Chcę wysługiwać sobie świętość na ziemi codziennym wysiłkiem
              dnia. Nie oddzielam szarego życia od ideałów, ku którym podążam.
              Wszystko: praca, nauka, sen, przyjemność, wszystko wciągam w swój
              program doskonalenia się.”
            </i>
            W latach 1931–1937 była nauczycielką szkół poznańskich - prywatnej
            Szkoły koedukacyjnej pw. św. Kazimierza i Gimnazjum Sióstr
            Urszulanek Unii Rzymskiej.
            <br /> W 1938 roku udała się w podróż do Włoch i wzięła udział w
            uroczystościach kanonizacyjnych Andrzeja Boboli. <br />
            Planowała doktorat o Karolu Hubercie Rostworowskim. Jej zamiary
            pokrzyżował wybuch II wojny światowej.
            <br /> Po wysiedleniu wraz z całą rodziną z Poznania w 1939 roku
            zamieszkała u krewnych w Krakowie. Opiekowała się rodzicami i
            wspierała materialnie bliższych oraz dalszych krewnych. Mimo
            grożących ze strony okupanta poważnych konsekwencji uczestniczyła w
            tajnym nauczaniu dzieci. Organizowała spotkania, na których
            dyskutowano o literaturze. Uczyła swych podopiecznych pieśni
            religijnych i patriotycznych. Prowadziła adoracje wielkopostne i
            wieczorki poezji. Brała też udział w tak zwanych objazdach
            edukacyjnych, podczas których wygłaszała referaty, organizowała
            rekolekcje duchowe i czuwała nad wszechstronnym rozwojem swych
            uczennic zgodnie z przyjętym przesłaniem:
            <br />
            <i>
              ,,Chcę […] rozbudzić w nich zamiłowanie do wiedzy, dopomóc […], by
              ich wojna nie wyjałowiła z poczucia piękna i dobra”.
            </i>
            <br />
            Działała w ruchu oporu. Z inicjatywy metropolity krakowskiego Adama
            Sapiehy zaangażowała się w pracę misyjną wśród robotników
            przymusowych. W 1943 roku wyjechała do Hanoweru jako tajny
            pełnomocnik – emisariusz Rządu Londyńskiego i świecki apostoł w
            ramach Wydziału Duszpasterskiego konspiracyjnej organizacji
            „Zachód”. Pracowała niewolniczo w fabryce i jednocześnie pełniła
            posługę religijno - społeczno-oświatową wśród robotników. Swoje
            zadanie traktowała jako życiowe powołanie. 14 sierpnia 1943 roku,
            jeszcze przed wyjazdem do III Rzeszy, Zanotowała w dzienniku:{" "}
            <i>
              „Mam odwagę być świętą (…) tylko świętość jest najpełniejszą
              miłością, więc nie tylko chcę, ale muszę być świętą, nowoczesna
              świętą, teocentryczną humanistką! To jest meta, do której jawnie i
              odważnie się przyznaję. Są dziś ludzie, którzy za wszelką cenę
              chcą być dyktatorami, są inni, co chcą być multimilionerami,
              królami nafty, smalcu, książętami prasy, radia, filmu i telewizji.
              I nikt im się nie dziwi. Ja chcę o wiele mniej i o wiele
              jednocześnie więcej. I niech się dziwi, kto chce…”
            </i>
            <br /> Po ośmiu miesiącach wytężonej pracy, na wiosnę 1944 roku,
            została zdekonspirowana. przez nieostrożnego kuriera z Polski. Przez
            pół roku była więziona w Hanowerze i w Kolonii. Przeszła brutalne
            śledztwo. Następnie z wyrokiem śmierci została wysłana do
            niemieckiego obozu koncentracyjnego w Ravensbrück (numer 75188).
            Wycieńczona ciężką fizyczną pracą, gruźlicą, głodem, nie ustawała w
            misji edukacyjnej i ewangelizacyjnej. Głosiła katechezy, nauczała,
            przygotowywała młode dziewczyny do tak zwanej małej matury. Z pasją
            wykładała polską literaturę i historię. Organizowała wieczory
            poetyckie. Prowadziła nabożeństwa.
            <br /> W Wielki Piątek 30 marca 1945 roku, podczas ostatniej
            obozowej selekcji, została zakwalifikowana do stracenia. 31 marca
            1945 roku zginęła w komorze gazowej. Jej spopielone w krematorium
            prochy spoczęły najprawdopodobniej w obozowym stawie.
            <br /> 13 czerwca 1999 roku w Warszawie papież Jan Paweł II
            beatyfikował Natalię Tułasiewicz wraz ze 108 męczennikami II wojny
            światowej. Ich święto patronalne przypada 12 czerwca.
            <br /> Przemyślenia, listy i zapiski Natalii Tułasiewicz wydano
            pośmiertnie w kilku tomach: ,,Droga do miłości”, ,, Przeciw
            barbarzyństwu – listy, dzienniki, wspomnienia”, ,, Poprzez ziemię
            ukochałam niebo”, ,,Być poetką życia. Zapiski z lat 1938-1943”.
            <br />
            Postać błogosławionej przybliża praca Jacka Hadrysia i Barbary
            Judkowiak ,,Wierność łasce i Słowu. Błogosławiona Natalia
            Tułasiewicz”.
          </StyledDescription>
        </StyledContent>
      </StyledContainer>
    </Layout>
  );
}
export default NataliaTulasiewicz;
