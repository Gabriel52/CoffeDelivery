import React, { memo } from 'react';

import { useProducts } from '../../../../Provider';
import { ProductItem } from '../ProductItem';
import { ContentListCardStyled, TitleStyled, WrapperStyled } from './styled';

export const ListProducts = memo(():JSX.Element => {
    const { products } = useProducts()
    return (
        <WrapperStyled>
            <TitleStyled>
                Nossos cafés
            </TitleStyled>
            <ContentListCardStyled>
                {products.map((product=>(
                    <ProductItem key={product.id} productItem={product} />
                )))}
            </ContentListCardStyled>
        </WrapperStyled>
    )
})
