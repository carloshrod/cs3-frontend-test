import { Box, Typography } from '@mui/material';
import Link from 'next/link';

export const Header = () => {
	return (
		<Box component='header' sx={{ px: 5, py: 2 }}>
			<section>
				<Link href='/'>
					<Typography variant='h4' component='span'>
						MLAStore
					</Typography>
				</Link>
			</section>
		</Box>
	);
};
