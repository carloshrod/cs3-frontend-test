import { Box, Skeleton, TableCell, TableRow } from '@mui/material';
import Image from 'next/image';
import { useSelector } from 'react-redux';

const ProductsTableRow = ({ row, labelId }) => {
	const { isFetching } = useSelector(state => state.ui);

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
				{isFetching ? (
					<Skeleton sx={{ width: 146, height: 70, borderRadius: 5 }} />
				) : (
					row.id
				)}
			</TableCell>

			<TableCell component='th' id={labelId} scope='row' padding='normal'>
				{isFetching ? (
					<Skeleton sx={{ width: 150, height: 70, borderRadius: 5 }} />
				) : (
					row.title
				)}
			</TableCell>

			<TableCell
				component='th'
				id={labelId}
				scope='row'
				padding='normal'
				sx={{ whiteSpace: 'nowrap' }}
			>
				{isFetching ? (
					<Skeleton sx={{ width: 120, height: 70, borderRadius: 5 }} />
				) : (
					`$ ${row.price}`
				)}
			</TableCell>

			<TableCell component='th' id={labelId} scope='row' padding='normal'>
				{isFetching ? (
					<Skeleton sx={{ width: 300, height: 70, borderRadius: 5 }} />
				) : (
					row.permalink
				)}
			</TableCell>

			<TableCell component='th' id={labelId} scope='row' padding='normal'>
				{isFetching ? (
					<Skeleton sx={{ width: 70, height: 70, borderRadius: 5 }} />
				) : (
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
				)}
			</TableCell>
		</TableRow>
	);
};

export default ProductsTableRow;
