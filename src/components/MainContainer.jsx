import { Box, Breadcrumbs, Grid, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const MainContainer = ({ children }) => {
	const { sidebarFull, titleContainer } = useSelector(state => state.ui);
	const { pathname } = useRouter();

	return (
		<Box
			component='main'
			className={`main ${sidebarFull ? '' : 'main--left'}`}
			id={sidebarFull ? '' : 'right'}
		>
			<Stack spacing={2}>
				<Breadcrumbs separator={'|'} aria-label='breadcrumb'>
					<Link key='1' href='/'>
						<Typography
							sx={{ fontWeight: 700, '&:hover': { color: '#252422' } }}
						>
							Home
						</Typography>
					</Link>
					{pathname !== '/' ? (
						<Typography key='2' sx={{ fontWeight: 700 }}>
							{titleContainer}
						</Typography>
					) : null}
				</Breadcrumbs>
			</Stack>
			<Grid container spacing={3} py={2}>
				<Grid item xs={12}>
					{children}
				</Grid>
			</Grid>
		</Box>
	);
};

export default MainContainer;
