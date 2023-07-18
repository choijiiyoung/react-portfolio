import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchSchedule = createAsyncThunk('schedules/requestSchedule', async () => {
	const response = await axios.get(`${process.env.PUBLIC_URL}/DB/department.json`);
	return response.data.schedules;
});

const scheduleSlice = createSlice({
	name: 'schedules',
	initialState: {
		data: [],
		isLoading: false,
	},
	extraReducers: {
		[fetchSchedule.pending]: (state) => {
			state.isLoading = true;
		},
		[fetchSchedule.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		},
		[fetchSchedule.rejected]: (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		},
	},
});

export default scheduleSlice.reducer;
