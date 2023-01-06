import { createSlice } from "@reduxjs/toolkit";

export const resultReducer = createSlice({
  name: "result",
  initialState: {
    userId: null,
    result: [], //store user answer index value in the result variable
  },
  reducers: {
    //set user id variable
    setUserId: (state, action) => {
      state.userId = action.payload; //pass the value from user and then pass to userID
    },
    pushResultAction: (state, action) => {
      state.result.push(action.payload); //add new element to result array based on user value
    },
    updateResultAction: (state, action) => {
      const { trace, checked } = action.payload;
      state.result.fill(checked, trace, trace + 1);
      //use fill method to update result value
      //change all added elements from start to end index to static value and return modified array
      //trace value- return index
      //update the checked(NEW value) value AT THAT INDEX
      //1st arg- pass updated value
      //2nd arg-specify index
      //3rd update curr index
    },
    //when click on restart button
    //return to intial value of state to the store
    resetResultAction: () => {
      return {
        userId: null,
        result: [],
      };
    },
  },
});

export const {
  setUserId,
  pushResultAction,
  resetResultAction,
  updateResultAction,
} = resultReducer.actions; // this will return setUserId action
export default resultReducer.reducer;
