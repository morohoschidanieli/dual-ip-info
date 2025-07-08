import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { HistoryModel, IPModel, LocationModel } from "@models";

const initialState: HistoryModel[] = [];

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    insert: (
      state,
      action: PayloadAction<{ ip: IPModel; location?: LocationModel }>
    ) => {
      if (!state.length) {
        state.push({
          ...action.payload,
          id: crypto.randomUUID(),
          timestamp: Date.now(),
        });

        return;
      }

      const exists = state[0].ip.v4.public === action.payload.ip.v4.public;

      if (exists) {
        state[0].timestamp = Date.now();

        return;
      }

      state.unshift({
        ...action.payload,
        id: crypto.randomUUID(),
        timestamp: Date.now(),
      });
    },
  },
});

export const { insert } = historySlice.actions;

export default historySlice.reducer;
