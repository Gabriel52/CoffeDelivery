import React from 'react';
import { FormAddress } from './components/FormAddress';
import { SelectedCarts } from './components/SelectedCarts';
import { WrapperCheckoutStyled } from './styled';

export const Checkout = ():JSX.Element=> {
    return (
        <WrapperCheckoutStyled>
            <div>
                <FormAddress/>
            </div>
            <div>
                <SelectedCarts/>
            </div>
        </WrapperCheckoutStyled>
    )
}   