import { combineReducers } from "redux";
import userReducer from "./User/UserReducer";
import reportReducer from "./ReportData/ReportReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  report: reportReducer,
});
