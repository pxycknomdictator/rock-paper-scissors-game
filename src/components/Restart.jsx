import { useContext } from "react";
import { gameStore } from "../store/gameStore";

export const Restart = () => {
  const { handleResetEveryThing } = useContext(gameStore);
  return (
    <button
      onClick={handleResetEveryThing}
      className={`mt-7 inline-block text-xl font-semibold py-2.5 px-7 hover:bg-green-600 bg-green-500 rounded`}
    >
      Restart Game
    </button>
  );
};
