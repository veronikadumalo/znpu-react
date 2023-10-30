import { Person } from ".prisma/client";

export interface NavigationLink {
  title: string;
  link: string;
  subpages?: SubpageLink[];
}
export interface SubpageLink {
  title: string;
  link: string;
}

export interface Post {
  title: string;
  subtitle: string;
  imageUrl: string;
  updatedAt: string;
  createdAt: string;
  description: string;
  id: string;
}

export interface Department {
  id: string;
  title: string;
  persons: Person[];
}
export interface DepartmentPerson {
  name: string;
  email?: string;
}
export interface LinkData {
  title: string;
  link: string;
}

export interface PageInfo {
  uaAddress: string;
  plAddress: string;
  phoneNuber: string;
  email: string;
  additionalEmail: string;
  facebookLink: string;
  uaPageTitle: string;
  plPageTitle: string;
  id: string;
}

export interface HomePageInfo {
  homeTitle: string;
  id: string;
  imageUrl: string;
  longDescription: string;
  pageTitle: string;
  shortDescription: string;
  type: string;
}
