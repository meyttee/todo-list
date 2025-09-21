import type { IReducerState, TReducerAction } from "../interface";

const deleteTask = (
  state: IReducerState,
  action: Extract<TReducerAction, { type: "DELETE_TASK" }>,
) => {
  const newMap = new Map(state.data);
  const tasks = newMap.get(action.columnId) || [];
  newMap.set(
    action.columnId,
    tasks
      .filter((task) => task.id !== action.taskId)
      .sort((a, b) => b.priority - a.priority),
  );
  return { ...state, data: newMap };
};

export default deleteTask;
