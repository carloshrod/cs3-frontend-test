import '@/styles/globals.scss';
import { theme } from '@/theme';
import { ThemeProvider } from '@mui/material';

export default function App({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
