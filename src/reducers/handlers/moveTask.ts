import type { IData } from "../../contexts";
import type { IReducerState, TReducerAction } from "../interface";

const moveTask = (
  state: IReducerState,
  action: Extract<TReducerAction, { type: "MOVE_TASK" }>,
) => {
  const newMap = new Map(state.data);
  if (action.fromCol === action.targetCol) {
    return { ...state, data: newMap };
  }
  const prevCol = newMap.get(action.fromCol);
  const prevList = prevCol?.filter(
    (prev) => prev.id !== action.taskId,
  ) as IData[];
  const targetCol = newMap.get(action.targetCol);
  const targetList = [
    ...(targetCol?.map((item) => item) as IData[]),
    ...(prevCol?.filter((prev) => prev.id === action.taskId) as IData[]),
  ];
  newMap.set(
    action.targetCol,
    targetList.sort((a, b) => b.priority - a.priority),
  );
  newMap.set(
    action.fromCol,
    prevList.sort((a, b) => b.priority - a.priority),
  );
  return { ...state, data: newMap };
};

export default moveTask;
