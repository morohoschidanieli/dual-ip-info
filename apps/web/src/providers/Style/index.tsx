import { type FC } from "react";
import { ChakraProvider, defaultSystem, Theme } from "@chakra-ui/react";

export interface ChakraProps {
  children: React.JSX.Element;
}

export const StyleProvider: FC<ChakraProps> = ({ children }) => {
  return (
    <ChakraProvider value={defaultSystem}>
      <Theme style={{ height: "100%" }}>{children}</Theme>
    </ChakraProvider>
  );
};
