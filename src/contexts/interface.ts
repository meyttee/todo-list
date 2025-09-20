import type { Dispatch } from "react";

import type { IReducerState, TReducerAction } from "../reducers";

interface IData {
  title: string;
  description: string;
  status: "done" | "todo";
  id: string;
  priority: number;
}

interface IContext {
  state: IReducerState;
  dispatch: Dispatch<TReducerAction>;
}

export type { IData, IContext };
