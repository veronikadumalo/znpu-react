import styled from "styled-components";
import Layout from "../components/Layout";
import { SubMenu } from "../components/SubMenu";
import { NAVIGATION } from "../data/navigation";
import { DEPARTMENTS } from "../data/oddzialy";
import { Link } from "react-router-dom";

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
const StyledTitle = styled.h2`
  text-align: center;
  font-style: italic;
  max-width: 70%;
  margin: 0 auto;
  padding-bottom: 30px;
  @media (max-width: 700px) {
    padding-bottom: 10px;
  }
`;
const StyledList = styled.ul`
  width: 100%;
`;
const StyledDepartmentContainer = styled.li`
  padding: 20px 5px;
  border-bottom: 1px solid black;
  &:last-child {
    border-bottom: none;
  }
`;
const StyledDeparmentTitle = styled.h4`
  font-size: 18px;
  margin-bottom: 10px;
  color: var(--primary);
  @media (max-width: 700px) {
    font-size: 16px;
  }
`;
const StyledEmailLink = styled(Link)`
  text-decoration: none;
  color: var(--black);
  font-weight: 700;
  &:hover {
    text-decoration: underline;
  }
`;
const StyledDepartmentPerson = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  @media (max-width: 700px) {
    display: block;
    font-size: 14px;
    padding: 5px 0;
  }
`;
const StyledPersonName = styled.p``;

const Departments = () => {
  return (
    <Layout>
      <StyledContainer>
        <SubMenu submenuItems={NAVIGATION[0].subpages} />
        <StyledContent>
          <StyledTitle>Oddziały ZNPwU</StyledTitle>
          <StyledList>
            {DEPARTMENTS.map((department) => (
              <StyledDepartmentContainer key={department.title}>
                <StyledDeparmentTitle>{department.title}</StyledDeparmentTitle>
                {department.persons.map((person) => (
                  <StyledDepartmentPerson key={person.name}>
                    <StyledPersonName>{person.name}</StyledPersonName>
                    {person.email && (
                      <StyledEmailLink to={`mailto:${person.email}`}>
                        {person.email}
                      </StyledEmailLink>
                    )}
                  </StyledDepartmentPerson>
                ))}
              </StyledDepartmentContainer>
            ))}
          </StyledList>
        </StyledContent>
      </StyledContainer>
    </Layout>
  );
};

export default Departments;