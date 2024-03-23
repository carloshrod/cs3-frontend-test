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

	return {
		getProducts,
	};
};

export default useApi;
