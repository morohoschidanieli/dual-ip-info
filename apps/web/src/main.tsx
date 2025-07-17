import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Stack, VStack } from "@chakra-ui/react";
import { Description, Features, Reviews } from "@sections";
import { StyleProvider } from "@providers";
import { Footer } from "@components";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StyleProvider>
      <Stack gap="10">
        <VStack width="full" gap="4" justifyContent="center">
          <Description />
          <Features />
          <Reviews />
        </VStack>
        <Footer />
      </Stack>
    </StyleProvider>
  </StrictMode>
);
