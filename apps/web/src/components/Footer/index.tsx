import type { FC } from "react";
import { Text, Flex, Separator, Stack } from "@chakra-ui/react";
import { en } from "@constants";

export const Footer: FC = () => {
  const { VITE_APP_TITLE } = import.meta.env;
  return (
    <footer style={{ width: "100%" }}>
      <Separator />
      <Flex height="20" justifyContent="center">
        <Flex
          width="3xl"
          height="full"
          alignItems="center"
          justifyContent="center"
        >
          <Stack fontSize="sm" direction={{ base: "column", md: "row" }}>
            <Text>
              {` © ${new Date().getFullYear()} ${VITE_APP_TITLE}. ${en.allRightsReserved} `}
            </Text>
          </Stack>
        </Flex>
      </Flex>
    </footer>
  );
};
