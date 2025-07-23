import packageJSON from "@root/package.json";

export const en = {
  description:
    "Track your public and private IP addresses, view a history of previously used IPs and more.",
  viewOnGitHub: "View on GitHub",
  addToChrome: "Add to Chrome",
  buyMeACoffee: "Buy me a coffee",
  features: "Features",
  reviews: "Reviews",
  donate: "Donate",
  instantIPDetection: "Instant IP Detection",
  instantIPDetectionDescription:
    "Track your public and private IP addresses, view a history of previously used IPs and more.",
  locationLookup: "Location Lookup",
  locationLookupDescription:
    "Tour public IP is mapped to a physical location (city & country), with flag icon and ISP details included.",
  ipHistory: "IP History",
  ipHistoryDescription:
    "Keep track of your recent IP changes, with timestamps and full details — great for users with dynamic IPs or VPNs.",
  locationBackup: "Location Lookup",
  locationBackupDescription:
    "Your public IP is mapped to a physical location (city & country), with flag icon and ISP details included.",
  customizableSettings: "Customizable Settings",
  customizableSettingsDescription:
    "Choose between dark, light or system theme, set the number of stored IPs, enable/disable IPv6, and more.",
  realTimeNotifications: "Real-Time Notifications",
  realTimeNotificationsDescription:
    "Get alerts when your IP address changes, even in background — stay informed about network changes.",
  oneClickIPManagement: "One-Click IP Management",
  oneClickIPManagementDescription:
    "Delete specific IPs from your history with a single click — simple and intuitive.",
  privacyFirst: "Privacy-First",
  privacyFirstDescription:
    "No tracking, no ads, no data collection. Your network data stays local on your device.",
  allRightsReserved: "All rights reserved.",
  contactMe: "Contact me",
  donateSubTitle: "Support the development of Dual IP Info",
  donateFirstParagraph:
    "Dual IP Info is completely free, respects your privacy, and doesn’tcollect or sell your data.",
  donateSecondParagraph:
    "Donations are the only way we can keep this project alive — your support helps us dedicate more time to improving Dual IP Info and brings us closer to our dream of working on it full-time.",
  contributeSubTitle: "Contribute on GitHub",
  contributeFirstParagraph:
    "Dual IP Info is open-source — and we’d love your help to make it even better!",
  contributeSecondParagraph:
    "Whether it's fixing bugs, adding new features, improving performance, or just suggesting ideas — every contribution counts.",
  privacySubTitle: "Free, open source and privacy-focused",
  privacyFirstParagraph:
    "Dual IP Info is built by an independent developer who values simplicity, transparency, and your privacy. You can use the app right away — no account, no tracking, no hidden data collection.",
  privacySecondParagraph:
    "Just a lightweight tool that shows your IPs, respects your privacy, and stays out of your way.",
  privacyPolicy: "Privacy policy",
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "Last updated: 23 July 2025",
    intro:
      "This Chrome extension is built with full respect for user privacy. Below you can find what data is collected, how it's used, and which permissions are required for the extension to work properly.",
    sections: {
      ip: {
        title: "📍 IP Addresses (IPv4 and IPv6)",
        content: [
          "The extension uses the public service ipwho.is to fetch information about your current IP address, such as country, city, and ISP.",
          "All requests are sent directly to the https://ipwho.is API and are not routed through any developer-controlled server.",
          "No location or IP-related data is permanently stored outside the browser.",
        ],
      },
      microphone: {
        title: "🎤 Microphone Access (for IPv6 support)",
        content: [
          "A third-party npm package used in the extension may temporarily require access to your microphone to detect advanced IPv6 configuration via WebRTC.",
          "The microphone is not used to record audio, and no audio data is stored or processed.",
          "Access is used strictly for technical network probing purposes.",
        ],
      },
      storage: {
        title: "📦 Data Stored in chrome.storage",
        content: [
          "Locally generated data (e.g., IP history or user preferences) is stored using chrome.storage.local.",
          "These values are only accessible within your browser and are never sent to the developer or any external server.",
        ],
      },
      permissions: {
        title: "⚙️ Permissions Used",
        content: [
          "This extension requests the following permissions:",
          "https://ipwho.is/ – to query IP information",
          "storage – to store IP history or settings",
          "microphone (optional) – for advanced IPv6 detection via WebRTC",
        ],
      },
      principles: {
        title: "🔐 Privacy Principles",
        content: [
          "No personal or identifiable information is collected.",
          "No cookies, trackers, or analytics tools are used.",
          "All data remains fully local to your browser.",
          "The source code is available publicly.",
        ],
      },
      contact: {
        title: "📧 Contact",
        content: `For any privacy-related questions or concerns, feel free to contact: ${packageJSON.author.email}`,
      },
    },
  },
};
