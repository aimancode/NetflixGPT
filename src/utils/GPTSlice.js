import { createSlice } from "@reduxjs/toolkit";
const GPTSlice = createSlice ({
    name:'gpt',
    initialState:{
        showGPTSearch: false
    },
    reducers:{
        toggeleGPTSearchView : (state) =>{
            state.showGPTSearch = !state.showGPTSearch;
        }
    }
});

export const {toggeleGPTSearchView} =GPTSlice.actions;
export default GPTSlice.reducer;