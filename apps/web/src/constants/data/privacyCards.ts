import { IoShieldCheckmark } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import type { PrivacyCardModel } from "@models";

export const PRIVACY_CARDS: PrivacyCardModel[] = [
  {
    title: "Privacy by design",
    content: "No tracking, no analytics, no ads.",
    icon: IoShieldCheckmark,
    bg: "green",
    color: "green",
  },
  {
    title: "No account needed",
    content: "Start using it instantly",
    icon: MdAccountCircle,
    bg: "blue",
    color: "blue",
  },
  {
    title: "Fully open-source",
    content: "Inspect or contribute on GitHub",
    icon: FaGithub,
    bg: "gray",
    color: "gray",
  },
];
