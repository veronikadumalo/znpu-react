import styled from "styled-components";
import Layout from "../components/Layout";
import { SubMenu } from "../components/SubMenu";
import { NAVIGATION } from "../data/navigation";
import PdfSlider from "../components/PdfSlider";
import FileLink from "../components/FileLink";
import { useLazyQuery } from "@apollo/client";
import { FILE_BY_SUBCATEGORY } from "../graphql/query/fileBySubcategory";
import { useEffect, useState } from "react";
import { FileData } from "../types/general";
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

function Cmentarz() {
  const [file, setFile] = useState<FileData | undefined>(undefined);
  const [filesBySubcategory, { loading }] = useLazyQuery(FILE_BY_SUBCATEGORY, {
    onCompleted: (data) => {
      const newFile = data.filesBySubcategory[0];
      setFile(newFile);
    },
  });
  useEffect(() => {
    filesBySubcategory({
      variables: { subcategoryId: "b704e3fa-6a4d-4c8b-a0b5-0bcb9f04566d" },
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

export default Cmentarz;
