import styled from "styled-components";
import PanelLayout from "../../components/AdminPanel/PanelLayout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FileData } from "../../types/general";
import { useLazyQuery, useMutation } from "@apollo/client";
import { setGlobalState } from "../../context/state";
import { FILE_BY_SUBCATEGORY } from "../../graphql/query/fileBySubcategory";
import FileLink from "../../components/FileLink";
import trashIcon from "../../assets/images/trash-icon.svg";
import editIcon from "../../assets/images/edit-icon.png";
import Image from "next/image";
import { DELETE_FILE } from "../../graphql/mutation/deleteFile";

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 30px;
`;
const StyledButton = styled.button`
  margin-top: 30px;
  background-color: transparent;
  border: 1px solid black;
  border-radius: 3px;
  text-transform: uppercase;
  width: 300px;
  padding: 5px;
  cursor: pointer;
`;
const StyledFileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const StyledButtonContainer = styled.div`
  display: flex;
  gap: 25px;
`;
const StyledIconButton = styled.button`
  background-color: transparent;
  border: none;
  height: 20px;
  cursor: pointer;
`;

export default function Page() {
  const router = useRouter();
  const [subcategoryId, setSubcategoryId] = useState<string | undefined>(
    undefined
  );
  const [pageTitle, setPageTitle] = useState<string>("");
  const [files, setFiles] = useState<FileData[] | []>([]);
  const [filesBySubcategoryId, { loading }] = useLazyQuery(
    FILE_BY_SUBCATEGORY,
    {
      onCompleted: (data) => {
        setFiles(data.filesBySubcategory);
      },
      fetchPolicy: "network-only",
    }
  );
  const [deleteFile, { loading: deleteFileLoading }] = useMutation(
    DELETE_FILE,
    {
      onCompleted: (data) => {
        router.reload();
      },
    }
  );
  useEffect(() => {
    if (!router) return;
    const subcategoryId = router.query.subcategoryId;
    setSubcategoryId(String(subcategoryId));
    const pageTitle = router.query.title;
    setPageTitle(String(pageTitle));
  }, [router]);

  useEffect(() => {
    if (!subcategoryId) return;
    filesBySubcategoryId({
      variables: {
        subcategoryId,
      },
    });
  }, [subcategoryId]);

  useEffect(() => {
    setGlobalState("isLoading", loading || deleteFileLoading);
  }, [loading, deleteFileLoading]);

  const handleEditClick = (id: string) => {
    router.push(`/admin-panel/edit-file?fileid=${id}`);
  };
  const handleDeleteClick = (id: string) => {
    deleteFile({
      variables: {
        id: id,
      },
    });
  };
  return (
    <PanelLayout pageTitle={pageTitle}>
      <StyledContent>
        {files?.map((file) => (
          <StyledFileContainer key={file.id}>
            <FileLink title={file.title} fileLink={file.url} />
            <StyledButtonContainer>
              <StyledIconButton onClick={() => handleEditClick(file.id)}>
                <Image src={editIcon} alt="Edit" width={30} height={30} />
              </StyledIconButton>
              <StyledIconButton onClick={() => handleDeleteClick(file.id)}>
                <Image src={trashIcon} alt="Delete" width={30} height={30} />
              </StyledIconButton>
            </StyledButtonContainer>
          </StyledFileContainer>
        ))}
        <StyledButton
          onClick={() =>
            router.push(
              `/admin-panel/add-new-file?subcategoryId=${subcategoryId}&title=${pageTitle}`
            )
          }
        >
          Dodaj nowy plik
        </StyledButton>
      </StyledContent>
    </PanelLayout>
  );
}
