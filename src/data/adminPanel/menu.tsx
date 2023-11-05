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
];
