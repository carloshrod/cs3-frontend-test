import { Box, List, Typography } from '@mui/material';
import { SidebarItemGroup } from './SidebarItemGroup';
import { categoriesMenu } from './consts';

export const Sidebar = () => {
	const sidebarFull = true;

	return (
		<Box
			component='aside'
			className={`sidebar ${sidebarFull ? 'sidebar--hide' : ''} `}
			id={!sidebarFull ? '' : 'show'}
		>
			<Typography sx={{ px: 2 }}>Categorías</Typography>
			<List component='nav' aria-label='main sidebar'>
				{categoriesMenu.map(item => (
					<SidebarItemGroup key={item.id} item={item} />
				))}
			</List>
		</Box>
	);
};
