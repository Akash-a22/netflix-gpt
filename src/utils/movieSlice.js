import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movie: null,
  },
  reducers: {
    addNowPlayinMovies: (state, action) => {
      state.movie = action.payload;
    },
  },
});
export const { addNowPlayinMovies } = movieSlice.actions;

export default movieSlice.reducer;
