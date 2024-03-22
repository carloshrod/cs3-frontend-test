import { Avatar, Box, TableCell, TableRow } from '@mui/material';

const ProductsTableRow = ({ row, labelId }) => {
	return (
		<TableRow hover tabIndex={-1} key={row.id}>
			<TableCell component='th' id={labelId} scope='row' padding='normal'>
				{row.id}
			</TableCell>
			<TableCell component='th' id={labelId} scope='row' padding='normal'>
				{row.title}
			</TableCell>

			<TableCell
				component='th'
				id={labelId}
				scope='row'
				padding='normal'
				sx={{ whiteSpace: 'nowrap' }}
			>
				$ {row.price}
			</TableCell>

			<TableCell component='th' id={labelId} scope='row' padding='normal'>
				{row.permalink}
			</TableCell>

			<TableCell component='th' id={labelId} scope='row' padding='normal'>
				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<Avatar
						src={row.thumbnail}
						alt='Product image'
						variant='square'
						sx={{
							width: 70,
							height: 70,
							backgroundColor: '#f0f9ff',
							borderRadius: 2,
							mr: 1,
						}}
					></Avatar>
				</Box>
			</TableCell>
		</TableRow>
	);
};

export default ProductsTableRow;
