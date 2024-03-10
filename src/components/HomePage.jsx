import styled from "styled-components";
import { Button } from "../helpers/button";

const HomePage = ({ toggle }) => {
  return (
    <Container>
      <div className="image-container">
        <img src="public/images/dices-1.png" alt="Dices Cover Page image" />
      </div>
      <div className="first-pg-content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Start Game</Button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: fit-content;
  height: fit-content;
  align-items: center;
  margin: 0 auto;
  display: flex;
  line-height: 35px;
  .image-container {
    width: 649px;
    height: 522px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .first-pg-content {
    margin-left: 25px;
    height: 144px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    h1 {
      font-size: 5vw;
    }
  }
`;

export default HomePage;
