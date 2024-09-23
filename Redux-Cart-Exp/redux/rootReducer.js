import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./reducer/counterReducer";
import { reducerApi } from "./reducer/reducerApi";

const rootReducer = combineReducers({
  counter: counterReducer,
  apiCall: reducerApi,
});
export default rootReducer;
