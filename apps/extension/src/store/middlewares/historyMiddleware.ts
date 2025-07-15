import { createListenerMiddleware } from "@reduxjs/toolkit";
import type { RootState } from "@store";
import { remove } from "@reducers/historyReducer";
import {
  changeAllowDeleteFromHistory,
  changeCanShowIPV6,
  changeShowIPV6,
  initialSettingsState,
} from "@reducers/settingsReducer";
import { locationApi } from "@services/locationService";
import { setCountryInChromeBadge } from "@utils";

export const locationListener = createListenerMiddleware();
export const removeListener = createListenerMiddleware();

locationListener.startListening({
  matcher: locationApi.endpoints.getLocation.matchFulfilled,
  effect: async (action, listenerApi) => {
    const mode = import.meta.env.MODE;
    const hasIPv6 = Boolean(action.payload.ip.v6?.public);

    if (mode === "production") {
      setCountryInChromeBadge(mode, action.payload?.country_code);
    }

    listenerApi.dispatch(changeCanShowIPV6(hasIPv6));

    if (!hasIPv6) {
      listenerApi.dispatch(changeShowIPV6(initialSettingsState.showIPV6));
    }
  },
});

removeListener.startListening({
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
