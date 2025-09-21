import type { IReducerState, TReducerAction } from "../interface";

const deleteColumn = (
  state: IReducerState,
  action: Extract<TReducerAction, { type: "DELETE_COLUMN" }>,
) => {
  const newMap = new Map(state.data);
  newMap.delete(action.key);
  return { ...state, data: newMap };
};

export default deleteColumn;
