import React from 'react';
import { Intro } from './components/Intro';
import { WrapperStyled } from "./styled"

export const Home = (): JSX.Element=> {
    
    return (
        <WrapperStyled>
            <Intro />
        </WrapperStyled>
    )
}