import { configureStore, createSlice } from "@reduxjs/toolkit";

const numsSlice = createSlice({
  name: "nums",
  initialState: { a: 10, b: 3 },
  reducers: {
    setA: (state, action) => {
      state.a = action.payload;
    },
    setB: (state, action) => {
      state.b = action.payload;
    },
  },
});

export const { setA, setB } = numsSlice.actions;

export const store = configureStore({
  reducer: { nums: numsSlice.reducer },
});
