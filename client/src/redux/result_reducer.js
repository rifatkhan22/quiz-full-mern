import { createSlice } from "@reduxjs/toolkit";

export const resultReducer = createSlice({
  name: "result",
  initialState: {
    userId: null,
    result: [],
  },
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload; //pass the value from user and then pass to userID
    },
  },
});

export const { setUserId } = resultReducer.actions; // this will return setUserId action
export default resultReducer.reducer;
