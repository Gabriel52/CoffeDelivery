import React from 'react';
import { FormAddress } from './components/FormAddress';
import { WrapperCheckoutStyled } from './styled';

export const Checkout = ():JSX.Element=> {
    return (
        <WrapperCheckoutStyled>
            <div>
                <FormAddress/>
            </div>
            <div>
                <FormAddress/>
            </div>
        </WrapperCheckoutStyled>
    )
}   