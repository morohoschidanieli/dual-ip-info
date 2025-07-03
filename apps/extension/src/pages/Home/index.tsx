import { Button } from "@chakra-ui/react";
import { changeTheme } from "@reducers/settingsReducer";
import type { FC } from "react";
import { useDispatch } from "react-redux";

export const HomePage: FC = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div>Homepage</div>
      <Button onClick={() => dispatch(changeTheme({ theme: "dark" }))}>
        Change to dark
      </Button>
      <Button onClick={() => dispatch(changeTheme({ theme: "light" }))}>
        Change to light
      </Button>
    </>
  );
};
