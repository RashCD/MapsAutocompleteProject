import {createSlice} from '@reduxjs/toolkit';
import counterReducer from '../reducers/counterReducer';

export type CounterState = {
	value: number;
};

const initialState: CounterState = {
	value: 0,
};

export const counterSlice = createSlice({
	name: 'UpdateCounterAction',
	initialState: initialState,
	reducers: counterReducer,
});

export const {increment, decrement, incrementByAmount, setCounter} =
	counterSlice.actions;

export default counterSlice.reducer;
