import { createContext } from "react";
import { ProductT } from "./types";

const defaultValue = {
    productList: [],
    setProductList: (): void => undefined,
};

type CartContextT = {
    productList: ProductT[];
    setProductList: (value: ProductT[]) => void;
};

export const CartContext = createContext<CartContextT>(defaultValue);
