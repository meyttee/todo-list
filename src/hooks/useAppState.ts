import { useContext } from "react";
import { StateContext } from "../contexts";

const useAppState = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useAppState must be used inside a StateProvider");
  }
  return context;
};

export default useAppState;
