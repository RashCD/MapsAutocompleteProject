import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './slices/index';
import {createLogger} from 'redux-logger';

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

const logger = createLogger();

const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export default store;
