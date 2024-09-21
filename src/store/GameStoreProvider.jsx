import { gameStore } from "./gameStore.js";

// eslint-disable-next-line react/prop-types
export const GameStoreProvider = ({ children }) => {
  const handlePlayGame = (computerChoice, userChoice) => {
    if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log("User win");
    } else if (userChoice === computerChoice) {
      console.log("Game draw");
    } else {
      console.log("Computer win");
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
    <gameStore.Provider value={{ handleUserChoice }}>
      {children}
    </gameStore.Provider>
  );
};
