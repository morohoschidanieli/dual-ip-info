import type { FC } from "react";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import {
  Box,
  Button,
  Heading,
  HStack,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaCircleInfo } from "react-icons/fa6";
import { RiSettings5Fill } from "react-icons/ri";
import { Routes } from "@constants";
import { Header } from "@components";
import { LastIP } from "@components/LastIP";

export const HomePage: FC = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const handleNavigateToSettings = () => {
    navigate(Routes.settings, { replace: true });
  };

  const handleNavigateToInfo = () => {
    navigate(Routes.info, { replace: true });
  };

  return (
    <>
      <Header>
        <Heading size="lg">Romania, Cluj-Napoca</Heading>
        <HStack>
          <IconButton
            size="md"
            variant="plain"
            aria-label="Info"
            onClick={handleNavigateToInfo}
          >
            <FaCircleInfo />
          </IconButton>
          <IconButton
            size="md"
            variant="plain"
            aria-label="Settings"
            onClick={handleNavigateToSettings}
          >
            <RiSettings5Fill />
          </IconButton>
        </HStack>
      </Header>
      <Box display="flex" flexDirection="column" gap="6" paddingY="5">
        <Box
          id="general"
          display="flex"
          flexDirection="column"
          gap="3"
          fontSize="lg"
        >
          <Stack>
            <Text fontWeight="bold">{`${t("yourPublicIP")}: `}</Text>
            <Button width="100%">
              2a02:2f0e:3d12:7c00:1156:9423:cbaf:7cc7
            </Button>
          </Stack>
          <Stack>
            <Text fontWeight="bold">{`${t("yourPrivateIP")}: `}</Text>
            <Button width="100%">192.168.1.2</Button>
          </Stack>
        </Box>
        <Box
          id="general"
          display="flex"
          flexDirection="column"
          gap="3"
          fontSize="lg"
        >
          <Stack>
            <Text fontWeight="bold">{`${t("lastIPs")}: `}</Text>
            <LastIP />
            <LastIP />
            <LastIP />
            <LastIP />
            <LastIP />
          </Stack>
        </Box>
      </Box>
    </>
  );
};
