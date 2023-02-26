import { LocationType, ProductType } from "../types"

export type PropsProvider = {
    products: ProductType[];
    totalPrice: number; 
    amountProducts: number; 
    userLocation: LocationType | undefined;
    loadingSearchLocation: boolean;
    updateProductToCart: (idProduct: number, quantityOfProducts: number, stock: number) => void
}