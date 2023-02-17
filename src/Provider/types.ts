import { ProductType } from "../types"

export type PropsProvider = {
    products: ProductType[]
    updateProductToCart: (idProduct: number, quantityOfProducts: number) => void
}