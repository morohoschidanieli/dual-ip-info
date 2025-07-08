import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import settingsReducer from "@reducers/settingsReducer";
import historyReducer from "@reducers/historyReducer";

const rootReducer = combineReducers({
  settings: settingsReducer,
  history: historyReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["settings", "history"],
};

const persistedReducers = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistedStore = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
