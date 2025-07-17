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
import {
  locationListener,
  removeListener,
} from "@middlewares/historyMiddlewares";
import { settingsListener } from "@middlewares/settingsMiddlewares";
import { chromeStorage } from "@storages/chrome";
import { locationApi } from "@services/locationService";

const mode = import.meta.env.MODE;

const rootReducer = combineReducers({
  settings: settingsReducer,
  history: historyReducer,
  [locationApi.reducerPath]: locationApi.reducer,
});

const persistConfig = {
  key: "root",
  /**
   * chrome storage is used because in production mode, we need to have the same
   * storage for application and for service worker(for example for checking if
   * the setting for notification is enabled or not)
   */
  storage: mode === "production" ? chromeStorage : storage,
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
    })
      .prepend(removeListener.middleware)
      .prepend(settingsListener.middleware)
      .prepend(locationListener.middleware)
      .concat(locationApi.middleware),
});

export const persistedStore = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
