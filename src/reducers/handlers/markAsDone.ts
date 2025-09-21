import type { IData } from "../../contexts";
import type { IReducerState, TReducerAction } from "../interface";

const markAsDone = (
  state: IReducerState,
  action: Extract<TReducerAction, { type: "MARK_AS_DONE" }>,
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
        status: "done" as const,
      },
    ].sort((a, b) => b.priority - a.priority),
  );
  return { ...state, data: newMap };
};

export default markAsDone;
