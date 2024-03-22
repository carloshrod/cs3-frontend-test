import ProductsTable from '@/components/ProductsTable';
import { fetchProducts } from '@/features/productSLice';
import { Box, Grid } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
	const sidebarFull = true;

	const { products } = useSelector(state => state.products);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProducts());
	}, []);

	return (
		<Box
			component='main'
			className={`main ${!sidebarFull ? '' : 'main--left'}`}
			id={!sidebarFull ? '' : 'right'}
		>
			<Grid container spacing={3} py={2}>
				<Grid item xs={12}>
					<ProductsTable rows={products} />
				</Grid>
			</Grid>
		</Box>
	);
}
