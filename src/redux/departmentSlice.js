import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

//createAsyncThunk는 비동기 작업을 처리하는 action을 만들어준다
export const fetchDepartment = createAsyncThunk('department/requestDepartment', async () => {
	const response = await axios.get(`${process.env.PUBLIC_URL}/DB/department.json`);
	return response.data.members;
});

const departmentSlice = createSlice({
	name: 'department',
	initialState: {
		data: [],
		isLoading: false,
	},
	//비동기 함수
	extraReducers: {
		//비동기 작업 대기(시작했을때)
		[fetchDepartment.pending]: (state) => {
			state.isLoading = true;
		},
		//비동기 작업 성공했을때(끝났을때)
		[fetchDepartment.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		},
		//오류가 생겨서 중단됬을때
		[fetchDepartment.rejected]: (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		},
	},
});

export default departmentSlice.reducer;
