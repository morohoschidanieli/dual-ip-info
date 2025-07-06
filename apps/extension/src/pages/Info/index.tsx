import type { FC } from "react";
import { useNavigate } from "react-router";
import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  IconButton,
  Link,
  Text,
} from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { Routes } from "@constants";
import { Header } from "@components";

export const InfoPage: FC = () => {
  const navigate = useNavigate();

  const handleNavigateToHomepage = () => {
    navigate(Routes.root);
  };

  return (
    <>
      <Header>
        <IconButton
          size="md"
          variant="plain"
          aria-label="Back"
          onClick={handleNavigateToHomepage}
        >
          <FaArrowLeft />
        </IconButton>
        <Heading size="2xl">Info</Heading>
      </Header>
      <Box paddingY="4">
        <Heading size="xl" mb={2}>
          About this Extension
        </Heading>

        <Text fontSize="lg" mb={3}>
          This extension helps you view and manage your current IP address, view
          IP history, and receive notifications when your IP changes.
        </Text>

        <Text fontSize="lg" mb={2}>
          Developed by <b>Daniel M.</b> – version 2.0.0
        </Text>

        <HStack align="start" mt={4}>
          <Link width="100%" href="https://github.com/username/ip-extension">
            <Button width="100%" size="sm">
              <Icon>
                <FaGithub />
              </Icon>
              View on GitHub
            </Button>
          </Link>
          <Link width="100%" href="https://github.com/username/ip-extension">
            <Button width="100%" size="sm">
              <Icon>
                <FaGithub />
              </Icon>
              View on GitHub
            </Button>
          </Link>
        </HStack>
      </Box>
    </>
  );
};
