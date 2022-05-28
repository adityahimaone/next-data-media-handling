import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  loading: false,
  error: false,
  data: [],
};

const carsSlice = createSlice({
  name: "cars",
  initialState: initialValue,
  reducers: {
    getCars: (state, action) => {
      state.loading = true;
    },
    getCarsSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    getCarsError: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { getCars, getCarsSuccess, getCarsError } = carsSlice.actions;
export default carsSlice.reducer;
