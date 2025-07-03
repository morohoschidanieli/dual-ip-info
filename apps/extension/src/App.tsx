import type { FC } from "react";
import { Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@store";

export const App: FC = () => {
  return (
    <>
      <Button>Toggle theme</Button>
    </>
  );
};
