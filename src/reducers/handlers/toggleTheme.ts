import type { IReducerState } from "../interface";

const toggleTheme = (state: IReducerState) => {
  return state.theme === "light" ? "dark" : "light";
};

export default toggleTheme;
