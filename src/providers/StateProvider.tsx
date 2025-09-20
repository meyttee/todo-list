import { useEffect, useReducer, type PropsWithChildren } from "react";

import { initialState } from "../utils";
import { StateContext } from "../contexts";
import { reducer, type IReducerState } from "../reducers";

const StateProvider = ({ children }: PropsWithChildren) => {
  const data: IReducerState["data"] = new Map(
    JSON.parse(
      localStorage.getItem("app-state") || JSON.stringify(initialState.data),
    ),
  );
  const theme =
    (localStorage.getItem("theme") as IReducerState["theme"]) || "dark";

  const [state, dispatch] = useReducer(reducer, {
    data,
    theme,
  });

  useEffect(() => {
    localStorage.setItem("app-state", JSON.stringify([...state.data]));
    localStorage.setItem("theme", state.theme);
  }, [state]);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
