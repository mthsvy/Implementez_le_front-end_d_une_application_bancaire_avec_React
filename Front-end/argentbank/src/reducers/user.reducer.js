import produce from "immer";
export const initialState = {
  token: "",
  username: "",
  firstname: "",
  lastname: "",
  email: "",
  id: "",
};

export default function userReducer(state = initialState, action) {
  if (action.type === "connect") {
    return produce(initialState, (draft) => {
      draft.token = action.payload;
    });
  }
  if (action.type === "userprofile") {
    return produce(initialState, (draft) => {
      draft.token = action.payload.token;
      draft.username = action.payload.username;
      draft.firstname = action.payload.firstname;
      draft.lastname = action.payload.lastname;
      draft.email = action.payload.email;
      draft.id = action.payload.id;
    });
  }

  return state;
}
