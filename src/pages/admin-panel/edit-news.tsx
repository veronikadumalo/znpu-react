import styled from "styled-components";
import PanelLayout from "../../components/AdminPanel/PanelLayout";
import { useEffect, useState } from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import { setGlobalState } from "../../context/state";
import { Post } from "../../types/general";
import { NEWS } from "../../graphql/query/news";
import NewItem from "../../components/AdminPanel/EditNews/NewItem";
import { DELETE_NEWS } from "../../graphql/mutation/deleteNews";
import { useRouter } from "next/router";

const StyledContent = styled.div`
  padding: 30px;
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

export default function EditNews() {
  const router = useRouter();
  const [newsData, setNewsData] = useState<Post[] | []>([]);
  const [news, { loading, refetch }] = useLazyQuery(NEWS, {
    fetchPolicy: "cache-and-network",
    onCompleted: (data) => {
      if (!data) return;
      setNewsData(data.news);
    },
  });
  const [deleteNews, { loading: deleteNewsLoading }] = useMutation(
    DELETE_NEWS,
    {
      onCompleted: (data) => {
        if (!data) return;
        alert("Зміни збережено");
        refetch().then((result) => {
          if (!result) return;
          setNewsData(result.data.news);
        });
      },
    }
  );

  useEffect(() => {
    news();
  }, []);
  useEffect(() => {
    setGlobalState("isLoading", loading || deleteNewsLoading);
  }, [loading, deleteNewsLoading]);
  return (
    <PanelLayout pageTitle={"Edycja aktualności"}>
      <StyledContent>
        {newsData.map((item, i) => (
          <NewItem
            key={i}
            post={item}
            handleDeleteClick={(postId) =>
              deleteNews({ variables: { id: postId } })
            }
            handleEditClick={(postId) =>
              router.push(`/admin-panel/edit-post?postId=${postId}`)
            }
          />
        ))}
        <StyledButton onClick={() => router.push("/admin-panel/add-new-post")}>
          Dodaj nową aktuałność
        </StyledButton>
      </StyledContent>
    </PanelLayout>
  );
}
