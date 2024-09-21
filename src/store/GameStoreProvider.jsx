import { useState } from "react";
import { gameStore } from "./gameStore.js";

// eslint-disable-next-line react/prop-types
export const GameStoreProvider = ({ children }) => {
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const handlePlayGame = (computerChoice, userChoice) => {
    if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      setUserScore((preScore) => preScore + 1);
    } else if (userChoice === computerChoice) {
      console.log("Game draw");
    } else {
      setComputerScore((preScore) => preScore + 1);
    }
  };

  const handleComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
  };

  const handleUserChoice = (userChoice) => {
    const computerChoice = handleComputerChoice();
    handlePlayGame(computerChoice, userChoice);
  };

  return (
    <gameStore.Provider value={{ userScore, computerScore, handleUserChoice }}>
      {children}
    </gameStore.Provider>
  );
};
