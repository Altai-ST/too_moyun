import { ISearchGet, ISearchAll } from './../../../interfaces/search.interface'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getAllSearch = createAsyncThunk(
	'searchSlice/getAllSearch',
	async (searchGet: ISearchGet, thunkApi) => {
		try {
			const { data } = await axios.get<ISearchAll>(
				`http://92.255.111.47/search/${searchGet.cat}&page_size=${searchGet.q}`
			)
			return data
		} catch (err: any) {
			return thunkApi.rejectWithValue(err.message)
		}
	}
)

export interface SearchState {
	searchAll: ISearchAll
}

const initialState: SearchState = {
	searchAll: {
		news: [{ id: 0, img: '', title: '', text: '' }],
		ads: [{ id: 0, img: '', title: '', text: '' }],
		info: [
			{
				id: 0,
				title: '',
				sub_title: '',
				img: '',
				text: '',
				bottom_title: '',
				bottom_text: '',
				img_1: '',
				img_2: '',
				img_3: '',
			},
		],
		resolve: [
			{
				title: '',
				file: '',
			},
		],
		gallery: [
			{
				photo: '',
				description: '',
			},
		],
	},
}



export const searchSlice = createSlice({
	name: 'searchSlice',
	initialState,
	reducers: {
		
	},
	extraReducers: builder=>{
		builder.addCase(getAllSearch.fulfilled,(state,action)=>{
			state.searchAll = action.payload
		})
	}
})



export default searchSlice.reducer