import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Home from "./views/Home";
import GlobalStyle from "./styles/GlobalStyle";
import StudiaPodyplomowe from "./views/StudiaPodyplomowe";
import DolaczDoNas from "./views/DolaczDoNas";
import ONas from "./views/ONas";
import NataliaTulasiewicz from "./views/NataliaTulasiewicz";
import Aktualnosci from "./views/Aktualnosci";
import Departments from "./views/Departments";
import Statute from "./views/Statute";
import Muzeum from "./views/Muzeum";
import WystawaObrazow from "./views/WystawaObrazow";
import BrunoSchulz from "./views/BrunoSchulz";
import Slownik from "./views/Slownik";
import Cmentarz from "./views/Cmentarz";
import Kursy from "./views/Kursy";
import Seminaria from "./views/Seminaria";
import Olimpiady from "./views/Olimpiady";
import Dyktando from "./views/Dyktando";
import Konferencje from "./views/Konferencje";
import PolishSchool from "./views/PolishSchool";
import UkrainianSchool from "./views/UkrainianSchool";
import PolishLanguage from "./views/PolishLanguage";
import PolishLanguageClasses from "./views/PolishLanguageClasses";
import LessonForSecondarySchools from "./views/LessonForSecondarySchools";
import OlympiadTasks from "./views/OlympiadTasks";
import Workbooks from "./views/Workbooks";
import LessonForSaturdaySchools from "./views/LessonForSaturdaySchools";
import Presentations from "./views/Presentations";
import CalendarAndThemePlanning from "./views/CalendarAndThemePlanning";
import CollectionOfDictations from "./views/CollectionOfDictations";
import Regulations from "./views/Regulations";
import HowToRegister from "./views/HowToRegister";
import Programs from "./views/Programs";
import ScenariosOfCelebrations from "./views/ScenariosOfCelebrations";
import EducationalInstitutions from "./views/EducationalInstitutions";

const router = createHashRouter([
  {
    path: "/znpu-react",
    element: <Home />,
  },
  {
    path: "/o-nas",
    element: <ONas />,
  },
  {
    path: "/oddzialy-znpwu",
    element: <Departments />,
  },
  {
    path: "/statut",
    element: <Statute />,
  },
  {
    path: "/natalia-tulasiewicz",
    element: <NataliaTulasiewicz />,
  },
  {
    path: "/aktualnosci",
    element: <Aktualnosci />,
  },
  {
    path: "/studia-podyplomowe",
    element: <StudiaPodyplomowe />,
  },
  {
    path: "/muzeum",
    element: <Muzeum />,
  },
  {
    path: "/wystawa-obrazow",
    element: <WystawaObrazow />,
  },
  {
    path: "/muzeum-izba-pamieci-bruno-schulza",
    element: <BrunoSchulz />,
  },
  {
    path: "/slownik-literatow-polskich",
    element: <Slownik />,
  },
  {
    path: "/cmentarz",
    element: <Cmentarz />,
  },
  {
    path: "/kursy",
    element: <Kursy />,
  },
  {
    path: "/konferencje",
    element: <Konferencje />,
  },
  {
    path: "/seminaria",
    element: <Seminaria />,
  },
  {
    path: "/olimpiady",
    element: <Olimpiady />,
  },
  {
    path: "/dyktando",
    element: <Dyktando />,
  },
  {
    path: "/szkoly-z-klasamy-polskoju-mowoju-nawczannia",
    element: <PolishSchool />,
  },
  {
    path: "/szkoly-z-klasamy-ukrainskoju-mowoju-nawczannia",
    element: <UkrainianSchool />,
  },
  {
    path: "/polska-mowa-jak-druha-inozemna",
    element: <PolishLanguage />,
  },
  {
    path: "/fakultatywni-zaniattia-z-polskoi-mowy",
    element: <PolishLanguageClasses />,
  },
  {
    path: "/scenariuszy-uroczystosci",
    element: <ScenariosOfCelebrations />,
  },
  {
    path: "/konspekty-lekcji-dla-szkol-srednich",
    element: <LessonForSecondarySchools />,
  },
  {
    path: "/zadania-do-olimpiady",
    element: <OlympiadTasks />,
  },
  {
    path: "/podreczniki",
    element: <Workbooks />,
  },
  {
    path: "/konspekty-lekcji-dla-szkol-sobotnich",
    element: <LessonForSaturdaySchools />,
  },
  {
    path: "/prezentacje",
    element: <Presentations />,
  },
  {
    path: "/kalendarno-tematyczne-planuwannia",
    element: <CalendarAndThemePlanning />,
  },
  {
    path: "/zbirnyk-dyktantiw",
    element: <CollectionOfDictations />,
  },
  {
    path: "/polozennia-pro-kulturu",
    element: <Regulations />,
  },
  {
    path: "/jak-zarejestruwatysja",
    element: <HowToRegister />,
  },
  {
    path: "/programy",
    element: <Programs />,
  },
  {
    path: "/placowki-oswiatowe",
    element: <EducationalInstitutions />,
  },
  {
    path: "/dolacz-do-nas",
    element: <DolaczDoNas />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <GlobalStyle />
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
