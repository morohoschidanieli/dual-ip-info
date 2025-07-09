import { createListenerMiddleware } from "@reduxjs/toolkit";
import { remove } from "@reducers/historyReducer";
import { changeAllowDeleteFromHistory } from "@reducers/settingsReducer";
import type { RootState } from "@store";

export const updateAllowDeleteFromHistory = createListenerMiddleware();

updateAllowDeleteFromHistory.startListening({
  actionCreator: remove,
  effect: async (_action, listenerApi) => {
    const state = listenerApi.getState() as RootState;
    const { history } = state;

    if (history.length < 2) {
      listenerApi.dispatch(changeAllowDeleteFromHistory(false));
    }
  },
});
