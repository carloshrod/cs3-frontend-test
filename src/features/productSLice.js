import { getProducts } from '@/api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
	products: [],
};

export const fetchProducts = createAsyncThunk(
	'products/fetchProducts',
	async (_, { dispatch }) => {
		const res = await getProducts();
		dispatch(setProducts(res));
	},
);

export const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setProducts: (state, action) => {
			state.products = action.payload;
		},
	},
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
