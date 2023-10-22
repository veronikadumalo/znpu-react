import styled from "styled-components";
import Layout from "../components/Layout";
import { SubMenu } from "../components/SubMenu";
import { NAVIGATION } from "../data/navigation";
import { OLYMPIAD_TASKS } from "../data/teachingMaterial/olympiadTasks";
import FileLink from "../components/FileLink";

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

const StyledOlympiadContainer = styled.div`
  width: 100%;
  padding-bottom: 50px;
  @media (max-width: 700px) {
    padding-bottom: 30px;
  }
`;
const StyledOlympiadTitle = styled.h3`
  text-align: center;
  color: var(--primary);
  font-weight: 900;
  padding-bottom: 15px;
  @media (max-width: 700px) {
    font-size: 13px;
    padding-bottom: 5px;
  }
`;
const StyledOlympiadYears = styled.p`
  text-align: center;
  color: var(--primary);
  font-weight: 700;
  @media (max-width: 700px) {
    font-size: 12px;
  }
`;
const StyledOpympiadSubtitle = styled.p`
  color: var(--primary);
  font-weight: 700;
  padding-left: 15px;
  @media (max-width: 700px) {
    font-size: 12px;
  }
`;
const FileContainer = styled.div`
  margin: 25px 0;
  @media (max-width: 700px) {
    margin: 15px 0;
  }
`;

function OlympiadTasks() {
  return (
    <Layout>
      <StyledContainer>
        <SubMenu submenuItems={NAVIGATION[5].subpages} />
        <StyledContent>
          {OLYMPIAD_TASKS.map((item) => (
            <StyledOlympiadContainer key={item.title}>
              <StyledOlympiadTitle>{item.title}</StyledOlympiadTitle>
              <StyledOlympiadYears>{item.years}</StyledOlympiadYears>
              <FileContainer>
                {item.files.map((file) => {
                  console.log(file.link.length);
                  return (
                    <FileLink
                      key={file.link}
                      fileLink={file.link}
                      title={file.title}
                      isDisabled={!file.link.length}
                    />
                  );
                })}
              </FileContainer>
              <StyledOpympiadSubtitle>Ключі</StyledOpympiadSubtitle>
              <FileContainer>
                {item.keys.files.map((file) => (
                  <FileLink
                    key={file.link}
                    fileLink={file.link}
                    title={file.title}
                    isDisabled={!file.link.length}
                  />
                ))}
              </FileContainer>
            </StyledOlympiadContainer>
          ))}
        </StyledContent>
      </StyledContainer>
    </Layout>
  );
}

export default OlympiadTasks;
