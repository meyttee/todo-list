import {
  createColumn,
  createTask,
  markAsTodo,
  moveTask,
  markAsDone,
  updateTask,
  deleteTask,
  deleteColumn,
  toggleTheme,
} from "./handlers";

import type { IReducerState, TReducerAction } from "./interface";

const reducer = (
  state: IReducerState,
  action: TReducerAction,
): IReducerState => {
  switch (action.type) {
    case "CREATE_COLUMN": {
      return createColumn(state, action);
    }

    case "CREATE_TASK": {
      return createTask(state, action);
    }

    case "MOVE_TASK": {
      return moveTask(state, action);
    }

    case "MARK_AS_DONE": {
      return markAsDone(state, action);
    }

    case "MARK_AS_TODO": {
      return markAsTodo(state, action);
    }

    case "UPDATE_TASK": {
      return updateTask(state, action);
    }

    case "DELETE_TASK": {
      return deleteTask(state, action);
    }

    case "DELETE_COLUMN": {
      return deleteColumn(state, action);
    }

    case "TOGGLE_THEME": {
      return { ...state, theme: toggleTheme(state) };
    }

    default:
      return state;
  }
};

export default reducer;
