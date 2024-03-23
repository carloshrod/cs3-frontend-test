import {
	setCategories,
	setCategoriesInfo,
	setProducts,
	setProductsByCategory,
} from '@/features/dataSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';
import useApi from './useApi';

const useThunks = () => {
	const {
		getProducts,
		getProductsByCategory,
		getMainCategories,
		getCategoryInfo,
		getCategoriesInfo,
	} = useApi();
	const fetchProducts = createAsyncThunk(
		'data/fetchProducts',
		async (_, { dispatch }) => {
			const res = await getProducts();
			dispatch(setProducts(res));
		},
	);

	const fetchProductsByCategory = createAsyncThunk(
		'data/fetchProductsByCategory',
		async (categoryId, { dispatch }) => {
			const res = await getProductsByCategory(categoryId);
			dispatch(setProductsByCategory(res));
		},
	);

	const fetchCategories = createAsyncThunk(
		'data/fetchCategories',
		async (_, { dispatch }) => {
			const res = await getMainCategories();
			dispatch(setCategories(res));
		},
	);

	const fetchCategoriesInfo = createAsyncThunk(
		'data/fetchCategoriesInfo',
		async (item, { dispatch, getState }) => {
			const { categories } = getState().data;
			let childrenCategories;

			if (item.children_categories) {
				childrenCategories = item.children_categories;
			} else {
				const infoCategory = await getCategoryInfo(item.id);
				childrenCategories = infoCategory?.children_categories;
			}

			const childrenCategoriesInfo =
				await getCategoriesInfo(childrenCategories);

			const newData = categories.map(category => {
				if (category.id === item.id) {
					return {
						...category,
						children_categories: childrenCategoriesInfo,
					};
				}
				return category;
			});
			dispatch(setCategoriesInfo(newData));
		},
	);

	return {
		fetchProducts,
		fetchProductsByCategory,
		fetchCategories,
		fetchCategoriesInfo,
	};
};

export default useThunks;
