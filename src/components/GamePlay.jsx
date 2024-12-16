import styled from "styled-components";
import Score from "./Score";
import Number from "./Number";
import { Button } from "../helpers/button";
import RollDice from "./RollDice";
import ShowRulescomp from "./ShowRulescomp";
import { useState } from "react";
const GamePlay = () => {
  const [isNumSelected, setIsNumSelected] = useState();
  const [isDiceSelected, setIsDiceSelected] = useState(1);
  const [currentScore, setCurrentScore] = useState(0);
  const [failScore, setFailScore] = useState(5);
  const [isGameOver, setIsGameOver] = useState(false);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);
  // const [highScore, setHighScore] = useState("0");
  // const [clicked, setClicked] = useState(false);

  // localStorage.setItem("score", "0");

  const PlayAgain = () => {
    setIsGameOver(false);
    setFailScore(5);
    setCurrentScore(0);
  };
  const Result = (fail) => {
    if (fail === 1) {
      setIsGameOver(true);
      // console.log(isGameOver);
    }
    fail = fail - 1;
    return fail;
  };

  const ShowRules = () => {
    setShowRules((prev) => !prev);
  };

  const DiceIsClicked = () => {
    if (isNumSelected === undefined) {
      setError("You have not selected any number");
      return;
    } else {
      setError("");
    }

    let random = Math.floor(Math.random() * 6 + 1);
    setIsDiceSelected(() => random);
    // console.log("random ", random);
    // console.log("Num", isNumSelected);
    // console.log("Dice", isDiceSelected);
    if (isNumSelected === random) {
      setCurrentScore((score) => {
        score += random;
        // console.log("score", typeof score, score);
        // compareNum = Number(localStorage.getItem("score"));
        // // console.log("compNum", compareNum);

        return score;
      });
      // if (currentScore > Number(highScore)) {
      //   localStorage.setItem("score", `${currentScore}`);
      //   setHighScore(localStorage.getItem("score"));
      // }
      // console.log("Localstorage", localStorage.getItem("score"));
    } else {
      setFailScore((fail) => Result(fail));
    }
    setIsNumSelected();
    setShowRules(false);
  };

  return (
    <GamePage isPlayDone={isGameOver === true}>
      {/* style={{  } */}
      <GameOver isPlayDone={isGameOver === true}>
        <SadImgContainer>
          <img
            src="/images/GC_milk_cry.gif"
            alt="Crying face gif"
          />
        </SadImgContainer>
        <h1>Game over </h1>
        <p>Score : {currentScore}</p>
        {/* <p>Highest score : {highScore}</p> */}
        <Button onClick={PlayAgain}>Play Again</Button>
      </GameOver>
      <GameContent isPlayDone={isGameOver === true}>
        <div className="top">
          <Score currentScore={currentScore} failScore={failScore} />
          <Number
            error={error}
            setError={setError}
            isNumSelected={isNumSelected}
            setIsNumSelected={setIsNumSelected}
            isDiceSelected={isDiceSelected}
          />
        </div>
        <Body isShowRules={showRules === true}>
          <CenterContainer>
            <RollDice
              isDiceSelected={isDiceSelected}
              DiceIsClicked={DiceIsClicked}
            />
          </CenterContainer>
          <CenterContainer>
            <Button onClick={PlayAgain}>Reset Score</Button>
            <Button onClick={ShowRules}>Show Rules</Button>
          </CenterContainer>

          <ShowRulesStyle isShowRules={showRules === true}>
            <ShowRulescomp />
          </ShowRulesStyle>
        </Body>
      </GameContent>
    </GamePage>
  );
};
const GamePage = styled.div`
  /* width: fit-content; */
  padding: ${(props) => (props.isPlayDone ? "0px" : "25px")};

  position: relative;
`;
const GameContent = styled.div`
  /* display: ${(props) => (props.isPlayDone ? "none" : "grid")}; */
  /* outline: 1px solid black; */
  display: grid;
  grid-template-rows: 0.35fr 0.65fr;
  grid-template-columns: 1fr;
  /* background-color: bisque; */
  filter: blur(${(props) => (props.isPlayDone ? "9px" : "0%")});
  & .top {
    display: flex;
    justify-content: space-between;
  }
`;
const Body = styled.div`
  display: grid;
  /* flex-direction: column; */
  grid-template-rows: ${(props) =>
    props.isShowRules ? "30vh 30vh 30vh" : "40vh 30vh"};
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 92vh;
`;
const SadImgContainer = styled.div`
  width: fit-content;
  height: fit-content;
  filter: drop-shadow(2px 0 5px black);
`;

const GameOver = styled.div`
  display: ${(props) => (props.isPlayDone ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  left: -8px;
  top: -8px;
  background-color: #ffe4c4dc;
  padding-top: 100px;
  align-items: center;
  color: black;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  /* margin: ${(props) => (props.isPlayDone ? "0px" : null)}; */
`;

const ShowRulesStyle = styled.div`
  display: ${(props) => (props.isShowRules ? "flex" : "none")};
  background-color: #fbf1f1;
  color: black;
  padding: 0 10px;
`;

const CenterContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

export default GamePlay;
