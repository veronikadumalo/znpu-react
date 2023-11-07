import styled from "styled-components";
import Layout from "../components/Layout";
import { SubMenu } from "../components/SubMenu";
import { NAVIGATION } from "../data/navigation";
import PdfSlider from "../components/PdfSlider";
import FileLink from "../components/FileLink";
import { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { FILE_BY_SUBCATEGORY } from "../graphql/query/fileBySubcategory";
import { setGlobalState } from "../context/state";

const StyledContainer = styled.div`
  display: flex;
`;
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  @media (max-width: 700px) {
    padding: 0;
  }
`;

interface FileData {
  title: string;
  url: string;
  id: string;
  subcategoryId: string;
}

function PrawoUkrainskie() {
  const [file, setFile] = useState<FileData | undefined>(undefined);
  const [filesBySubcategory, { loading }] = useLazyQuery(FILE_BY_SUBCATEGORY, {
    onCompleted: (data) => {
      if (!data) return;
      if (data.filesBySubcategory[0]) {
        setFile(data.filesBySubcategory[0]);
      }
    },
  });
  useEffect(() => {
    filesBySubcategory({
      variables: { subcategoryId: "52aabdcb-00a5-4845-aefd-89ab27b64e97" },
    });
  }, []);
  useEffect(() => {
    setGlobalState("isLoading", loading);
  }, [loading]);
  return (
    <Layout>
      <StyledContainer>
        <SubMenu submenuItems={NAVIGATION[0].subpages} />
        <StyledContent>
          {file && (
            <>
              <PdfSlider pdfFile={file.url} />
              <FileLink fileLink={file.url} title={file.title} />
            </>
          )}
        </StyledContent>
      </StyledContainer>
    </Layout>
  );
}

export default PrawoUkrainskie;
