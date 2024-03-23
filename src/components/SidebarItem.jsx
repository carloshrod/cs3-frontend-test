import useThunks from '@/hooks/useThunks';
import { IconButton, ListItemButton, ListItemText } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

export const SidebarItem = ({ item, open, handleOpen, depth }) => {
	const dispatch = useDispatch();
	const {
		query: { category_id },
	} = useRouter();
	const { fetchCategoriesInfo } = useThunks();

	const handleClick = event => {
		event.preventDefault();
		if (!open) {
			dispatch(fetchCategoriesInfo(item));
		}
		handleOpen();
	};

	return (
		<Link href={item.id}>
			<ListItemButton
				style={{
					paddingLeft: `${item?.path_from_root?.length > 1 ? '30px' : ''}`,
				}}
				selected={category_id === item.id}
			>
				<ListItemText
					primary={item.name}
					primaryTypographyProps={{
						style: {
							fontSize: '14px',
							paddingLeft: depth,
							fontWeight: item?.path_from_root?.length === 1 ? 700 : 500,
						},
					}}
				/>
				{item?.children_categories ? (
					<IconButton onClick={handleClick} sx={{ width: 30, height: 30 }}>
						{open ? <span>-</span> : <span>+</span>}
					</IconButton>
				) : null}
			</ListItemButton>
		</Link>
	);
};
