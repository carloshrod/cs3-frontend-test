import axios from 'axios';
import { useSelector } from 'react-redux';

const SELLER_ID = process.env.NEXT_PUBLIC_SELLER_ID;

axios.defaults.baseURL = 'https://api.mercadolibre.com/sites/MLA/';

const apiRequest = axios.create({
	timeout: 5000,
	headers: {
		'Content-Type': 'application/json',
	},
});

const useApi = () => {
	const {
		paging: { offset, limit },
	} = useSelector(state => state.data);

	const getProducts = async () => {
		try {
			const query = `search?seller_id=${SELLER_ID}&offset=${offset}&limit=${limit}`;
			const res = await apiRequest(query);
			return res.data;
		} catch (error) {
			console.error(error.message);
		}
	};

	const getProductsByCategory = async categoryId => {
		try {
			if (categoryId) {
				const query = `search?seller_id=${SELLER_ID}&offset=${offset}&limit=${limit}&category=${categoryId}`;
				const res = await apiRequest(`${axios.defaults.baseURL}${query}`);
				return res.data;
			}
		} catch (error) {
			console.error(error.message);
		}
	};

	const getMainCategories = async () => {
		try {
			const res = await apiRequest(`categories`);
			const categories = res.data;
			const categoriesWithChildren = await getCategoriesInfo(categories);
			return categoriesWithChildren;
		} catch (error) {
			console.error(error.message);
		}
	};

	const getCategoriesInfo = async categories => {
		try {
			const res = await Promise.all(
				categories.map(async category => {
					const childrenRes = await getCategoryInfo(category.id);
					return {
						...category,
						children_categories: childrenRes.children_categories,
						path_from_root: childrenRes.path_from_root,
					};
				}),
			);
			return res;
		} catch (error) {
			console.error(error.message);
		}
	};

	const getCategoryInfo = async categoryId => {
		const res = await apiRequest(
			`https://api.mercadolibre.com/categories/${categoryId}`,
		);

		return res.data;
	};

	return {
		getProducts,
		getProductsByCategory,
		getMainCategories,
		getCategoriesInfo,
		getCategoryInfo,
	};
};

export default useApi;
