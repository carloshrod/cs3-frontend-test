import { Box, Typography } from '@mui/material';

const Header = () => {
	return (
		<Box component='header' sx={{ px: 5, py: 2 }}>
			<section>
				<Typography variant='h4' component='span'>
					TechStore
				</Typography>
			</section>
		</Box>
	);
};

export default Header;
