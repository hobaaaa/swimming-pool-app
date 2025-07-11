import { StaticImageData } from "next/image";

export type AssetKey =
  | "logo"
  | "menu_black"
  | "close_black"
  | "havuz"
  | "pool"
  | "spa_sauna"
  | "send_icon"
  | "giriş";

export type Assets = Record<AssetKey, StaticImageData>;

export interface Service {
  icon: StaticImageData;
  title: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  id: string;
  bgImage: string;
}
