import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import { GameStoreProvider } from "./store/GameStoreProvider.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <GameStoreProvider>
    <App />
  </GameStoreProvider>
);
