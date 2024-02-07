import {combineReducers} from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
import searchInputSlice from './searchInputSlice';

const rootReducer = combineReducers({
	counter: counterSlice,
	search: searchInputSlice,
});

export default rootReducer;
