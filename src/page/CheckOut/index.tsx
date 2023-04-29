import React from 'react';
import { FormAddress } from './components/FormAddress';
import { SelectedCarts } from './components/SelectedCarts';
import { WrapperCheckoutStyled } from './styled';
import { ChosePayment } from './components/ChosePayment';
import { Spacing } from '../../components';

export const Checkout = ():JSX.Element=> {
    return (
        <WrapperCheckoutStyled>
            <div>
                <FormAddress/>
                <Spacing type="margin" top="12px">
                    <ChosePayment />
                </Spacing>
            </div>
            <div>
                <SelectedCarts/>
            </div>
        </WrapperCheckoutStyled>
    )
}   