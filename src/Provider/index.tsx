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

    
    useEffect(()=> {
        const productsLocal = localStorage.getItem('products');
        const totalProductsLocal = localStorage.getItem('totalProducts');

        const fetchData = async () => {
            const { data } = await API.get('coffees')
            setProducts(data)
        }
        if(!!productsLocal){
            setProducts(JSON.parse(productsLocal))
            setTotalPrice(Number(totalProductsLocal))
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
        calculateTotalPrice(newProducts)

        localStorage.setItem("products", JSON.stringify(newProducts))   
    }

    const calculateTotalPrice = (newProducts: ProductType[])=>{
        const totalProducts = 
            newProducts.filter(product => product.selectedQuantity !== IS_EMPTY)
                .map((product)=> product.selectedQuantity * product.price)
                .reduce((accumulator, currentValue )=> accumulator + currentValue)

        setTotalPrice(totalProducts)
        localStorage.setItem("totalProducts", JSON.stringify(totalProducts))   
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