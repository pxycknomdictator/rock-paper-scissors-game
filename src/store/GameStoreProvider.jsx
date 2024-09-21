import { gameStore } from "./gameStore.js";

// eslint-disable-next-line react/prop-types
export const GameStoreProvider = ({ children }) => {
  return <gameStore.Provider value={{}}>{children}</gameStore.Provider>;
};
