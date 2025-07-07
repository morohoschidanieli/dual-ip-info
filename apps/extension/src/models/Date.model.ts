import type { DateFormats } from "@constants";

export type Date = (typeof DateFormats)[number]["formatString"];
