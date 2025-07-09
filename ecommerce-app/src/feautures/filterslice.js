import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCategories: [],
  priceRange: 1000,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.selectedCategories = action.payload.selectedCategories;
      state.priceRange = action.payload.priceRange;
    },
    resetFilters: (state) => {
      state.selectedCategories = [];
      state.priceRange = 1000;
    },
  },
});

export const { setFilters, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;
