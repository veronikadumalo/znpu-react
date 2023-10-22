import styled from "styled-components";
import Layout from "../components/Layout";
import { SubMenu } from "../components/SubMenu";
import { NAVIGATION } from "../data/navigation";
import { LESSON_FOR_SECONDARY_SCHOOLS } from "../data/teachingMaterial/lessonForSecondarySchools";
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
const StyledList = styled.ul`
  width: 100%;
`;
const StyledListItem = styled.li`
  padding-bottom: 30px;
  &:last-child {
    padding: 0;
  }
  @media (max-width: 700px) {
    padding-bottom: 15px;
  }
`;
const StyledTitle = styled.h3`
  text-align: center;
  color: var(--primary);
  font-weight: 900;
  font-size: 20px;
  padding-bottom: 30px;
  @media (max-width: 700px) {
    font-size: 14px;
    padding-bottom: 15px;
  }
`;
const StyledBlockTitle = styled.h4`
  font-size: 18px;
  padding: 15px 0 15px 15px;
  @media (max-width: 700px) {
    font-size: 12px;
    padding: 8px 0 4px 8px;
  }
`;
const StyledBlock = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  padding: 10px;
  margin-bottom: 20px;
  &:last-child {
    margin: 10px;
  }
  @media (max-width: 700px) {
    margin-bottom: 10px;
  }
`;

function LessonForSecondarySchools() {
  return (
    <Layout>
      <StyledContainer>
        <SubMenu submenuItems={NAVIGATION[5].subpages} />
        <StyledContent>
          <StyledList>
            {LESSON_FOR_SECONDARY_SCHOOLS.map((item) => (
              <StyledListItem key={item.title}>
                <StyledTitle>{item.title}</StyledTitle>
                {item.blocks.map((block) => (
                  <StyledBlock key={block.blockTitle}>
                    <StyledBlockTitle>{block.blockTitle}</StyledBlockTitle>
                    {block.files.map((file) => (
                      <FileLink
                        key={file.title}
                        fileLink={file.link}
                        title={file.title}
                      />
                    ))}
                  </StyledBlock>
                ))}
              </StyledListItem>
            ))}
          </StyledList>
        </StyledContent>
      </StyledContainer>
    </Layout>
  );
}

export default LessonForSecondarySchools;
