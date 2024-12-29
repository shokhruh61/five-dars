import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value += action.payload;
    },
    decrement: (state, action) => {
      if (state.value <= 0) {
        state.value = 0;
      } else {
        state.value -= action.payload;
      }
    },
  },
});

export default counterSlice.reducer;
export const { increment, decrement } = counterSlice.actions;
