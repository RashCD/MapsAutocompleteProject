import {PayloadAction} from '@reduxjs/toolkit';
import {SearchInputState} from '../slices/searchInputSlice';

const setSearchInput = (
	state: SearchInputState,
	action: PayloadAction<string>,
) => {
	state.value = action.payload;
};

const clearSearchInput = (state: SearchInputState) => {
	state.value = '';
};

const searchInputReducer = {
	setSearchInput,
	clearSearchInput,
};

export default searchInputReducer;
