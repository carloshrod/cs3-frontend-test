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
import { setPagination } from '@/features/productSLice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const ProductsTable = ({ rows, paging }) => {
	const [page, setPage] = useState(1);
	const dispatch = useDispatch();

	const handleChange = (_event, value) => {
		setPage(value);
		dispatch(setPagination((value - 1) * 10));
	};

	const count = Math.ceil(paging?.total / paging?.limit);

	return (
		<Paper sx={{ width: '100%', mb: 2, px: 2, py: 1 }}>
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
						{rows?.length > 0 ? (
							<>
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
							</>
						) : (
							<TableRow>
								<TableCell sx={{ fontSize: 50 }} align='center' colSpan={6}>
									¡No hay resultados para esta categoría!
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</TableContainer>
			<Box
				spacing={2}
				sx={{
					p: 2,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					gap: 2,
				}}
			>
				<Typography>Página: {page}</Typography>
				<Pagination count={count} page={page} onChange={handleChange} />
			</Box>
		</Paper>
	);
};

export default ProductsTable;
