import styled from "styled-components";
import { useState } from "react";
import ErrorAnimate from "./ErrorAnimate";

const Number = ({
  error,
  setError,
  isNumSelected,
  setIsNumSelected,
  isDiceSelected,
}) => {
  const arrNum = [1, 2, 3, 4, 5, 6];

  if (isNumSelected) {
    setError("");
  }

  // const numClick = (val) => {
  //   setIsNumSelected(val);
  console.log(isDiceSelected);
  // };
  return (
    <NumContainer>
      <Numbers>
        {error && <ErrorAnimate error={error} />}
        {/* isErrorActive={error !== "" || error === ""} */}
        {arrNum.map((val, ind) => (
          <Box
            onClick={() => setIsNumSelected(val)}
            isSelected={val === isNumSelected}
            key={ind}
          >
            {val}
          </Box>
        ))}
      </Numbers>
      <p>Select Number</p>
    </NumContainer>
  );
};

export default Number;

const NumContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: end;
`;
const Numbers = styled.div`
  display: flex;
  gap: 24px;
  position: relative;
`;

const Box = styled.div`
  border: 1px solid black;
  border-radius: 2px;
  /* background-color: transparent; */
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 72px;
  height: 72px;
  background-color: ${(props) => (props.isSelected ? "black" : "transparent")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  cursor: url("/images/pointinghand.svg"), pointer;
  border-radius: 2px;
`;
