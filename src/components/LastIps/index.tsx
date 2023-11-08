import React from "react";

interface LastIpsProps {
  lastIps: IP[];
}

export interface IP {
  date: string;
  hour: string;
  internalIPV4?: string;
  publicIPV4?: string;
}

const LastIps: React.FC<LastIpsProps> = ({ lastIps }) => {
  return (
    <div className="flex flex-col text-black">
      <div className="self-start font-bold">Last IPs:</div>
      {lastIps.map((ip, index) => (
        <div
          key={index}
          className="border border-purple-800 w-full p-2 my-1 rounded-md"
        >
          <div className="flex flex-row justify-start font-bold">
            {ip.date} {ip.hour}
          </div>
          <div className="flex flex-row justify-between w-full">
            <div>
              <span className="font-bold">Public IP:</span> {ip.publicIPV4}
            </div>

            {ip.internalIPV4 ? (
              <div>
                <span className="font-bold">Private IP:</span> {ip.internalIPV4}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LastIps;
