import type { IPModel, LocationModel } from "@models";

export interface HistoryModel {
  id: string;
  ip: IPModel;
  timestamp: number;
  location?: LocationModel;
}
