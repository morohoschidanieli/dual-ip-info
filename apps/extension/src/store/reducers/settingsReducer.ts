import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type {
  ApplicationSettingsModel,
  Language,
  Theme,
} from "@models/ApplicationSettingsModel";

const initialState: ApplicationSettingsModel = {
  theme: "light",
  language: "English",
  showIPV6: false,
  showPublicIPNotification: false,
  showIconInToolbar: false,
  numberOfIPsToShow: 5,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
    changeLanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload;
    },
    changeShowIPV6: (state, action: PayloadAction<boolean>) => {
      state.showIPV6 = action.payload;
    },
    changeShowPublicIPNotification: (state, action: PayloadAction<boolean>) => {
      state.showPublicIPNotification = action.payload;
    },
    changeShowIconInToolbar: (state, action: PayloadAction<boolean>) => {
      state.showIconInToolbar = action.payload;
    },
    changeNumberOfIPsToShow: (state, action: PayloadAction<5 | 10>) => {
      state.numberOfIPsToShow = action.payload;
    },
  },
});

export const {
  changeTheme,
  changeLanguage,
  changeShowIPV6,
  changeShowPublicIPNotification,
  changeShowIconInToolbar,
  changeNumberOfIPsToShow,
} = settingsSlice.actions;

export default settingsSlice.reducer;
