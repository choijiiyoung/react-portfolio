import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
	name: 'menu',
	initialState: { open: false },
	reducers: {
		close: (state) => {
			state.open = false;
		},
		toggle: (state) => {
			state.open = !state.open;
		},
	},
});

export const { close, toggle } = menuSlice.actions;
export default menuSlice.reducer;
