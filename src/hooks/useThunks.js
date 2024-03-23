import { setProducts } from '@/features/productSLice';
import { createAsyncThunk } from '@reduxjs/toolkit';
import useApi from './useApi';

const useThunks = () => {
	const { getProducts } = useApi();
	const fetchProducts = createAsyncThunk(
		'products/fetchProducts',
		async (_, { dispatch }) => {
			const res = await getProducts();
			dispatch(setProducts(res));
		},
	);

	return {
		fetchProducts,
	};
};

export default useThunks;
