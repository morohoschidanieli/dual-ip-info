import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "@reducers/settingsReducer";
import historyReducer from "@reducers/historyReducer";

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    history: historyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
