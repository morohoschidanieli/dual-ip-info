import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Date, SettingsModel, Theme, Time } from "@models";
import type { RootState } from "@store";

export const initialSettingsState: SettingsModel = {
  theme: "light",
  useSystemTheme: true,
  showIPV6: false,
  canShowIPV6: false,
  showPublicIPNotification: false,
  checkIPInBackground: false,
  numberOfIPsToShow: 3,
  allowDeleteFromHistory: false,
  dateFormat: "EEEE, d MMMM yyyy",
  timeFormat: "HH:mm:ss",
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState: initialSettingsState,
  reducers: {
    changeTheme: (
      state,
      action: PayloadAction<{ theme: Theme; isManual?: boolean }>
    ) => {
      const { theme, isManual = true } = action.payload;

      if (isManual) {
        state.useSystemTheme = false;
      }
      state.theme = theme;
    },
    changeUseSystemTheme: (state, action: PayloadAction<boolean>) => {
      state.useSystemTheme = action.payload;
    },
    changeShowIPV6: (state, action: PayloadAction<boolean>) => {
      state.showIPV6 = action.payload;
    },
    changeCanShowIPV6: (state, action: PayloadAction<boolean>) => {
      state.canShowIPV6 = action.payload;
    },
    changeShowPublicIPNotification: (state, action: PayloadAction<boolean>) => {
      state.showPublicIPNotification = action.payload;
    },
    changeNumberOfIPsToShow: (state, action: PayloadAction<3 | 6 | 9>) => {
      state.numberOfIPsToShow = action.payload;
    },
    changeCheckIPInBackground: (state, action: PayloadAction<boolean>) => {
      state.checkIPInBackground = action.payload;
    },
    changeDateFormat: (state, action: PayloadAction<Date>) => {
      state.dateFormat = action.payload;
    },
    changeTimeFormat: (state, action: PayloadAction<Time>) => {
      state.timeFormat = action.payload;
    },
    changeAllowDeleteFromHistory: (state, action: PayloadAction<boolean>) => {
      state.allowDeleteFromHistory = action.payload;
    },
    changeLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
  },
});

export const {
  changeTheme,
  changeUseSystemTheme,
  changeShowIPV6,
  changeCanShowIPV6,
  changeShowPublicIPNotification,
  changeNumberOfIPsToShow,
  changeDateFormat,
  changeTimeFormat,
  changeAllowDeleteFromHistory,
  changeLanguage,
  changeCheckIPInBackground,
} = settingsSlice.actions;

export const selectSettings = ({ settings }: RootState) => settings;
export const selectShowIPV6 = ({ settings }: RootState) => settings.showIPV6;
export const selectCanShowIPV6 = ({ settings }: RootState) =>
  settings.canShowIPV6;
export const selectNumberOfIPsToShow = ({ settings }: RootState) =>
  settings.numberOfIPsToShow;
export const selectAllowDeleteFromHistory = ({ settings }: RootState) =>
  settings.allowDeleteFromHistory;

export default settingsSlice.reducer;
