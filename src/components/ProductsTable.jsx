import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material';
import ProductsTableRow from './ProductsTableRow';
import { headCells } from './consts';

const ProductsTable = ({ rows }) => {
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
									¡No data!
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</TableContainer>
		</Paper>
	);
};

export default ProductsTable;
