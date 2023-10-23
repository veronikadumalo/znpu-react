import { ReactNode } from "react";
import styled from "styled-components";
import PageWrapper from "../PageWrapper";
import { useGlobalState } from "../../context/state";
import LoadingAnimation from "../LoadingAnimation";

const StyledLayout = styled.div``;
interface PanelLayoutProps {
  children: ReactNode;
}
export default function PanelLayout({ children }: PanelLayoutProps) {
  const [isLoading] = useGlobalState("isLoading");
  return (
    <PageWrapper>
      <StyledLayout>{children}</StyledLayout>
      {isLoading && <LoadingAnimation />}
    </PageWrapper>
  );
}
