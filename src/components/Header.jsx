import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import ToggleSidebar from './ToggleSidebar';

export const Header = () => {
	return (
		<Box component='header' sx={{ px: 5, py: 2 }}>
			<Box
				component='section'
				sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
			>
				<ToggleSidebar />
				<Link href='/'>
					<Typography variant='h4' component='span'>
						MLAStore
					</Typography>
				</Link>
			</Box>
		</Box>
	);
};
