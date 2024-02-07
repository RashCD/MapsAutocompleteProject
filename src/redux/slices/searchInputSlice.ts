import {createSlice} from '@reduxjs/toolkit';
import searchInputReducer from '../reducers/searchInputReducer';

export type SearchInputState = {
	value: string;
};

const initialState: SearchInputState = {
	value: '',
};

export const searchInputSlice = createSlice({
	name: 'search',
	initialState: initialState,
	reducers: searchInputReducer,
});

export const {setSearchInput, clearSearchInput} = searchInputSlice.actions;

export default searchInputSlice.reducer;
