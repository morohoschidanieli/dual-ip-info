import { describe, expect, it } from "vitest";
import { countryCodeToFlagEmoji, localeMap } from "../src/utils";
import { enUS, ro, zhCN } from "date-fns/locale";

describe("localeMap", () => {
  it("should return correct locale for known keys", () => {
    expect(localeMap.en).toBe(enUS);
    expect(localeMap.ro).toBe(ro);
    expect(localeMap.zh).toBe(zhCN);
  });

  it("should contain all expected language keys", () => {
    const expectedKeys = [
      "en",
      "ro",
      "fr",
      "de",
      "es",
      "it",
      "pl",
      "ru",
      "zh",
      "ja",
      "ko",
      "pt",
      "nl",
    ];

    for (const key of expectedKeys) {
      expect(localeMap[key]).toBeDefined();
    }
  });
});

describe("countryCodeToFlagEmoji", () => {
  it("should return flag emoji for valid country codes", () => {
    expect(countryCodeToFlagEmoji("RO")).toBe("🇷🇴");
    expect(countryCodeToFlagEmoji("us")).toBe("🇺🇸");
    expect(countryCodeToFlagEmoji("jp")).toBe("🇯🇵");
    expect(countryCodeToFlagEmoji("KR")).toBe("🇰🇷");
  });

  it("should return fallback emoji when input is undefined", () => {
    expect(countryCodeToFlagEmoji(undefined)).toBe("🗺️");
  });

  it("should return placeholder characters for invalid input", () => {
    // 1-char or invalid length string
    expect(countryCodeToFlagEmoji("X")).toHaveLength(2);
    expect(countryCodeToFlagEmoji("XYZ")).toHaveLength(6); // unexpected length
  });
});
