import { Box, TableCell, TableRow } from '@mui/material';
import Image from 'next/image';

const ProductsTableRow = ({ row, labelId }) => {
	return (
		<TableRow
			hover
			tabIndex={-1}
			key={row.id}
			onClick={() => {
				window.open(row.permalink, '_blank', 'noopener,noreferrer');
			}}
			sx={{ cursor: 'pointer' }}
		>
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
					<Image
						src={row.thumbnail}
						alt={row.title}
						width='70'
						height='70'
						blurDataURL={row.thumbnail}
						placeholder='blur'
						loading='lazy'
					/>
				</Box>
			</TableCell>
		</TableRow>
	);
};

export default ProductsTableRow;
