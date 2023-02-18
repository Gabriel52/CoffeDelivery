import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { IS_EMPTY } from '../configuration/const';


import { API } from '../services/api';
import { ProductType } from '../types';
import { PropsProvider } from './types';


type PropsContext = {
    children: ReactNode;
    
}

const ProductsContext = createContext<PropsProvider>({} as PropsProvider);

export const ProductsProvider = ({children}:PropsContext) => {
    const [products, setProducts] = useState<ProductType[] | []>([]);
    const [totalPrice, setTotalPrice ] = useState<number>(0);
    const [amountProducts, setAmountProducts] = useState<number>(0)
    
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
        const totalPrice = 
            newProducts.filter(product => product.selectedQuantity !== IS_EMPTY)
                .map((product)=> product.selectedQuantity * product.price)
                .reduce((accumulator, currentValue )=> accumulator + currentValue)

        setTotalPrice(totalPrice)
        localStorage.setItem("totalPrice", JSON.stringify(totalPrice))   
    }

    const calculateTotalProducts = (newProducts: ProductType[])=>{
        const amountProducts = 
            newProducts.filter(product => product.selectedQuantity !== IS_EMPTY)
                .map((product)=> product.selectedQuantity)
                .reduce((accumulator, currentValue )=> accumulator + currentValue)

        setTotalPrice(amountProducts)
        localStorage.setItem("amountProducts", JSON.stringify(amountProducts))   
    }
    return (
        <ProductsContext.Provider value={{
            products,
            updateProductToCart,
            totalPrice
        }}>
            {children}
        </ProductsContext.Provider>
    )

}

export const useProducts = () => {
    const context = useContext(ProductsContext)

    return context
}