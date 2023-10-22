import { ReactNode } from "react";
import NextHead from "./NextHead";
// import { Merriweather } from "next/font/google";
// const merriweather = Merriweather({
//   weight: ["300", "400", "700", "900"],
//   style: ["normal", "italic"],
//   subsets: ["latin", "cyrillic"],
// });

interface PageWrapperProps {
  children: ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <>
      <NextHead />
      <main>{children}</main>
    </>
  );
}
