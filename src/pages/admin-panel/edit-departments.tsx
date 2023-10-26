import styled from "styled-components";
import PanelLayout from "../../components/AdminPanel/PanelLayout";
import { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { DEPARTAMENTS_QUERY } from "../../graphql/query/departaments";
import { setGlobalState } from "../../context/state";
import { Department } from "../../types/general";
import DepartmentItem from "../../components/AdminPanel/EditDepartments/DepartmentItem";
import AddNewDepartment from "../../components/AdminPanel/EditDepartments/AddNewDepartment";

const StyledContent = styled.div`
  padding: 30px 0;
`;

export default function EditDepartments() {
  const [departmentsData, setDepartmentsData] = useState<Department[] | []>([]);
  const [departments, { loading }] = useLazyQuery(DEPARTAMENTS_QUERY, {
    onCompleted: (data) => {
      if (!data) return;
      setDepartmentsData(data.deparments);
    },
    onError: () => setGlobalState("isError", true),
  });

  useEffect(() => {
    departments();
  }, []);

  useEffect(() => {
    setGlobalState("isLoading", loading);
  }, [loading]);
  return (
    <PanelLayout pageTitle={"Edycja oddziałów"}>
      <StyledContent>
        {departmentsData?.map((item) => (
          <DepartmentItem key={item.id} department={item} />
        ))}
        <AddNewDepartment />
      </StyledContent>
    </PanelLayout>
  );
}
