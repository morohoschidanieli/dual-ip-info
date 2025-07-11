import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "@reducers/settingsReducer";

/**
 * This hook is used to sync the Redux state with i18n.
 * It ensures that the selected language from the extension settings
 * is reflected in the translation context.
 *
 * It is used specifically for synchronizing the language in background scripts,
 * so that notifications are shown in the correct, user-selected language.
 */
export const useSyncLanguage = () => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  useEffect(() => {
    dispatch(changeLanguage(i18n.resolvedLanguage ?? i18n.language));
  }, [i18n.resolvedLanguage, i18n.language, dispatch]);
};
