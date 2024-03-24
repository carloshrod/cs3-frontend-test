import {
	Box,
	Pagination,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from '@mui/material';
import ProductsTableRow from './ProductsTableRow';
import { headCells } from './consts';
import { setPagination } from '@/features/dataSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

const ProductsTable = ({ rows, paging }) => {
	const [page, setPage] = useState(1);
	const { isFetching } = useSelector(state => state.ui);
	const dispatch = useDispatch();

	const handleChange = (_event, value) => {
		if (!isFetching) {
			const newOffset = (value - 1) * paging.limit;
			setPage(value);
			dispatch(setPagination(newOffset));
		}
	};

	const count = Math.ceil(paging?.total / paging?.limit);

	return (
		<Paper sx={{ width: '100%', height: '100%', mb: 2, px: 2, py: 1 }}>
			{rows.length > 0 ? (
				<>
					<Box
						spacing={2}
						sx={{
							p: 2,
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							gap: 2,
						}}
					>
						<Typography sx={{ fontSize: 14, fontWeight: 300 }}>
							Página: {page}
						</Typography>
						<Pagination count={count} page={page} onChange={handleChange} />
					</Box>
					<TableContainer>
						<Table sx={{ minWidth: 750 }} aria-labelledby='tableTitle'>
							<TableHead>
								<TableRow>
									{headCells.map(headCell => (
										<TableCell
											key={headCell.id}
											align={headCell.id === 'status' ? 'center' : 'inherit'}
											sx={{
												pl: `${headCell.id === 'status' ? '40px' : ''}`,
												fontWeight: 700,
											}}
										>
											{headCell.label}
										</TableCell>
									))}
								</TableRow>
							</TableHead>
							<TableBody>
								{rows.map((row, i) => {
									const labelId = `products-table-${i}`;
									return (
										<ProductsTableRow
											key={row.id}
											row={row}
											labelId={labelId}
										/>
									);
								})}
							</TableBody>
						</Table>
					</TableContainer>
					<Box
						spacing={2}
						sx={{
							p: 2,
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							gap: 2,
						}}
					>
						<Typography sx={{ fontSize: 14, fontWeight: 300 }}>
							Página: {page}
						</Typography>
						<Pagination count={count} page={page} onChange={handleChange} />
					</Box>
				</>
			) : (
				<Box sx={{ height: '100vh', display: 'flex' }}>
					<Typography
						component='p'
						sx={{
							m: 'auto',
							textAlign: 'center',
							fontSize: 50,
							fontWeight: 700,
						}}
					>
						¡No hay resultados para esta categoría!
					</Typography>
				</Box>
			)}
		</Paper>
	);
};

export default ProductsTable;
