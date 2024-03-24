import { Box, List, Typography } from '@mui/material';
import { SidebarItemGroup } from './SidebarItemGroup';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useThunks from '@/hooks/useThunks';

export const Sidebar = () => {
	const { sidebarFull } = useSelector(state => state.ui);
	const { categories } = useSelector(state => state.data);
	const dispatch = useDispatch();
	const { fetchCategories } = useThunks();

	useEffect(() => {
		dispatch(fetchCategories());
	}, []);

	return (
		<Box
			component='aside'
			className={`sidebar ${sidebarFull ? '' : 'sidebar--hide'} `}
			id={sidebarFull ? '' : 'show'}
		>
			<Typography sx={{ p: 2, fontWeight: 700 }}>Categorías</Typography>
			<List
				component='nav'
				aria-label='main sidebar'
				sx={{ maxHeight: '100vh', overflow: 'auto', pr: 1 }}
			>
				{categories.map(item => (
					<SidebarItemGroup key={item.id} item={item} />
				))}
			</List>
		</Box>
	);
};
