import { useContext } from "react";
import { gameStore } from "../store/gameStore";

export const UserScore = () => {
  const { userScore } = useContext(gameStore);
  return (
    <div className="text-3xl font-semibold space-x-5">
      <span className="text-green-500">Your Score:</span>
      <span className="text-white">{userScore}</span>
    </div>
  );
};
