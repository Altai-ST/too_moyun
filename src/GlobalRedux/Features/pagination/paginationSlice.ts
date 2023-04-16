import { IGallery } from './../../../interfaces/gallery.interface'
;('use client')

import { ICardSize, INews } from '@/interfaces/news.interface'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { ICardNews } from '@/interfaces/cardNews.interface'

export const getCards = createAsyncThunk(
	'pagination/getCards',
	async (cardSize: ICardSize, thunkApi) => {
		const { data } = await axios.get<INews>(
			`http://92.255.111.47/news/?page=${cardSize.page}&page_size=${cardSize.pageSize}`
		)
		return data
	}
)

export const getGallery = createAsyncThunk(
	'pagination/getGallery',
	async (gallerySize: ICardSize, thunkApi) => {
		const { data } = await axios.get<IGallery>(
			`http://92.255.111.47/gallery/?page=${gallerySize.page}&page_size=${gallerySize.pageSize}`
		)
		return data
	}
)



export const getMalymattar = createAsyncThunk(
	'pagination/getMalymattar',
	async (malymattarSize: ICardSize, thunkApi) => {
		const { data } = await axios.get<ICardNews>(`http://92.255.111.47/information/?page=${malymattarSize.page}&page_size=${malymattarSize.pageSize}`)	
		return data;
	}
)


export interface PaginationState {
	currentValue: number
	count: number
	newsCards: INews
	gallery: IGallery
	malymattar: ICardNews
}

const initialState: PaginationState = {
	currentValue: 1,
	count: 1,
	newsCards: { count: 4, next: 1, pervious: 0, results: [] },
	gallery: {count: 4, next: 1, pervious: 0, results: []},
	malymattar:{ count: 4, next: 1, pervious: 0, results: [] }
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
	extraReducers: builder => {
		builder.addCase(getCards.fulfilled, (state, action) => {
			state.newsCards = action.payload
		})
		builder.addCase(getGallery.fulfilled, (state, action)=>{
			state.gallery = action.payload
		})
		builder.addCase(getMalymattar.fulfilled, (state, action) => {
			state.malymattar = action.payload
		})
	},
})

export const { setValue, setCount } = paginationSlice.actions

export default paginationSlice.reducer
