import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	sidebarFull: true,
	isFetching: false,
	titleContainer: '',
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
		setTitleContainer: (state, action) => {
			state.titleContainer = action.payload;
		},
	},
});

export const { toggleSidebar, setIsFetching, setTitleContainer } =
	uiSlice.actions;
export default uiSlice.reducer;
