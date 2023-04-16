'use client';

import { configureStore } from '@reduxjs/toolkit';
import paginationReducer from './Features/pagination/paginationSlice'

import firstDataReducer from './Features/firstGetData/firstGetDataSlice'

export const store = configureStore({
	reducer:{
		pagination: paginationReducer,
		firstData: firstDataReducer
	}
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;