import type { FC } from "react";
import { Skeleton, SkeletonText, VStack } from "@chakra-ui/react";
import { HeaderSkeleton, LastIPSkeleton, Show } from "@components";

export interface HomePageSkeletonProps {
  isIPV6?: boolean;
}

export const HomePageSkeleton: FC<HomePageSkeletonProps> = ({
  isIPV6 = false,
}) => {
  return (
    <div>
      <VStack gap="8">
        <HeaderSkeleton />

        <VStack gap="3" width="full" display="flex" alignItems="flex-start">
          <SkeletonText width="200px" noOfLines={1} />
          <Skeleton height="40px" width="100%" />
          <Show when={!isIPV6}>
            <SkeletonText width="200px" noOfLines={1} />
            <Skeleton height="40px" width="100%" />
          </Show>
        </VStack>

        <VStack gap="3" width="full" display="flex" alignItems="flex-start">
          <SkeletonText width="200px" noOfLines={1} />
          <LastIPSkeleton />
          <LastIPSkeleton />
        </VStack>
      </VStack>
    </div>
  );
};
