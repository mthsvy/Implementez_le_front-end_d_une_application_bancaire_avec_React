import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import accountReducer from "./account.reducer";

export default combineReducers({ token: userReducer, accountReducer });
