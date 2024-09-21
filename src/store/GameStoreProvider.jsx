import { useState } from "react";
import { gameStore } from "./gameStore.js";

// eslint-disable-next-line react/prop-types
export const GameStoreProvider = ({ children }) => {
  const initialValue = 0;

  const [userScore, setUserScore] = useState(initialValue);
  const [computerScore, setComputerScore] = useState(initialValue);
  const [showRatings, setShowRatings] = useState("");

  const handlePlayGame = (computerChoice, userChoice) => {
    if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      setUserScore((preScore) => preScore + 1);
      setShowRatings("You Win 💙");
    } else if (userChoice === computerChoice) {
      setShowRatings("Draw Game 🙌");
    } else {
      setComputerScore((preScore) => preScore + 1);
      setShowRatings("Computer Win 🤖");
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

  const handleResetEveryThing = () => {
    setUserScore(initialValue);
    setComputerScore(initialValue);
    setShowRatings("");
  };

  return (
    <gameStore.Provider
      value={{
        userScore,
        computerScore,
        showRatings,
        handleUserChoice,
        handleResetEveryThing,
      }}
    >
      {children}
    </gameStore.Provider>
  );
};
