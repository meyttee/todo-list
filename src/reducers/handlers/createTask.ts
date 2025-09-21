import type { IReducerState, TReducerAction } from "../interface";

const createTask = (
  state: IReducerState,
  action: Extract<TReducerAction, { type: "CREATE_TASK" }>,
) => {
  const newMap = new Map(state.data);
  const tasks = newMap.get(action.key) || [];
  newMap.set(
    action.key,
    [...tasks, action.value].sort((a, b) => b.priority - a.priority),
  );
  return { ...state, data: newMap };
};

export default createTask;
