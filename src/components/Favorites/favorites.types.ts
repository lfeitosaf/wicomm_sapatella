import { Dispatch, SetStateAction } from "react";

export interface Favorite {
  id: number;
  src: string;
  alt: string;
  size: number;
  price: string;
  formerPrice: string;
  installments: string;
  setCartCount?: any;
}

export type SetCartCount = Dispatch<SetStateAction<number>>;

export type FavoritesProps = {
  setCartCount: SetCartCount;
};
