import produce from "immer";
export const initialState = {
  token: "",
  username: "",
  firstname: "",
  lastname: "",
};

export default function userReducer(state = initialState, action) {
  if (action.type === "connect") {
    return produce(state, (draft) => {
      draft.token = action.payload;
    });
  }
  if (action.type === "userprofile") {
    return produce(state, (draft) => {
      draft.token = action.payload.token;
      draft.username = action.payload.username;
      draft.firstname = action.payload.firstname;
      draft.lastname = action.payload.lastname;
    });
  }
  if (action.type === "username") {
    return produce(state, (draft) => {
      draft.token = action.payload.token;
      draft.username = action.payload.username;
    });
  }

  return state;
}
