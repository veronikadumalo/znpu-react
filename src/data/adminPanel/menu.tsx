interface AdminPanelMenu {
  title: string;
  link: string;
  submenu?: SubmenuElement[];
}
interface SubmenuElement {
  title: string;
  link: string;
}
export const ADMIN_PANEL_MENU: AdminPanelMenu[] = [
  {
    title: "Головна сторінка",
    link: "/admin-panel/edit-homepage",
    submenu: [
      {
        title: "O nas",
        link: "/admin-panel/edit-about-us",
      },
      {
        title: "Oddziały znpwu",
        link: "/admin-panel/edit-departments",
      },
      {
        title: "Statut",
        link: "/admin-panel/edit-statute",
      },
      {
        title: "Natalia Tulasiewicz",
        link: "/admin-panel/edit-natalia-tulasiewicz",
      },
      {
        title: "Aktualności",
        link: "/admin-panel/edit-news",
      },
      {
        title: "Adaptacja budynku",
        link: "/admin-panel/edit-building-adaptation",
      },
      {
        title: "Remont budynku",
        link: "/admin-panel/edit-building-renovation",
      },
      {
        title: "Historia założenia",
        link: "/admin-panel/edit-founding-history",
      },
      {
        title: "Prawo ukraińskie",
        link: "/admin-panel/edit-ukrainian-law",
      },
    ],
  },
  {
    title: "Studia podyplomowe",
    link: "/admin-panel/edit-postgraduate-studies",
  },
  {
    title: "Dziedzictwo kulturowe",
    link: "/admin-panel/menu",
    submenu: [
      {
        title: "Muzeum Aleksandra Fredry",
        link: "/admin-panel/edit-muzeum-af",
      },
      {
        title: "Wystawa obrazów",
        link: "/admin-panel/edit-image-exhibition",
      },
      {
        title: "MUZEUM 'IZBA PAMIĘCI BRUNO SCHULZA'",
        link: "/admin-panel/edit-muzeum-bs",
      },
      {
        title: "SŁOWNIK LITERATÓW POLSKICH",
        link: "/admin-panel/edit-dictionary-of-polisg-writers",
      },
      {
        title: "CMENTARZ",
        link: "/admin-panel/edit-cmentary",
      },
    ],
  },
  {
    title: "Wydarzenia",
    link: "/admin-panel/menu",
    submenu: [
      {
        title: "Kursy",
        link: "/admin-panel/edit-events?eventType=course",
      },
      {
        title: "Konferencje",
        link: "/admin-panel/edit-events?eventType=conference",
      },
      {
        title: "Seminary",
        link: "/admin-panel/edit-events?eventType=seminar",
      },
      {
        title: "Olimpiady",
        link: "/admin-panel/edit-events?eventType=olympiad",
      },
      {
        title: "Dyktando",
        link: "/admin-panel/edit-events?eventType=dictation",
      },
    ],
  },
  {
    title: "Programy",
    link: "/admin-panel/menu",
    submenu: [
      {
        title: "Школи з класами польською мовою навчання",
        link: "/admin-panel/edit-file-list?subcategoryId=66e91f69a08bad60fe3d1158&title=Школи з класами польською мовою навчання",
      },
      {
        title: "Польська мова як рідна у школі з українською мовою навчання",
        link: "/admin-panel/edit-file-list?subcategoryId=66e91f69a08bad60fe3d1159&title=Польська мова як рідна у школі з українською мовою навчання",
      },
      {
        title: "Польська мова як друга іноземна",
        link: "/admin-panel/edit-file-list?subcategoryId=66e91f69a08bad60fe3d115a&title=Польська мова як друга іноземна",
      },
      {
        title: "Факультативні заняття з польської мови",
        link: "/admin-panel/edit-file-list?subcategoryId=66e91f69a08bad60fe3d115b&title=Факультативні заняття з польської мови",
      },
    ],
  },
  {
    title: "Materiały dydaktyczne",
    link: "/admin-panel/menu",
    submenu: [
      {
        title: "Podręczniki",
        link: "/admin-panel/edit-file-list?subcategoryId=66e91f69a08bad60fe3d115e&title=Podręczniki",
      },
      {
        title: "Prezentacje",
        link: "/admin-panel/edit-file-list?subcategoryId=66e91f69a08bad60fe3d115f&title=Prezentacje",
      },
      {
        title: "Scenariuszy uroczystości",
        link: "/admin-panel/edit-file-list?subcategoryId=66e91f69a08bad60fe3d1160&title=Scenariuszy uroczystości",
      },
      {
        title: "Календарно-тематичне планування",
        link: "/admin-panel/edit-file-list?subcategoryId=66e91f69a08bad60fe3d1161&title=Календарно-тематичне планування",
      },
      {
        title: "Збірник диктантів/переказів",
        link: "/admin-panel/edit-file-list?subcategoryId=66e91f69a08bad60fe3d1162&title=Збірник диктантів/переказів",
      },
    ],
  },
  {
    title: "Szkoły sobotnie",
    link: "/admin-panel/menu",
    submenu: [
      {
        title: "ПОЛОЖЕННЯ ПРО КУЛЬТУРНО- ОСВІТНІЙ ЗАКЛАД",
        link: "/admin-panel/edit-file-list?subcategoryId=66e91f69a08bad60fe3d1163&title=ПОЛОЖЕННЯ ПРО КУЛЬТУРНО- ОСВІТНІЙ ЗАКЛАД",
      },
      {
        title: "ЯК ЗАРЕЄСТРУВАТИ",
        link: "/admin-panel/edit-file-list?subcategoryId=66e91f69a08bad60fe3d1164&title=ЯК ЗАРЕЄСТРУВАТИ",
      },
      {
        title: "KONSPEKTY LEKCJI DLA SZKÓŁ SOBOTNICH",
        link: "/admin-panel/edit-file-list?subcategoryId=66e91f69a08bad60fe3d1165&title=KONSPEKTY LEKCJI DLA SZKÓŁ SOBOTNICH",
      },
      {
        title: "ПРОГРАМИ",
        link: "/admin-panel/edit-file-list?subcategoryId=66e91f69a08bad60fe3d1166&title=ПРОГРАМИ",
      },
    ],
  },
];
