import { createSlice } from '@reduxjs/toolkit'
 import {transformDaTa} from './dataUtils';
const initialState = {
    categories: null,
    forYou: null,
    hot:null,
}

const appDataSlice = createSlice({
    name: "appData",
    initialState,
    reducers: {
        getData: (state,action) => {
            const {grouped, hot, recomended} = transformDaTa(action.payload);
            state.categories = grouped;
            state.forYou = recomended;
            state.hot = hot
       }  
    }
});


export const {getData } = appDataSlice.actions;

//selectors 
export const selectRecomended = (state) => state.data.forYou
export const selectHot = (state) => state.data.hot
export const selectCategories = (state) => state.data.categories
export const getCategory = ({data:{categories:categories} }) => category => categories[category]
export const getItem = ({data:{categories:categories} }) => (id, category) => categories[category].find(item => item._id === id);

export default appDataSlice.reducer;