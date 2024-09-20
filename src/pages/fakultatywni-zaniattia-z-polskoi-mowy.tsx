import styled from "styled-components";
import Layout from "../components/Layout";
import { SubMenu } from "../components/SubMenu";
import { NAVIGATION } from "../data/navigation";
import FileLink from "../components/FileLink";
import { POLISH_LANGUAGE_CLASSES } from "../data/programs/polishLanguageClasses";
import { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { FILE_BY_SUBCATEGORY } from "../graphql/query/fileBySubcategory";
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
`;

function PolishLanguageClasses() {
  const [files, setFiles] = useState<FileData[] | []>([]);
  const [filesBySubcategory, { loading }] = useLazyQuery(FILE_BY_SUBCATEGORY, {
    onCompleted: (data) => {
      const newFiles = [...data.filesBySubcategory].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      setFiles(newFiles);
    },
  });
  useEffect(() => {
    filesBySubcategory({
      variables: { subcategoryId: "66e91f69a08bad60fe3d115b" },
    });
  }, []);
  useEffect(() => {
    setGlobalState("isLoading", loading);
  }, [loading]);
  return (
    <Layout>
      <StyledContainer>
        <SubMenu submenuItems={NAVIGATION[4].subpages} />
        <StyledContent>
          {files.map(({ title, url }) => (
            <FileLink key={title} fileLink={url} title={title} />
          ))}
        </StyledContent>
      </StyledContainer>
    </Layout>
  );
}

export default PolishLanguageClasses;
