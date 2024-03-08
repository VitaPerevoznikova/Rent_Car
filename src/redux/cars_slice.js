import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./cars_operation";

const initialState = {
  cars: [],
  favorites: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, {payload}) => {
    state.isLoading = false;
    state.error = payload;
  };

export const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCars.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.error = null;
        state.cars = [...state.cars, ...payload];
      })
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.rejected, handleRejected)
  }
})

export const carsReducer = carsSlice.reducer;