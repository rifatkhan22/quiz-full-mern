import { createSlice } from "@reduxjs/toolkit";

export const questionReducer = createSlice({
  name: "questions",
  initialState: {
    queue: [],
    answers: [],
    trace: 0,
  },
  reducers: {
    startExamAction: (state, action) => {
      return {
        ...state,
        queue: action.payload, //get user input value
      };
    },
  },
});

export const { startExamAction } = questionReducer.actions;

export default questionReducer.reducer;
