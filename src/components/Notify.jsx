import { useContext } from "react";
import { Restart } from "./Restart.jsx";
import { gameStore } from "../store/gameStore";

export const Notify = () => {
  const { showRatings } = useContext(gameStore);
  return (
    <>
      <h2
        className={`${
          showRatings.includes("Computer") ? "text-red-500" : "text-green-500"
        } mt-20 text-3xl font-semibold`}
      >
        {showRatings}
      </h2>
      <Restart />
    </>
  );
};
