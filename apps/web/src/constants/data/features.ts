import type { FeatureModel } from "@models";
import { CiMapPin } from "react-icons/ci";
import { FaHistory } from "react-icons/fa";
import { FaEarthAfrica, FaHouseFlag } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { MdAutoDelete, MdPrivacyTip } from "react-icons/md";

export const FEATURES: FeatureModel[] = [
  {
    title: "Instant IP Detection",
    description:
      "Track your public and private IP addresses, view a history of previously used IPs and more.",
    icon: CiMapPin,
    color: "green",
  },
  {
    title: "Location Lookup",
    description:
      "Tour public IP is mapped to a physical location (city & country), with flag icon and ISP details included.",
    icon: FaEarthAfrica,
    color: "blue",
  },
  {
    title: "IP History",
    description:
      "Keep track of your recent IP changes, with timestamps and full details — great for users with dynamic IPs or VPNs.",
    icon: FaHistory,
    color: "yellow",
  },
  {
    title: "Location Lookup",
    description:
      "Your public IP is mapped to a physical location (city & country), with flag icon and ISP details included.",
    icon: FaHouseFlag,
    color: "cyan",
  },
  {
    title: "Customizable Settings",
    description:
      "Choose between dark, light or system theme, set the number of stored IPs, enable/disable IPv6, and more.",
    icon: IoSettings,
    color: "gray",
  },
  {
    title: "Real-Time Notifications",
    description:
      "Get alerts when your IP address changes, even in background — stay informed about network changes.",
    icon: IoIosNotifications,
    color: "orange",
  },
  {
    title: "One-Click IP Management",
    description:
      "Delete specific IPs from your history with a single click — simple and intuitive.",
    icon: MdAutoDelete,
    color: "red",
  },
  {
    title: "Privacy-First",
    description:
      "No tracking, no ads, no data collection. Your network data stays local on your device.",
    icon: MdPrivacyTip,
    color: "purple",
  },
];
