import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import '@/sass/Styles.scss';
import { theme } from '@/theme';
import { ThemeProvider } from '@mui/material';

export default function App({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<Header />
			<Sidebar />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
