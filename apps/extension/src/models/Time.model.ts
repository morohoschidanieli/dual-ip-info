import type { TimeFormats } from "@constants";

export type Time = (typeof TimeFormats)[number]["formatString"];
