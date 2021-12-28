import {combineReducers} from "redux";
import tasksReducer from "./tasksReducer";
import userReducer from "./userReducer";
const allReducers = combineReducers({
    tasksReducer,
    userReducer
})

export default allReducers;