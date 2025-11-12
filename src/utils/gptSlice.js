import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieNames: [],
    movieResults: []
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptSearchMoviesandSuggestions: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    }
  }
});

export const { toggleGptSearchView, addGptSearchMoviesandSuggestions } =
  gptSlice.actions;

export default gptSlice.reducer;
