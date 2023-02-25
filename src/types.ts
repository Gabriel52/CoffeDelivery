export type ProductType = {
    id: number,
    name: string,
    description: string,
    photo: string,
    price: number,
    tag: string[],
    stock: number,
    selectedQuantity: number,
}

export type LocationTYpe = {
    country: string,
    state: string
}