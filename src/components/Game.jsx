import rock from "/images/icon-rock.svg";
import paper from "/images/icon-paper.svg";
import scissor from "/images/icon-scissors.svg";
import { useContext } from "react";
import { gameStore } from "../store/gameStore";

export const Game = () => {
  const { handleUserChoice } = useContext(gameStore);

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 sm:gap-y-10 sm:place-items-center place-items-center gap-6 lg:flex items-center md:gap-10 justify-center mt-20 text-center text-2xl font-semibold">
      <div>
        <img
          onClick={() => handleUserChoice("rock")}
          className="red-shadow bg-gray-200 hover:bg-gray-300 border-8 border-red-500 rounded-full size-[200px] p-8 cursor-pointer"
          src={rock}
          alt="rock"
        />
        <span className="mt-3 inline-block">Rock</span>
      </div>
      <div>
        <img
          onClick={() => handleUserChoice("paper")}
          className="green-shadow bg-gray-200 hover:bg-gray-300 border-8 border-green-500 rounded-full size-[200px] p-8 cursor-pointer"
          src={paper}
          alt="paper"
        />
        <span className="mt-3 inline-block">Paper</span>
      </div>
      <div>
        <img
          onClick={() => handleUserChoice("scissors")}
          className="blue-shadow bg-gray-200 hover:bg-gray-300 border-8 border-blue-500 rounded-full size-[200px] p-8 cursor-pointer"
          src={scissor}
          alt="scissors"
        />
        <span className="mt-3 inline-block">Scissors</span>
      </div>
    </div>
  );
};
