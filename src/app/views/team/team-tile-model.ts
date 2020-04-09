export interface Tile {
  type: TileType;
  tileName?: string;
  empName?: string;
  empPosition?: string;
  empPhotoUrl?: string;
}

export enum TileType {
  EMPLOYEE = 'EMPLOYEE', EMPTY = 'EMPTY', HEADER = 'HEADER'
}
