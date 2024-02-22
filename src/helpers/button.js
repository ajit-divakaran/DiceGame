import styled from "styled-components";
export const Button = styled.div`
  width: 100px;
  font-weight: 600;
  padding: 10px 74px;
  background: black;
  color: white;
  font-family: var(--font-all);
  border-radius: 5px;
  border: 1px solid black;
  transition: background-color 0.4s ease-out, color 0.5s ease-out;

  &:hover {
    cursor: pointer;
    background-color: transparent;
    color: black;
  }
`;
