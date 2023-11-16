import produce from "immer";
export const initialState = { token: "" };

export default function userReducer(state = initialState, action) {
  if (action.type === "connect") {
    return produce(initialState, (draft) => {
      draft.token = action.payload;
    });
  }
  return state;
}
