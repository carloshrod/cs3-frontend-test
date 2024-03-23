import MainContainer from '@/components/MainContainer';
import ProductsTable from '@/components/ProductsTable';
import useThunks from '@/hooks/useThunks';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ProductsByCategory = () => {
	const { products, paging } = useSelector(state => state.data);
	const {
		query: { category_id },
	} = useRouter();
	const dispatch = useDispatch();
	const { fetchProductsByCategory } = useThunks();

	useEffect(() => {
		dispatch(fetchProductsByCategory(category_id));
	}, [category_id, paging?.offset]);

	return (
		<MainContainer>
			<ProductsTable rows={products} paging={paging} />
		</MainContainer>
	);
};

export default ProductsByCategory;
