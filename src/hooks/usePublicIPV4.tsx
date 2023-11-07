import { useEffect, useState } from "react";
import { publicIpv4 } from "public-ip";

const usePublicIPV4 = () => {
  const [ip, setIp] = useState<string | null>();
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  useEffect(() => {
    const fetchIp = async () => {
      const ip = await publicIpv4();

      setIp(ip);
      setIsLoading(false);
    };

    fetchIp();
  }, []);
  return [isLoading, ip];
};

export default usePublicIPV4;
