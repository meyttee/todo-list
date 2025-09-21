import { useContext } from "react";
import { StateContext } from "../contexts";

const useAppState = () => {
  const context = useContext(StateContext);
  return context;
};

export default useAppState;
