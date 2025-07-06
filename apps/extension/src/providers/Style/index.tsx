import { useEffect, type FC } from "react";
import type { RootState } from "@store";
import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  Theme,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "@reducers/settingsReducer";
import { themeConfiguration } from "@configuration";

export interface ChakraProps {
  children: React.JSX.Element;
}

export const StyleProvider: FC<ChakraProps> = ({ children }) => {
  const { useSystemTheme, theme } = useSelector(
    ({ settings }: RootState) => settings
  );
  const dispatch = useDispatch();

  const system = createSystem(defaultConfig, themeConfiguration(theme));

  useEffect(() => {
    if (useSystemTheme) {
      const isDarkThemePreferred = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      dispatch(
        changeTheme({
          theme: isDarkThemePreferred ? "dark" : "light",
          isManual: false,
        })
      );
    }

    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = ({ matches }: MediaQueryListEvent) => {
      if (useSystemTheme) {
        dispatch(
          changeTheme({ theme: matches ? "dark" : "light", isManual: false })
        );
      }
    };

    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, [useSystemTheme, dispatch]);

  return (
    <ChakraProvider value={system}>
      <Theme style={{ height: "100%" }} appearance={theme}>
        {children}
      </Theme>
    </ChakraProvider>
  );
};
