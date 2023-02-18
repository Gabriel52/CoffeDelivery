import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { Intro } from './components/Intro';
import { ListProducts } from './components/ListProducts';
import { WrapperStyled } from "./styled"

export const Home = (): JSX.Element=> {


    return (
        <WrapperStyled>
            <Intro />
            <ListProducts />
        </WrapperStyled>
    )
}