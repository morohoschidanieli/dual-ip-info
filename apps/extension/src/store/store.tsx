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
import { privateIPApi } from "@services/privateIpService";
import { publicIPApi } from "@services/publicIpService";
import { locationApi } from "@services/locationService";
import { updateAllowDeleteFromHistory } from "@middlewares/updateAllowDeleteFromHistory";
import { updateCanShowIPV6 } from "@middlewares/updateCanShowIPV6";

const rootReducer = combineReducers({
  settings: settingsReducer,
  history: historyReducer,
  [privateIPApi.reducerPath]: privateIPApi.reducer,
  [publicIPApi.reducerPath]: publicIPApi.reducer,
  [locationApi.reducerPath]: locationApi.reducer,
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
    })
      .prepend(updateAllowDeleteFromHistory.middleware)
      .prepend(updateCanShowIPV6.middleware)
      .concat(privateIPApi.middleware)
      .concat(publicIPApi.middleware)
      .concat(locationApi.middleware),
});

export const persistedStore = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
