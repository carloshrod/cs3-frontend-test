import MainContainer from '@/components/MainContainer';
import ProductsTable from '@/components/ProductsTable';
import useThunks from '@/hooks/useThunks';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ProductsByCategory = () => {
	const { products } = useSelector(state => state.products);
	const dispatch = useDispatch();
	const {
		query: { category_id },
	} = useRouter();
	const { fetchProductsByCategory } = useThunks();

	useEffect(() => {
		dispatch(fetchProductsByCategory(category_id));
	}, [category_id]);

	return (
		<MainContainer>
			<ProductsTable rows={products} />
		</MainContainer>
	);
};

export default ProductsByCategory;
