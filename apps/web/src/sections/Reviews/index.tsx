import type { FC } from "react";
import { Flex, Heading, HStack, VStack } from "@chakra-ui/react";
import { REVIEWS, en } from "@constants";
import { Review } from "@components";

export const Reviews: FC = () => {
  return (
    <Flex wrap="wrap">
      <VStack>
        <Heading size="3xl">{en.reviews}</Heading>
        <HStack gap="6" maxWidth="5xl" wrap="wrap" justifyContent="center">
          {REVIEWS.map((review) => (
            <Review
              key={`${review.firstName}-${review.lastName}`}
              data={review}
            />
          ))}
        </HStack>
      </VStack>
    </Flex>
  );
};
