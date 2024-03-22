import '@/sass/Styles.scss';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import { theme } from '@/theme';
import { store } from '@/app/store';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';

export default function App({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<Header />
				<Sidebar />
				<Component {...pageProps} />
			</Provider>
		</ThemeProvider>
	);
}
