import {
  createSelector,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { HistoryModel } from "@models";
import type { RootState } from "@store";
import { locationApi } from "@services/locationService";

const initialState: HistoryModel[] = [];

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<string>) => {
      return state.filter(({ id }) => id !== action.payload);
    },
  },
  extraReducers(builder) {
    builder.addMatcher(
      locationApi.endpoints.getLocation.matchFulfilled,
      (state, action) => {
        if (!state.length) {
          state.push({
            ...action.payload,
            id: crypto.randomUUID(),
            timestamp: Date.now(),
          });

          return;
        }

        const exists = state[0]?.ip.v4.public === action.payload.ip.v4.public;
        
        if (exists) {
          state[0].timestamp = Date.now();
          /**
           * Append private IP if it exists (e.g., when added from the service worker).
           */
          state[0].ip.v4.private = action.payload.ip.v4.private;

          return;
        }

        state.unshift({
          ...action.payload,
          id: crypto.randomUUID(),
          timestamp: Date.now(),
        });
      }
    );
  },
});

export const { remove } = historySlice.actions;

export const selectHistory = ({ history }: RootState) => history;
export const selectHistoryLength = createSelector(
  ({ history }: RootState) => history,
  (history) => history.length
);

export default historySlice.reducer;
