import type { FC } from "react";
import { HStack, Skeleton } from "@chakra-ui/react";

export const HeaderSkeleton: FC = () => {
  return (
    <HStack gap="2" height="50px" maxW="full" paddingY="">
      <Skeleton height="100%" width="30px" />
      <Skeleton height="100%" width="320px" />
      <Skeleton height="100%" width="80px" />
    </HStack>
  );
};
