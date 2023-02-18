import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';


import { API } from '../services/api';
import { ProductType } from '../types';
import { PropsProvider } from './types';


type PropsContext = {
    children: ReactNode;
    
}

const ProductsContext = createContext<PropsProvider>({} as PropsProvider);

export const ProductsProvider = ({children}:PropsContext) => {
    const [products, setProducts] = useState<ProductType[] | []>([])
    
    useEffect(()=> {
        const fetchData = async () => {
            const { data } = await API.get('coffees')
            setProducts(data)
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
    }


    return (
        <ProductsContext.Provider value={{
            products,
            updateProductToCart
        }}>
            {children}
        </ProductsContext.Provider>
    )

}

export const useProducts = () => {
    const context = useContext(ProductsContext)

    return context
}