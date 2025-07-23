import { type FC } from "react";
import { ChakraProvider, defaultConfig, Theme } from "@chakra-ui/react";
import { createSystem } from "@chakra-ui/react";

export interface ChakraProps {
  children: React.JSX.Element;
}

const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: `'Encode Sans Semi Expanded', sans-serif` },
        body: { value: `'Encode Sans Semi Expanded', sans-serif` },
      },
    },
  },
});

export const StyleProvider: FC<ChakraProps> = ({ children }) => {
  return (
    <ChakraProvider value={system}>
      <Theme style={{ height: "100%" }}>{children}</Theme>
    </ChakraProvider>
  );
};
