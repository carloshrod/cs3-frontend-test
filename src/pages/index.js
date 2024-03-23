import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainContainer from '@/components/MainContainer';
import ProductsTable from '@/components/ProductsTable';
import useThunks from '@/hooks/useThunks';

export default function Home() {
	const { products } = useSelector(state => state.products);
	const dispatch = useDispatch();
	const { fetchProducts } = useThunks();

	useEffect(() => {
		dispatch(fetchProducts());
	}, []);

	return (
		<MainContainer>
			<ProductsTable rows={products} />
		</MainContainer>
	);
}
