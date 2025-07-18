import type { FC } from "react";
import { Text, Heading, HStack, RatingGroup, VStack } from "@chakra-ui/react";
import type { ReviewModel } from "@models";

export interface ReviewProps {
  data: ReviewModel;
}

export const Review: FC<ReviewProps> = ({ data }) => {
  const getFirstLetter = (string: string) => {
    return string.slice(0, 1).toUpperCase().concat(".");
  };

  return (
    <VStack
      width="sm"
      minHeight="10px"
      padding="4"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <HStack>
        <Heading>{`${data.lastName} ${getFirstLetter(data.firstName)}`}</Heading>
        <RatingGroup.Root readOnly defaultValue={data.rating} size="sm">
          <RatingGroup.HiddenInput />
          <RatingGroup.Control />
        </RatingGroup.Root>
      </HStack>

      <Text fontSize="sm">{data.review}</Text>
    </VStack>
  );
};
