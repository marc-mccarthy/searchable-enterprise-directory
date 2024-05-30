import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import topSecret from "../../images/top-secret.png";
import LoadingBar from "../LoadingBar/LoadingBar";
import SadBar from "../SadBar/SadBar";
import {
  ContentWrapper,
  DataCell,
  DataHeader,
  DataRow,
  DataTable,
  FilterWrapper,
  Form,
  Input,
  Label,
  LogoutButton,
  PageContainer,
  TopSecretIcon,
} from "./Home.styles";

const tableHeaders = [
  { label: "Name" },
  { label: "Phone Number" },
  { label: "Job Role" },
  { label: "Work Location" },
  { label: "Salary" },
];

function Home() {
  const navigate = useNavigate();
  const { employee_no } = useParams();
  const [employees, setEmployees] = useState([]);
  const [relevantEmployees, setRelevantEmployees] = useState([]);
  const [currentEmployee, setCurrentEmployee] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getEmployees = async () => {
      const response = await axios.get(`/directory/${employee_no}`);
      return response.data;
    };

    getEmployees().then((response) => {
      setEmployees(response);
      const current = response.filter(
        (employee) => Number(employee_no) === employee.employee_no
      );
      setCurrentEmployee(current);
    });
  }, [employee_no]);

  useEffect(() => {
    if (employees.length > 0) {
      setRelevantEmployees(employees);
    }
  }, [employees]);

  const fastSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearch(searchTerm);
    const filteredEmployees = employees.filter((employee) => {
      return (
        employee.name.toLowerCase().includes(searchTerm) ||
        employee.phone_number.includes(searchTerm) ||
        employee.job_role.toLowerCase().includes(searchTerm) ||
        employee.work_location.toLowerCase().includes(searchTerm)
      );
    });
    setRelevantEmployees(filteredEmployees);
  };

  return (
    <div>
      {!currentEmployee[0] ? (
        <LoadingBar />
      ) : (
        <PageContainer>
          <h2>
            <u>Viewable Employee Database</u>
          </h2>
          <h3>Current Employee: {currentEmployee[0].name}</h3>
          <Form>
            <ContentWrapper>
              <FilterWrapper>
                <Label htmlFor="search">
                  Search:
                  <Input
                    type="text"
                    name="search"
                    required
                    value={search}
                    onChange={fastSearch}
                  />
                </Label>
              </FilterWrapper>
            </ContentWrapper>
          </Form>
          {relevantEmployees.length === 0 ? (
            <SadBar />
          ) : (
            <ContentWrapper>
              <DataTable>
                <thead>
                  <DataRow>
                    {tableHeaders.map((header, index) => (
                      <DataHeader key={index}>{header.label}</DataHeader>
                    ))}
                  </DataRow>
                </thead>
                <tbody>
                  {relevantEmployees.map((employee, index) => (
                    <DataRow key={index}>
                      <DataCell>{employee.name}</DataCell>
                      <DataCell>{employee.phone_number}</DataCell>
                      <DataCell>{employee.job_role}</DataCell>
                      <DataCell>{employee.work_location}</DataCell>
                      {currentEmployee[0].employee_no === employee.employee_no ||
                      currentEmployee[0].access_level - employee.access_level ===
                        1 ||
                      currentEmployee[0].access_level === 2 ? (
                        <DataCell>
                          {employee.salary.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                          })}
                        </DataCell>
                      ) : (
                        <DataCell>
                          <TopSecretIcon src={topSecret} alt="top-secret" />
                        </DataCell>
                      )}
                    </DataRow>
                  ))}
                </tbody>
              </DataTable>
              <LogoutButton
                m={3}
                onClick={(event) => navigate("/login")}
                variant="contained"
              >
                Logout
              </LogoutButton>
            </ContentWrapper>
          )}
        </PageContainer>
      )}
    </div>
  );
}

export default Home;
