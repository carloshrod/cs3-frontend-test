import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	sidebarFull: true,
};

export const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		toggleSidebar: (state, action) => {
			state.sidebarFull = action.payload;
		},
	},
});

export const { toggleSidebar } = uiSlice.actions;
export default uiSlice.reducer;
