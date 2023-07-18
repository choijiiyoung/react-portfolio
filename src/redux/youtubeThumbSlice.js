import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchYoutubeThumb = createAsyncThunk('youtubeThumb/requestYoutubeThumb', async () => {
	const baseURL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet`;
	const key = 'AIzaSyAuF0TpI6-3VX54rC1jnTjptdGcBXybDGU';
	const num = 4;
	const list = 'PLFAS7kFpzjoOzH0K-VNLbCyY2fnoyMYh8';
	const url = `${baseURL}&playlistId=${list}&key=${key}&maxResults=${num}`;
	const response = await axios.get(url);
	return response.data.items;
});

const youtubeThumbSlice = createSlice({
	name: 'youtubeThumb',
	initialState: {
		data: [],
		isLoading: false,
	},
	extraReducers: {
		[fetchYoutubeThumb.pending]: (state) => {
			state.isLoading = true;
		},
		[fetchYoutubeThumb.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		},
		[fetchYoutubeThumb.rejected]: (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		},
	},
});

export default youtubeThumbSlice.reducer;
