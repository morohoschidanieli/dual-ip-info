import type { FC } from "react";
import { Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme, changeUseSystemTheme } from "@reducers/settingsReducer";
import type { RootState } from "@store";

export const App: FC = () => {
  const { useSystemTheme, theme } = useSelector(
    ({ settings }: RootState) => settings
  );
  const dispatch = useDispatch();

  return (
    <>
      <div>{`use system theme: ${useSystemTheme}`}</div>
      <div>{`theme: ${theme}`}</div>
      <Button onClick={() => dispatch(changeTheme({ theme: "dark" }))}>
        Change to dark
      </Button>
      <Button onClick={() => dispatch(changeTheme({ theme: "light" }))}>
        Change to light
      </Button>
      <Button onClick={() => dispatch(changeUseSystemTheme(true))}>
        Change to system
      </Button>
      <Button onClick={() => dispatch(changeUseSystemTheme(false))}>
        Disable sysmte
      </Button>
    </>
  );
};
