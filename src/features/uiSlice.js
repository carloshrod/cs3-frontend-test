import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	sidebarFull: true,
	isFetching: false,
};

export const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		toggleSidebar: (state, action) => {
			state.sidebarFull = action.payload;
		},
		setIsFetching: (state, action) => {
			state.isFetching = action.payload;
		},
	},
});

export const { toggleSidebar, setIsFetching } = uiSlice.actions;
export default uiSlice.reducer;
