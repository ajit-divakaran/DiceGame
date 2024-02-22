import { useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import GamePlay from "./components/GamePlay";
function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const toggle = () => {
    setIsGameStarted((prev) => !prev);
  };

  return <>{isGameStarted ? <GamePlay /> : <HomePage toggle={toggle} />}</>;
}

export default App;
