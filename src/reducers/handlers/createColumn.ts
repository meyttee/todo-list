import type { IReducerState, TReducerAction } from "../interface";

const createColumn = (
  state: IReducerState,
  action: Extract<TReducerAction, { type: "CREATE_COLUMN" }>,
) => {
  const newMap = new Map(state.data);
  newMap.set(action.key, []);
  return { ...state, data: newMap };
};

export default createColumn;
