import { ComputerScore } from "./components/ComputerScore.jsx";
import { Game } from "./components/Game.jsx";
import { UserScore } from "./components/UserScore.jsx";

export const App = () => {
  return (
    <>
      <main className="w-[85%] mx-auto">
        <section className="flex items-center justify-between mt-6">
          <ComputerScore />
          <UserScore />
        </section>
        <Game />
      </main>
    </>
  );
};
