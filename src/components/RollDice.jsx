// import { useState } from "react";
import styled from "styled-components";
const RollDice = ({ isDiceSelected, DiceIsClicked }) => {
  return (
    <RoleContainer>
      <div onClick={DiceIsClicked}>
        <img
          style={{ width: "150px", height: "150px" }}
          src={`public/images/dice-${isDiceSelected}.png`}
          alt=""
        />
      </div>
      <p>Click on Dice to Roll</p>
    </RoleContainer>
  );
};

export default RollDice;

const RoleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
