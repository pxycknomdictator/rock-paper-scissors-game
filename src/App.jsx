import { ComputerScore } from "./components/ComputerScore.jsx";
import { Game } from "./components/Game.jsx";
import { Notify } from "./components/Notify.jsx";
import { UserScore } from "./components/UserScore.jsx";

export const App = () => {
  return (
    <main className="py-6 md:py-0 min-h-screen w-full bg-slate-900 text-white">
      <section className="w-full px-3 md:w-[85%] sm:px-7 mx-auto text-center">
        <div className="flex items-center justify-between pt-5">
          <ComputerScore />
          <UserScore />
        </div>
        <Game />
        <Notify />
      </section>
    </main>
  );
};
