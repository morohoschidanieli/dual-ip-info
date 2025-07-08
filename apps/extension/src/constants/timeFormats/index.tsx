export const TimeFormats = [
  {
    label: "24h - HH:mm:ss",
    example: "14:30:12",
    formatString: "HH:mm:ss",
  },
  {
    label: "24h - HH:mm",
    example: "14:30",
    formatString: "HH:mm",
  },
  {
    label: "12h - hh:mm:ss A",
    example: "02:30:12 PM",
    formatString: "hh:mm:ss a",
  },
  {
    label: "12h - hh:mm A",
    example: "02:30 PM",
    formatString: "hh:mm a",
  },
] as const;
