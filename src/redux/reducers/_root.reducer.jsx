import { combineReducers } from "redux";
import employeesReducer from "./employees.reducer";
import userReducer from "./user.reducer";

const rootReducer = combineReducers({
  employeesReducer,
  userReducer,
});

export default rootReducer;
