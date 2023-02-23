import { ProductType } from "../types"

export type PropsProvider = {
    products: ProductType[];
    totalPrice: number; 
    amountProducts: number; 
    updateProductToCart: (idProduct: number, quantityOfProducts: number, stock: number) => void
}