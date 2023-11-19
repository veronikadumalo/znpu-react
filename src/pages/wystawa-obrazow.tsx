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
  const [filesBySubcategory, { loading }] = useLazyQuery(FILE_BY_SUBCATEGORY, {
    onCompleted: (data) => {
      const newFile = data.filesBySubcategory[0];
      setFile(newFile);
    },
  });
  useEffect(() => {
    filesBySubcategory({
      variables: { subcategoryId: "97e5b88e-8c5a-492a-9350-bcdcb3925ecf" },
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
