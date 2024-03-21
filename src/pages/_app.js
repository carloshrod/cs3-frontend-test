import Header from '@/components/Header';
import '@/styles/globals.scss';
import { theme } from '@/theme';
import { ThemeProvider } from '@mui/material';

export default function App({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<Header />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
