import { type FC } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import {
  Box,
  Heading,
  HStack,
  IconButton,
  Show,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaCircleInfo } from "react-icons/fa6";
import { RiSettings5Fill } from "react-icons/ri";
import { ERROR_MESSAGES, Routes } from "@constants";
import { HomePageSkeleton, IPV4, IPV6 } from "@pages";
import {
  selectNumberOfIPsToShow,
  selectShowIPV6,
} from "@reducers/settingsReducer";
import { useGetLocationQuery } from "@services/locationService";
import { Header } from "@components";
import { LastIP } from "@components";
import { selectHistory } from "@reducers/historyReducer";
import { countryCodeToFlagEmoji } from "@utils";

export const HomePage: FC = () => {
  const history = useSelector(selectHistory);
  const showIPV6 = useSelector(selectShowIPV6);
  const numberOfIPsToShow = useSelector(selectNumberOfIPsToShow);

  const { t } = useTranslation();
  const navigate = useNavigate();

  const { data, isLoading } = useGetLocationQuery();

  const handleNavigateToSettings = () => {
    navigate(Routes.settings, { replace: true });
  };

  const handleNavigateToInfo = () => {
    navigate(Routes.info, { replace: true });
  };

  const handleCopyToClipboard = async (ip: string | undefined) => {
    if (!navigator.clipboard || !ip) {
      console.error(ERROR_MESSAGES.CLIPBOARD_NOT_SUPPORTED);

      return;
    }

    try {
      await navigator.clipboard.writeText(ip);
    } catch (error) {
      console.error(ERROR_MESSAGES.COPY_CLIPBOARD(error));
    }
  };

  if (isLoading) {
    return <HomePageSkeleton isIPV6={showIPV6} />;
  }

  return (
    <>
      <Header>
        <Heading size="lg">
          <Show when={data}>
            <HStack>
              <Text>{countryCodeToFlagEmoji(data?.country_code ?? "en")}</Text>
              <Text> {`${data?.country}, ${data?.city}`}</Text>
            </HStack>
          </Show>
        </Heading>
        <HStack>
          <IconButton
            size="md"
            variant="plain"
            aria-label="Info"
            title={t("info")}
            onClick={handleNavigateToInfo}
          >
            <FaCircleInfo />
          </IconButton>
          <IconButton
            size="md"
            variant="plain"
            aria-label="Settings"
            title={t("settings")}
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
          fontSize="sm"
        >
          <Show
            when={showIPV6}
            fallback={
              <IPV4
                publicIP={data?.ip.v4.public}
                privateIP={data?.ip.v4.private}
                onCopyToClipboard={handleCopyToClipboard}
              />
            }
          >
            <IPV6
              publicIP={data?.ip.v6?.public}
              onCopyToClipboard={handleCopyToClipboard}
            />
          </Show>
        </Box>
        <Box
          id="general"
          display="flex"
          flexDirection="column"
          gap="3"
          fontSize="sm"
        >
          <Stack>
            <Show when={!!history.length}>
              <Text fontWeight="bold">{`${t("lastIPs")}: `}</Text>
              {history.slice(0, numberOfIPsToShow).map((data) => (
                <LastIP key={data.id} data={data} />
              ))}
            </Show>
          </Stack>
        </Box>
      </Box>
    </>
  );
};
