import '@/sass/Styles.scss';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import { theme } from '@/theme';
import { persistor, store } from '@/app/store';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { PersistGate } from 'redux-persist/integration/react';

export default function App({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<Header />
					<Sidebar />
					<Component {...pageProps} />
				</PersistGate>
			</Provider>
		</ThemeProvider>
	);
}
