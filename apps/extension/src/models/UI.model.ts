export type ValueChangeDetails<T = string | string[]> = {
  value: T;
};

export interface CheckedChangeDetails {
  checked: boolean;
}
