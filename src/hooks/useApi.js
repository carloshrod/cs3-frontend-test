import axios from 'axios';
import { useSelector } from 'react-redux';

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
	} = useSelector(state => state.products);

	const getProducts = async () => {
		try {
			const query = `search?seller_id=179571326&offset=${offset}&limit=${limit}`;
			const res = await apiRequest(query);
			return res.data;
		} catch (error) {
			console.error(error.message);
		}
	};

	const getProductsByCategory = async categoryId => {
		try {
			if (categoryId) {
				const query = `search?seller_id=179571326&offset=${offset}&limit=${limit}&category=`;
				const res = await apiRequest(
					`${axios.defaults.baseURL}${query}${categoryId}`,
				);
				return res.data;
			}
		} catch (error) {
			console.error(error.message);
		}
	};

	return {
		getProducts,
		getProductsByCategory,
	};
};

export default useApi;
