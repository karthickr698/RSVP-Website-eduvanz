import { combineReducers } from "redux";
import userReducer from "./User/UserReducer";
import reportReducer from "./ReportData/ReportReducer";
import adminReducer from './admin/AdminReducer'

export const rootReducer = combineReducers({
  user: userReducer,
  report: reportReducer,
  admin: adminReducer
});
