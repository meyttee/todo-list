import { useContext } from "react";
import { StateContext } from "../contexts";

const useAppState = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useAppState should inside StateContext");
  }
  return context;
};

export default useAppState;
