import type { IData } from "../contexts";
import type { IReducerState, TReducerAction } from "./interface";

const reducer = (
  state: IReducerState,
  action: TReducerAction,
): IReducerState => {
  switch (action.type) {
    case "CREATE_COLUMN": {
      const newMap = new Map(state.data);
      newMap.set(action.key, []);
      return { ...state, data: newMap };
    }

    case "CREATE_TASK": {
      const newMap = new Map(state.data);
      const tasks = newMap.get(action.key) || [];
      newMap.set(action.key, [...tasks, action.value]);
      return { ...state, data: newMap };
    }

    case "MOVE_TASK": {
      const newMap = new Map(state.data);
      if (action.fromCol === action.targetCol) {
        return { ...state, data: newMap };
      } else {
        const prevCol = newMap.get(action.fromCol);
        const prevList = prevCol?.filter(
          (prev) => prev.id !== action.taskId,
        ) as IData[];
        const targetCol = newMap.get(action.targetCol);
        const targetList = [
          ...(targetCol?.map((item) => item) as IData[]),
          ...(prevCol?.filter((prev) => prev.id === action.taskId) as IData[]),
        ];
        newMap.set(action.targetCol, targetList);
        newMap.set(action.fromCol, prevList);
        return { ...state, data: newMap };
      }
    }

    case "MARK_AS_DONE": {
      const newMap = new Map(state.data);
      const tasks = newMap.get(action.columnId) || [];
      const selectedTask = tasks.find(
        (task) => task.id === action.taskId,
      ) as IData;
      const otherTasks = tasks.filter(
        (task) => task.id !== action.taskId,
      ) as IData[];

      newMap.set(action.columnId, [
        ...otherTasks,
        {
          ...selectedTask,
          status: "done",
        },
      ]);
      return { ...state, data: newMap };
    }

    case "MARK_AS_TODO": {
      const newMap = new Map(state.data);
      const tasks = newMap.get(action.columnId) || [];
      const selectedTask = tasks.find(
        (task) => task.id === action.taskId,
      ) as IData;
      const otherTasks = tasks.filter(
        (task) => task.id !== action.taskId,
      ) as IData[];

      newMap.set(action.columnId, [
        ...otherTasks,
        {
          ...selectedTask,
          status: "todo",
        },
      ]);
      return { ...state, data: newMap };
    }

    case "DELETE_TASK": {
      const newMap = new Map(state.data);
      const tasks = newMap.get(action.columnId) || [];
      newMap.set(
        action.columnId,
        tasks.filter((task) => task.id !== action.taskId),
      );
      return { ...state, data: newMap };
    }

    case "DELETE_COLUMN": {
      const newMap = new Map(state.data);
      newMap.delete(action.key);
      return { ...state, data: newMap };
    }

    case "TOGGLE_THEME": {
      const newTheme = state.theme === "light" ? "dark" : "light";
      return { ...state, theme: newTheme };
    }

    default:
      return state;
  }
};

export default reducer;
