import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	products: [],
	paging: { total: 1, offset: 0, limit: 10 },
	categories: [],
};

export const dataSlice = createSlice({
	name: 'data',
	initialState,
	reducers: {
		setProducts: (state, action) => {
			state.products = action.payload.results;
			state.paging = action.payload.paging;
		},

		setProductsByCategory: (state, action) => {
			state.products = action.payload.results;
			state.paging = action.payload.paging;
		},

		setCategories: (state, action) => {
			state.categories = action.payload;
		},

		setCategoriesInfo: (state, action) => {
			state.categories = action.payload;
		},

		setPagination: (state, action) => {
			state.paging = { ...state.paging, offset: action.payload };
		},
	},
});

export const {
	setProducts,
	setProductsByCategory,
	setCategories,
	setCategoriesInfo,
	setPagination,
} = dataSlice.actions;
export default dataSlice.reducer;
