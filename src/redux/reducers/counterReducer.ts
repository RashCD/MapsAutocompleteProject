import {PayloadAction} from '@reduxjs/toolkit';
import {CounterState} from '../slices/counterSlice';

const increment = (state: CounterState) => {
	state.value += 1;
};

const decrement = (state: CounterState) => {
	state.value -= 1;
};

const incrementByAmount = (
	state: CounterState,
	action: PayloadAction<number>,
) => {
	state.value += action.payload;
};

const setCounter = (state: CounterState, action: PayloadAction<number>) => {
	state.value = action.payload;
};

const counterReducer = {
	increment,
	decrement,
	incrementByAmount,
	setCounter,
};

export default counterReducer;
