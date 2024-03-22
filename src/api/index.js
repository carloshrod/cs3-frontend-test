const { default: axios } = require('axios');

axios.defaults.baseURL =
	'https://api.mercadolibre.com/sites/MLA/search?seller_id=179571326&offset=0&limit=10';

const apiRequest = axios.create({
	timeout: 5000,
	headers: {
		'Content-Type': 'application/json',
	},
});

export const getProducts = async () => {
	try {
		const res = await apiRequest.get();
		return res.data.results;
	} catch (error) {
		console.error(error.message);
	}
};
