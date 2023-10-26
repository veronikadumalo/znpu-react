import { ReactNode } from "react";
import styled from "styled-components";
import PageWrapper from "../PageWrapper";
import { useGlobalState } from "../../context/state";
import LoadingAnimation from "../LoadingAnimation";
import { useRouter } from "next/router";
import backIcon from "../../assets/images/back-icon.png";
import Image from "next/image";

const StyledLayout = styled.div`
  padding: 40px;
`;
const StyledHeadinContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
const StyledTitle = styled.h1`
  font-size: 18px;
  text-transform: uppercase;
  padding-bottom: 5px;
`;
const StyledIconButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
interface PanelLayoutProps {
  children: ReactNode;
  pageTitle: String;
}
export default function PanelLayout({ children, pageTitle }: PanelLayoutProps) {
  const [isLoading] = useGlobalState("isLoading");
  const router = useRouter();
  return (
    <PageWrapper>
      <StyledLayout>
        <StyledHeadinContainer>
          <StyledIconButton onClick={() => router.back()}>
            <Image src={backIcon} alt="Back" width={30} height={30} />
          </StyledIconButton>
          <StyledTitle>{pageTitle}</StyledTitle>
        </StyledHeadinContainer>
        {children}
      </StyledLayout>
      {isLoading && <LoadingAnimation />}
    </PageWrapper>
  );
}
