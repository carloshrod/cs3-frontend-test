import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '@/features/productSLice';
import uiReducer from '@/features/uiSlice';

export const store = configureStore({
	reducer: {
		products: productsReducer,
		ui: uiReducer,
	},
});
