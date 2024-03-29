import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

import { carsReducer } from './cars_slice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { favoriteReducer } from './favorite_slice/favorite_slice';

const persistConfig = {
  key: 'cars',
  storage,
  whitelist: ['favorites'],
};

export const store = configureStore({
  reducer: {
    cars: persistReducer(persistConfig, carsReducer),
    favoriteCars: favoriteReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
