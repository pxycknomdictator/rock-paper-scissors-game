import { useContext } from "react";
import { gameStore } from "../store/gameStore";

export const ComputerScore = () => {
  const { computerScore } = useContext(gameStore);
  return (
    <div className="text-[1.3rem] sm:text-3xl font-semibold space-x-2">
      <span className="text-red-500">Computer Score:</span>
      <span className="text-white">{computerScore}</span>
    </div>
  );
};
