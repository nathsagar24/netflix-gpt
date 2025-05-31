import { createSlice } from '@reduxjs/toolkit'
import GPTSearch from '../components/GPTSearch';

const gptSlice = createSlice({
    name: 'gptSearch',
    initialState: {
        showGPTSearch: false,
        movieNames: null,
        movieResults: null
    },
    reducers: {
        toggleGPTSearchView : (state, action) => {
            state.showGPTSearch = !state.showGPTSearch;
        },
        addGPTMovieResults: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        }
    }
});

export const { toggleGPTSearchView, addGPTMovieResults } = gptSlice.actions;

export default gptSlice.reducer;