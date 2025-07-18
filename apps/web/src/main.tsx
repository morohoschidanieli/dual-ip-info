import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Stack, VStack } from "@chakra-ui/react";
import { Description, Features, Reviews } from "@sections";
import { StyleProvider } from "@providers";
import { Footer } from "@components";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StyleProvider>
      <Stack>
        <VStack
          gap="10"
          padding={{ base: "2", md: "10" }}
          alignSelf="center"
          maxWidth="5xl"
        >
          <Description />
          <Features />
          <Reviews />
        </VStack>
        <Footer />
      </Stack>
    </StyleProvider>
  </StrictMode>
);
