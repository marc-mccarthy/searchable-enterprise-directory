import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 1450px) {
    margin-left: 10%;
    margin-right: 10%;
  }
`;

export const ContentWrapper = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 1450px) {
    margin-left: 10%;
    margin-right: 10%;
  }
`;

export const DataTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const DataRow = styled.tr`
  background-color: #f3f3f3;
`;

export const DataHeader = styled.th`
  border: 1px solid black;
  padding: 10px;
`;

export const DataCell = styled.td`
  border: 1px solid black;
  padding: 10px;
`;

export const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: medium;
`;

export const Label = styled.label`
  color: red;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  height: 2.5rem;
  border: 0.5px solid blue;
  border-radius: 10px;
  width: 100%;
  padding: 0.7rem;
  font-size: medium;
`;

export const LogoutButton = styled.button`
  width: 7rem;
  height: 2rem;
  cursor: pointer;
  border-radius: 8px;
  box-shadow: 0 6px #969696;
  color: #ffffff;
  background-color: red;
  border: 1px solid #000000;
  font-weight: bold;
  margin-top: 1rem;
  &:active {
    transform: scale(0.96);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.25);
  }
`;

export const TopSecretIcon = styled.img`
  width: 2em;
  height: 2.5em;
`;
