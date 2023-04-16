import { IResult } from './../../../interfaces/gar.interface'
import { IResultG } from './../../../interfaces/gallery.interface'
import { ICardNews } from './../../../interfaces/cardNews.interface'
import { IGallery } from './../../../interfaces/gallery.interface'
;('use client')

import { ICardSize, INews } from '@/interfaces/news.interface'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getFirstCards = createAsyncThunk(
	'firstData/getCards',
	async (cardSize: ICardSize, thunkApi) => {
		const { data } = await axios.get<INews>(
			`http://92.255.111.47/news/?page=${cardSize.page}&page_size=${cardSize.pageSize}`
		)
		return data
	}
)

export const getFirstGallery = createAsyncThunk(
	'firstData/getGallery',
	async (gallerySize: ICardSize, thunkApi) => {
		const { data } = await axios.get<IGallery>(
			`http://92.255.111.47/gallery/?page=${gallerySize.page}&page_size=${gallerySize.pageSize}`
		)
		return data
	}
)

export const getFirstMalymattar = createAsyncThunk(
	'firstData/getMalymattar',
	async (malymattarSize: ICardSize, thunkApi) => {
		const { data } = await axios.get<ICardNews>(
			`http://92.255.111.47/information/?page=${malymattarSize.page}&page_size=${malymattarSize.pageSize}`
		)
		return data
	}
)

export interface FirstDataState {
	currentValue: number
	count: number
	newsCards: INews
	gallery: IGallery
	malymattar: ICardNews
}

const initialState: FirstDataState = {
	currentValue: 1,
	count: 1,
	newsCards: { count: 4, next: 1, pervious: 0, results: [] },
	gallery: {
		count: 4,
		next: 1,
		pervious: 0,
		results: [{ id: 0, photo: '', description: '' },{ id: 0, photo: '', description: '' }],
	},
	malymattar: { count: 4, next: 1, pervious: 0, results: [] },
}

export const firstDataSlice = createSlice({
	name: 'firstData',
	initialState,
	reducers: {
		setValue: (state, action) => {
			state.currentValue = action.payload
		},
		setCount: (state, action) => {
			state.count = action.payload
		},
	},
	extraReducers: builder => {
		builder.addCase(getFirstCards.fulfilled, (state, action) => {
			state.newsCards = action.payload
		}),
			builder.addCase(getFirstGallery.fulfilled, (state, action) => {
				state.gallery = action.payload
			}),
			builder.addCase(getFirstMalymattar.fulfilled, (state, action) => {
				state.malymattar = action.payload
			})
	},
})

export const { setValue, setCount } = firstDataSlice.actions

export default firstDataSlice.reducer
