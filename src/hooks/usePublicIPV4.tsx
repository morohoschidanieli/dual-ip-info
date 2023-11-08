import { useEffect, useState } from "react";
import { publicIpv4 } from "public-ip";

const usePublicIPV4 = () => {
  const [ip, setIp] = useState<string | null>();
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchIp = async () => {
      try {
        const ip = await publicIpv4();

        setIp(ip);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error as Error);
      }
    };

    fetchIp();
  }, []);
  return [isLoading, ip, error];
};

export default usePublicIPV4;
