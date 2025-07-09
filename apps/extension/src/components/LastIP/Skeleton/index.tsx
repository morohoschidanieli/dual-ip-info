import { HStack, Skeleton, SkeletonText } from "@chakra-ui/react";
import type { FC } from "react";

export const LastIPSkeleton: FC = () => {
  return (
    <HStack gap="2" height="60px" maxW="full" paddingY="">
      <Skeleton height="100%" width="80px" />
      <SkeletonText width="290px" height="25px" noOfLines={2} />
      <Skeleton height="100%" width="60px" />
    </HStack>
  );
};
