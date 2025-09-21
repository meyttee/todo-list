import type { IData } from "../../contexts";
import type { IReducerState, TReducerAction } from "../interface";

const updateTask = (
  state: IReducerState,
  action: Extract<TReducerAction, { type: "UPDATE_TASK" }>,
) => {
  const newMap = new Map(state.data);
  const tasks = newMap.get(action.columnId) || [];
  const selectedTask = tasks.find((task) => task.id === action.taskId) as IData;
  const otherTasks = tasks.filter(
    (task) => task.id !== action.taskId,
  ) as IData[];

  newMap.set(
    action.columnId,
    [
      ...otherTasks,
      {
        ...selectedTask,
        ...action.value,
      },
    ].sort((a, b) => b.priority - a.priority),
  );
  return { ...state, data: newMap };
};

export default updateTask;
