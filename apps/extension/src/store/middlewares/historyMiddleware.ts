import { createListenerMiddleware } from "@reduxjs/toolkit";
import { insert, remove } from "@reducers/historyReducer";
import type { RootState } from "@store";
import {
  changeAllowDeleteFromHistory,
  changeCanShowIPV6,
  changeShowIPV6,
  initialSettingsState,
} from "@reducers/settingsReducer";
import { setCountryInChromeBadge } from "@utils";

export const insertMiddleware = createListenerMiddleware();
export const removeMiddleware = createListenerMiddleware();

insertMiddleware.startListening({
  actionCreator: insert,
  effect: async (action, listenerApi) => {
    const mode = import.meta.env.MODE;
    const hasIPv6 = Boolean(action.payload.ip.v6?.public);

    if (mode === "production") {
      setCountryInChromeBadge(
        import.meta.env.MODE,
        action.payload.location?.country_code
      );
    }

    listenerApi.dispatch(changeCanShowIPV6(hasIPv6));

    if (!hasIPv6) {
      listenerApi.dispatch(changeShowIPV6(initialSettingsState.showIPV6));
    }
  },
});

removeMiddleware.startListening({
  actionCreator: remove,
  effect: async (_action, listenerApi) => {
    const state = listenerApi.getState() as RootState;
    const { history } = state;

    if (history.length < 2) {
      listenerApi.dispatch(
        changeAllowDeleteFromHistory(
          initialSettingsState.allowDeleteFromHistory
        )
      );
    }
  },
});
