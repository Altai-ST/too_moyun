'use client'

import { createSlice } from '@reduxjs/toolkit'

export interface PaginationState {
	currentValue: number
	count: number
}

const initialState: PaginationState = {
	currentValue: 1,
	count: 1,
}

export const paginationSlice = createSlice({
	name: 'pagination',
	initialState,
	reducers: {
		setValue: (state, action) => {
			state.currentValue = action.payload
		},
		setCount: (state, action) => {
			state.count = action.payload
		},
	},
})


export const {setValue, setCount} = paginationSlice.actions;

export default paginationSlice.reducer