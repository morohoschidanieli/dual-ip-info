import { useState } from "react";
import { IP, Title } from "@components";

interface DetailProps {
  title: string;
  ip: string;
}

const Detail = ({ title, ip }: DetailProps) => {
  const [copyMessage, setCopyMessage] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopyMessage("Copied to clipboard!");
    setTimeout(() => {
      setCopyMessage(null);
    }, 500);
  };

  return (
    <div
      className={`w-full h-auto my-1 rounded-md text-zinc-600 font-bold cursor-pointer `}
      onClick={() => copyToClipboard(ip)}
      title="Copy to clipboard"
    >
      <Title>{title}</Title>
      <IP>{copyMessage === null ? ip : (copyMessage as string)}</IP>
    </div>
  );
};

export default Detail;
