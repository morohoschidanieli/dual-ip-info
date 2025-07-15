import type { LocationModel } from "@models";

export interface HistoryModel extends LocationModel {
  id: string;
  timestamp: number;
}
