import type { FC } from "react";
import { Heading, Stack, VStack } from "@chakra-ui/react";
import { REVIEWS, en } from "@constants";
import { Review } from "@components";

export const Reviews: FC = () => {
  return (
    <VStack gap="6">
      <Heading size="3xl">{en.reviews}</Heading>
      <Stack
        direction={{ md: "row", base: "column" }}
        wrap="wrap"
        justifyContent="center"
        gap="6"
      >
        {REVIEWS.map((review) => (
          <Review
            key={`${review.firstName}-${review.lastName}`}
            data={review}
          />
        ))}
      </Stack>
    </VStack>
  );
};
