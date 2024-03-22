import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '@/features/productSLice';

export const store = configureStore({
	reducer: {
		products: productsReducer,
	},
});
