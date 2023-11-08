import { useEffect, useState } from "react";
import { internalIpV4 } from "internal-ip";

const useInternalIPV4 = () => {
  const [ip, setIp] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchIPV4 = async () => {
      try {
        const ip = (await internalIpV4()) as string;

        setIp(ip);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error as Error);
      }
    };

    fetchIPV4();
  }, []);
  return [isLoading, ip, error];
};

export default useInternalIPV4;
