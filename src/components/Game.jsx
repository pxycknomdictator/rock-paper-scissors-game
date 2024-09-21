import rock from "/images/icon-rock.svg";
import paper from "/images/icon-paper.svg";
import scissor from "/images/icon-scissors.svg";

export const Game = () => {
  return (
    <div className="w-full flex items-center gap-7 justify-center mt-10">
      <img
        className="bg-gray-200 border-8 border-red-500 rounded-full size-[200px] p-8"
        src={rock}
        alt="rock"
      />
      <img
        className="bg-gray-200 border-8 border-green-500 rounded-full size-[200px] p-8"
        src={paper}
        alt="paper"
      />
      <img
        className="bg-gray-200 border-8 border-blue-500 rounded-full size-[200px] p-8"
        src={scissor}
        alt="scissors"
      />
    </div>
  );
};
