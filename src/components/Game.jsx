import rock from "/images/icon-rock.svg";
import paper from "/images/icon-paper.svg";
import scissor from "/images/icon-scissors.svg";

export const Game = () => {
  return (
    <div className="w-full flex items-center gap-10 justify-center mt-20 text-center text-2xl font-semibold">
      <div>
        <img
          className="red-shadow bg-gray-200 hover:bg-gray-300 border-8 border-red-500 rounded-full size-[200px] p-8 cursor-pointer"
          src={rock}
          alt="rock"
        />
        <span className="mt-3 inline-block">Rock</span>
      </div>
      <div>
        <img
          className="green-shadow bg-gray-200 hover:bg-gray-300 border-8 border-green-500 rounded-full size-[200px] p-8 cursor-pointer"
          src={paper}
          alt="paper"
        />
        <span className="mt-3 inline-block">Paper</span>
      </div>
      <div>
        <img
          className="blue-shadow bg-gray-200 hover:bg-gray-300 border-8 border-blue-500 rounded-full size-[200px] p-8 cursor-pointer"
          src={scissor}
          alt="scissors"
        />
        <span className="mt-3 inline-block">Scissors</span>
      </div>
    </div>
  );
};
