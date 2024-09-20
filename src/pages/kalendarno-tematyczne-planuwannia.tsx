import styled from "styled-components";
import FileLink from "../components/FileLink";
import Layout from "../components/Layout";
import { SubMenu } from "../components/SubMenu";
import { NAVIGATION } from "../data/navigation";
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
  @media (max-width: 700px) {
    padding: 0;
  }
`;

function CalendarAndThemePlanning() {
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
      variables: { subcategoryId: "66e91f69a08bad60fe3d1161" },
    });
  }, []);
  useEffect(() => {
    setGlobalState("isLoading", loading);
  }, [loading]);
  return (
    <Layout>
      <StyledContainer>
        <SubMenu submenuItems={NAVIGATION[5].subpages} />
        <StyledContent>
          {files.map((file) => (
            <FileLink key={file.title} fileLink={file.url} title={file.title} />
          ))}
        </StyledContent>
      </StyledContainer>
    </Layout>
  );
}

export default CalendarAndThemePlanning;
