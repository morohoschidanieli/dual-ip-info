import { createListenerMiddleware } from "@reduxjs/toolkit";
import { insert } from "@reducers/historyReducer";
import { changeCanShowIPV6 } from "@reducers/settingsReducer";

export const updateCanShowIPV6 = createListenerMiddleware();

updateCanShowIPV6.startListening({
  actionCreator: insert,
  effect: async (action, listenerApi) => {
    const hasIPv6 = Boolean(action.payload.ip.v6?.public);
    listenerApi.dispatch(changeCanShowIPV6(hasIPv6));
  },
});
