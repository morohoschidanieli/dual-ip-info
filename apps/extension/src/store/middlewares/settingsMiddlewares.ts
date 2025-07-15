import { createListenerMiddleware } from "@reduxjs/toolkit";
import {
  changeCheckIPInBackground,
  changeShowPublicIPNotification,
} from "@reducers/settingsReducer";

export const settingsListener = createListenerMiddleware();

settingsListener.startListening({
  actionCreator: changeShowPublicIPNotification,
  effect: async (action, listenerApi) => {
    if (action.payload) {
      listenerApi.dispatch(changeCheckIPInBackground(true));
    }
  },
});
