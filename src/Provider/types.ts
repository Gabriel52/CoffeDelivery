import { LocationType, ProductType } from "../types"

export type PropsProvider = {
    products: ProductType[];
    totalPrice: number; 
    amountProducts: number; 
    userLocation: LocationType | undefined | null;
    loadingSearchLocation: boolean;
    updateProductToCart: (idProduct: number, quantityOfProducts: number, stock: number) => void
}