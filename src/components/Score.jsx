import styled from "styled-components";
const Score = ({ currentScore, failScore }) => {
  return (
    <ScoreBoard>
      <div>
        <ScoreNum>{currentScore}</ScoreNum>
        <p style={{ margin: "0" }}>Total Score</p>
      </div>
      <div className="fail">
        <p>
          Attempts Remaining :<span style={{ color: "red" }}>{failScore}</span>
        </p>
      </div>
    </ScoreBoard>
  );
};

const ScoreNum = styled.p`
  font-size: 57px;
  /* padding-bottom: 10px; */
  margin: 0;
  padding: 0;
  font-family: Poppins;
  height: fit-content;
`;

const ScoreBoard = styled.div`
  display: flex;
  gap: 80px;
  & .fail {
    height: fit-content;
    & p {
      font-size: 20px;
    }
  }
`;

export default Score;
