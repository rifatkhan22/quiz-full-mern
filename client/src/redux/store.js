import { combineReducers, configureStore } from "@reduxjs/toolkit";
//combineReducers turns object with diff reducing values into a single reducing function

//reducer is object of slice reducers
import questionReducer from "./question_reducer";
import resultReducer from "./result_reducer";
//configureStore sets up the redux store configuration
//also create root reducer by passing object of slice reducers
//to Redux utility
//call reducers
const rootReducer = combineReducers({
  //2 reducers
  questions: questionReducer,
  result: resultReducer,
});
//combine 2 reducers and return central store

//create store with reducer
export default configureStore({ reducer: rootReducer });
