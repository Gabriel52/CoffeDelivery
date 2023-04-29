import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { IS_EMPTY, PERMISSION_ENABLED_LOCATION } from '../configuration/const';


import { API } from '../services/api';
import { get } from '../services/searchLocation/get';
import { LocationType, ProductType } from '../types';
import { PropsProvider } from './types';


type PropsContext = {
    children: ReactNode;
    
}

const ProductsContext = createContext<PropsProvider>({} as PropsProvider);

export const ProductsProvider = ({children}:PropsContext) => {
    const [products, setProducts] = useState<ProductType[] | []>([]);
    const [totalPrice, setTotalPrice ] = useState<number>(0);
    const [amountProducts, setAmountProducts] = useState<number>(0)
    const [userLocation, setUserLocation] = useState<LocationType | null>()
    const [loadingSearchLocation, setLoadingSearchLocation] = useState<boolean>(true);
    useEffect(()=>{
        const getLocation = async ()=> {
            navigator.permissions.query({name: 'geolocation'}).then((result)=>{
                if(result.state !== PERMISSION_ENABLED_LOCATION){
                    toast.error("Não conseguimos te localizar")
                    setUserLocation(null)
                    setLoadingSearchLocation(false)
                }else {
                    navigator.geolocation.getCurrentPosition(async (position) =>{
                        const response = await get(
                            {
                                latitude: position.coords.latitude, 
                                longitude: position.coords.longitude
                            }
                        )
                        if(response.error){
                            toast.error("Não conseguimos te localizar")
                            setUserLocation(null)
                            setLoadingSearchLocation(false)
                            return
                        }
                        const data: LocationType = {
                            country: response.data.address.country,
                            state: response.data.address.state
                        }
                        setUserLocation(data)
                        setLoadingSearchLocation(false)
                    })
                }
            })
        }
        getLocation()
    },[])    
    useEffect(()=> {
        const productsLocal = localStorage.getItem('products');
        const totalProductsLocal = localStorage.getItem('totalPrice');
        const amountProductsLocal = localStorage.getItem('amountProducts');

        const fetchData = async () => {
            const { data } = await API.get('coffees')
            setProducts(data)
        }
        if(!!productsLocal){
            setProducts(JSON.parse(productsLocal))
            setTotalPrice(Number(totalProductsLocal))
            setAmountProducts(Number(amountProductsLocal))
            return
        }
        fetchData()
    },[])
    const updateProductToCart = (
        idProduct: number, 
        quantityOfProducts: number, 
        stock: number
    ) => {
        if(quantityOfProducts < 0 ){
            return
        }
        else if(quantityOfProducts > stock){
            toast.warning("Você atingiu o numero máximo deste produto")
            return
        }
        const newProducts:ProductType[] = products.map((products)=>{
            return {
                ...products,
                selectedQuantity: idProduct === products.id 
                    ? quantityOfProducts : products.selectedQuantity
            }
        } )
        setProducts(newProducts)
        calculateTotalProducts(newProducts)
        calculateTotalPrice(newProducts)

        localStorage.setItem("products", JSON.stringify(newProducts))   
    }

    const calculateTotalPrice = (newProducts: ProductType[])=>{
        const itemsProduct = newProducts.filter(product => product.selectedQuantity !== IS_EMPTY)
        if(itemsProduct?.length !== IS_EMPTY){
            const totalPrice = 
                itemsProduct
                    .map((product)=> product.selectedQuantity * product.price)
                    .reduce((accumulator, currentValue )=> accumulator + currentValue)
            setTotalPrice(totalPrice)
            localStorage.setItem("totalPrice", JSON.stringify(totalPrice))   
        }else{
            setTotalPrice(IS_EMPTY)
            localStorage.setItem("totalPrice", JSON.stringify(IS_EMPTY))  
        }
    }

    const calculateTotalProducts = (newProducts: ProductType[])=>{
        const itemsProducts = 
            newProducts.filter(product => product.selectedQuantity !== IS_EMPTY)
        if(itemsProducts.length !== IS_EMPTY ){
            const amountProducts = 
                itemsProducts
                    .map((product)=> product.selectedQuantity)
                    .reduce((accumulator, currentValue )=> accumulator + currentValue)
    
            setAmountProducts(amountProducts)
            localStorage.setItem("amountProducts", JSON.stringify(amountProducts))   
        }else{
            setAmountProducts(IS_EMPTY)
            localStorage.setItem("amountProducts", JSON.stringify(IS_EMPTY))   
        }

    }
    return (
        <ProductsContext.Provider value={{
            products,
            updateProductToCart,
            totalPrice,
            amountProducts,
            userLocation,
            loadingSearchLocation
        }}>
            {children}
        </ProductsContext.Provider>
    )

}

export const useProducts = () => {
    const context = useContext(ProductsContext)

    return context
}