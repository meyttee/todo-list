import type { IData } from "../contexts";

interface IReducerState {
  data: Map<string, IData[]>;
  theme: "light" | "dark";
}

type TReducerAction =
  | { type: "CREATE_TASK"; key: string; value: IData }
  | { type: "CREATE_COLUMN"; key: string }
  | { type: "DELETE_TASK"; taskId: string; colId: string }
  | { type: "DELETE_COLUMN"; key: string }
  | { type: "MARK_AS_DONE"; taskId: string; colId: string }
  | { type: "MOVE_TASK"; taskId: string; fromCol: string; targetCol: string }
  | { type: "TOGGLE_THEME" };

export type { IReducerState, TReducerAction };
