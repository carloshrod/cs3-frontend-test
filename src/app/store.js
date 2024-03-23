import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import dataReducer from '@/features/dataSlice';
import uiReducer from '@/features/uiSlice';
import storage from 'redux-persist/lib/storage';
import {
	persistReducer,
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';

const persistConfig = {
	key: 'root',
	storage,
	blacklist: ['ui'],
};

const persistedReducer = persistReducer(
	persistConfig,
	combineReducers({
		data: dataReducer,
		ui: uiReducer,
	}),
);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);
