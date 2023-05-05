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

export type LocationType = {
    country: string,
    state: string
}

export type InfoAddressType = {
    cep: string,
    logradouro: string,
    complemento: string,
    bairro: string,
    localidade: string,
    uf: string,
    ibge: string,
    gia: string,
    ddd: string,
    siafi: string
}