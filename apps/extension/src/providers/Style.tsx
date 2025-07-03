import { useEffect, type FC } from "react";
import { ChakraProvider, defaultSystem, Theme } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@store";
import { changeTheme } from "@reducers/settingsReducer";

export interface ChakraProps {
  children: React.JSX.Element;
}

export const StyleProvider: FC<ChakraProps> = ({ children }) => {
  const { useSystemTheme, theme } = useSelector(
    ({ settings }: RootState) => settings
  );
  const dispatch = useDispatch();

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
    <ChakraProvider value={defaultSystem}>
      <Theme style={{ height: "100vh" }} appearance={theme}>
        {children}
      </Theme>
    </ChakraProvider>
  );
};
