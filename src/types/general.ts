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
  description: string;
  image: string;
  date: string;
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
