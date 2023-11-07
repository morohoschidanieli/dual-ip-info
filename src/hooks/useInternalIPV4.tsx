import { useEffect, useState } from "react";
import { internalIpV4 } from "internal-ip";

const useInternalIPV4 = () => {
  const [ip, setIp] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  useEffect(() => {
    const fetchIPV4 = async () => {
      const ip = (await internalIpV4()) as string;

      setIp(ip);
      setIsLoading(false);
    };

    fetchIPV4();
  }, []);
  return [isLoading, ip];
};

export default useInternalIPV4;
