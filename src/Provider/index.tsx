import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
// ========================================================================

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


    return (
        <ProductsContext.Provider value={{
            products,
        }}>
            {children}
        </ProductsContext.Provider>
    )

}

export const useProducts = () => {
    const context = useContext(ProductsContext)

    return context
}