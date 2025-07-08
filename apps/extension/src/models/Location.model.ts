import type { CountryModel } from "@models";

export interface LocationModel {
  country?: CountryModel;
  city?: string;
  continent?: string;
  lat?: number;
  lon?: string;
}
