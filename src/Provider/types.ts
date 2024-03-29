import { InfoAddressType, LocationType, ProductType } from "../types"

export type PropsProvider = {
    products: ProductType[];
    totalPrice: number; 
    amountProducts: number; 
    userLocation: LocationType | undefined | null;
    loadingSearchLocation: boolean;
    activeButton: string;
    updateProductToCart: (idProduct: number, quantityOfProducts: number, stock: number) => void;
    handleSearchCep: (cep: string) => Promise<void>;
    handleChangeActiveButton: (activeButton: string) => void;
    infoAddress: InfoAddressType | undefined
}
