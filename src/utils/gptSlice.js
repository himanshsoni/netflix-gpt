import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGpt: false,
    gptMovies: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGpt = !state.showGpt;
    },
    addGptMoviesResult: (state, action) => {
      state.gptMovies = action.payload;
    },
    clearGptMovies: (state) => {
      state.gptMovies = null;
    },
  },
});

export const { toggleGptSearchView, addGptMoviesResult, clearGptMovies } =
  gptSlice.actions;
export default gptSlice.reducer;
