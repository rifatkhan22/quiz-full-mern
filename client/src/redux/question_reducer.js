import { createSlice } from "@reduxjs/toolkit";
//createSlice-->a slice of the redux-store
//takes
//name: which is name of the slice for reference
//initialState: the initial state of the reducer
//reducers: contains all the actions to mutate the reducer state

//reducer
export const questionReducer = createSlice({
  name: "questions",
  initialState: {
    queue: [], //store all questions
    answers: [], //store all answers
    trace: 0, //question index
  },
  //reducers = function that takes action and prev state
  //return a new state based on action(change value of store)
  reducers: {
    //action var access user input
    //state-current state
    startExamAction: (state, action) => {
      let { question, answers } = action.payload; //payload->user input value
      return {
        ...state,
        queue: question,
        answers: answers,
      };
    },
    //update the trace value so when next-button is clicked
    //trace value =1 and move to next question
    moveNextAction: (state) => {
      return {
        ...state,
        trace: state.trace + 1,
      };
    },
    movePrevAction: (state) => {
      return {
        ...state, //previous state
        trace: state.trace - 1,
      };
    },
    //for restart button
    //want to return to initial state
    resetAllAction: () => {
      return {
        queue: [],
        answers: [],
        trace: 0,
      };
    },
  },
});

//destructure object
//using action can dispatch and update the value
export const {
  startExamAction,
  moveNextAction,
  movePrevAction,
  resetAllAction,
} = questionReducer.actions;

//export reducer
export default questionReducer.reducer;
