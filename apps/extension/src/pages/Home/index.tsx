import { type FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import {
  Box,
  EmptyState,
  Heading,
  HStack,
  IconButton,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaCircleInfo } from "react-icons/fa6";
import { RiSettings5Fill } from "react-icons/ri";
import { ERROR_MESSAGES, Routes } from "@constants";
import { ButtonWithTextFeedback, Header, Show } from "@components";
import { LastIP } from "@components";
import { insert, selectHistory } from "@reducers/historyReducer";
import { useGetPrivateIPQuery } from "@services/privateIpService";
import { useGetPublicIPQuery } from "@services/publicIpService";
import { useGetLocationQuery } from "@services/locationService";
import { countryCodeToFlagEmoji } from "@utils";
import {
  selectNumberOfIPsToShow,
  selectShowIPV6,
} from "@reducers/settingsReducer";
import { HomePageSkeleton } from "@pages";

export const HomePage: FC = () => {
  const history = useSelector(selectHistory);
  const showIPV6 = useSelector(selectShowIPV6);
  const numberOfIPsToShow = useSelector(selectNumberOfIPsToShow);

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    data: privateIP,
    isLoading: isLoadingPrivateIP,
    isSuccess: isPrivateIPSuccess,
  } = useGetPrivateIPQuery();
  const {
    data: publicIP,
    isLoading: isLoadingPublicIP,
    isSuccess: isPublicIPSuccess,
  } = useGetPublicIPQuery();
  const {
    data: location,
    isLoading: isGetLocationLoading,
    isSuccess: isGetLocationSuccess,
  } = useGetLocationQuery();

  const isLoading =
    isLoadingPrivateIP || isLoadingPublicIP || isGetLocationLoading;
  const isSuccess =
    isPrivateIPSuccess && isPublicIPSuccess && isGetLocationSuccess;

  useEffect(() => {
    if (isSuccess)
      dispatch(
        insert({
          ip: {
            v4: {
              private: privateIP?.v4,
              public: publicIP?.v4 ?? location?.ip,
            },
            v6: { private: privateIP?.v6, public: publicIP?.v6 },
          },
          location,
        })
      );
  }, [privateIP, publicIP, location, dispatch, isSuccess]);

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
          <Show when={location !== undefined}>
            <HStack>
              <Text>
                {countryCodeToFlagEmoji(location?.country_code ?? "en")}
              </Text>
              <Text> {`${location?.country}, ${location?.city}`}</Text>
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
          fontSize="lg"
        >
          <Show when={!showIPV6}>
            <Stack>
              <Text fontWeight="bold">{`${t("yourPublicIP")}: `}</Text>
              <ButtonWithTextFeedback
                title={t("copyToClipboard")}
                width="100%"
                loading={isLoading}
                feedback={`${t("copiedToClipboard")} 🚀`}
                onClick={() =>
                  handleCopyToClipboard(publicIP?.v4 ?? location?.ip)
                }
              >
                {publicIP?.v4 ?? location?.ip}
              </ButtonWithTextFeedback>
            </Stack>
          </Show>
          <Show when={showIPV6}>
            <Stack>
              <Text fontWeight="bold">{`${t("yourPublicIPv6")}: `}</Text>
              <ButtonWithTextFeedback
                title={t("copyToClipboard")}
                width="100%"
                loading={isLoading}
                feedback={`${t("copiedToClipboard")} 🚀`}
                onClick={() => handleCopyToClipboard(publicIP?.v6)}
              >
                {publicIP?.v6}
              </ButtonWithTextFeedback>
            </Stack>
          </Show>

          <Show when={!showIPV6}>
            <Stack>
              <Text fontWeight="bold">{`${t("yourPrivateIP")}: `}</Text>
              <ButtonWithTextFeedback
                title={t("copyToClipboard")}
                width="100%"
                loading={isLoading}
                feedback={`${t("copiedToClipboard")} 🚀`}
                onClick={() => handleCopyToClipboard(privateIP?.v4)}
              >
                {privateIP?.v4}
              </ButtonWithTextFeedback>
            </Stack>
          </Show>
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
            <Show when={!history.length}>
              <EmptyState.Root>
                <EmptyState.Content>
                  <VStack textAlign="center">
                    <EmptyState.Title>{t("emptyIpTitle")}</EmptyState.Title>
                    <EmptyState.Description>
                      {t("emptyIpDescription")}
                    </EmptyState.Description>
                  </VStack>
                </EmptyState.Content>
              </EmptyState.Root>
            </Show>
            {history.slice(0, numberOfIPsToShow).map((data) => (
              <LastIP key={data.id} data={data} />
            ))}
          </Stack>
        </Box>
      </Box>
    </>
  );
};
