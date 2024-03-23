import { setProducts, setProductsByCategory } from '@/features/productSLice';
import { createAsyncThunk } from '@reduxjs/toolkit';
import useApi from './useApi';

const useThunks = () => {
	const { getProducts, getProductsByCategory } = useApi();
	const fetchProducts = createAsyncThunk(
		'products/fetchProducts',
		async (_, { dispatch }) => {
			const res = await getProducts();
			dispatch(setProducts(res));
		},
	);

	const fetchProductsByCategory = createAsyncThunk(
		'products/fetchProductsByCategory',
		async (categoryId, { dispatch }) => {
			const res = await getProductsByCategory(categoryId);
			dispatch(setProductsByCategory(res));
		},
	);

	return {
		fetchProducts,
		fetchProductsByCategory,
	};
};

export default useThunks;
