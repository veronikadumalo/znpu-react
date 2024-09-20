import styled from "styled-components";
import Layout from "../components/Layout";
import { SubMenu } from "../components/SubMenu";
import { NAVIGATION } from "../data/navigation";
import PdfSlider from "../components/PdfSlider";
import FileLink from "../components/FileLink";
import { useEffect, useState } from "react";
import { FileData } from "../types/general";
import { useLazyQuery } from "@apollo/client";
import { FILE_BY_SUBCATEGORY } from "../graphql/query/fileBySubcategory";
import { setGlobalState } from "../context/state";
import { FILES_BY_SUBCATEGORY_NAME } from "../graphql/query/fileBySubcategoryName";

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

function WystawaObrazow() {
  const [file, setFile] = useState<FileData | undefined>(undefined);
  const [filesBySubcategoryName, { loading }] = useLazyQuery(
    FILES_BY_SUBCATEGORY_NAME,
    {
      onCompleted: (data) => {
        const newFile = data.filesBySubcategoryName[0];
        setFile(newFile);
      },
    }
  );
  useEffect(() => {
    filesBySubcategoryName({
      variables: { subcategoryName: "WYSTAWA OBRAZÓW" },
    });
  }, []);
  useEffect(() => {
    setGlobalState("isLoading", loading);
  }, [loading]);
  return (
    <Layout>
      <StyledContainer>
        <SubMenu submenuItems={NAVIGATION[2].subpages} />
        <StyledContent>
          {file && <PdfSlider pdfFile={file?.url} />}
          {file && <FileLink fileLink={file?.url} title={file?.title} />}
        </StyledContent>
      </StyledContainer>
    </Layout>
  );
}

export default WystawaObrazow;
