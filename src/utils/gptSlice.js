import { createSlice } from '@reduxjs/toolkit'
import GPTSearch from '../components/GPTSearch';

const gptSlice = createSlice({
    name: 'gptSearch',
    initialState: {
        showGPTSearch: false
    },
    reducers: {
        toggleGPTSearchView : (state, action) => {
            state.showGPTSearch = !state.showGPTSearch;
        }
    }
});

export const { toggleGPTSearchView } = gptSlice.actions;

export default gptSlice.reducer;