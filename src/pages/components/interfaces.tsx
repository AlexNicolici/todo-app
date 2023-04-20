export interface MovieInterface {
  id: number;
  name: string;
  release: number;
  author: string;
  type: string;
}

export interface FilterByReleaseInterface {
  id: number | string;
  ageStart: number | null;
  ageEnd: number | null;
}

export interface SortedKeyInterface {
  id: number;
  label: string;
}

export interface DropdownInterface {
  id: number;
  label: string;
}
