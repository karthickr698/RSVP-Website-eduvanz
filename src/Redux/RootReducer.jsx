import { combineReducers } from "redux";
import userReducer from './User/UserReducer'

export const rootReducer = combineReducers({
    user: userReducer
});