import React, { useEffect, useState } from 'react';
import { FaCartArrowDown } from 'react-icons/fa';

import { COLORS } from '../../../../configuration/colors';
import { useProducts } from '../../../../Provider';
import { ProductType } from '../../../../types';
import { formatNumber } from '../../../../utils/formatNumber';
import { 
    ButtonBuyStyled,
    CardStyled, 
    ContentBuyStyled, 
    ContentCartStyled, 
    DescriptionStyled, 
    ListTagStyled, 
    PriceStyled, 
    ProductProfile, 
    TitleStyled 
} from './styled';

type Props = {
    productItem: ProductType
}

export const ProductItem = ({productItem}:Props) => {
    const [picture, setPicture] = useState<any>()
    const { updateProductToCart } = useProducts()
    const currencySettings = {
        language: 'pt-BR',
        value: productItem.price,
        style: 'currency',
        currency: 'BRL'
    }
    useEffect(()=>{
        const dynamicImport = ()=> {
            import(`../../../../assets/${productItem.photo}.svg`)
                .then((svg)=>setPicture(svg.default))
        }
        dynamicImport()
    },[])
    
    return (    
        <CardStyled>
            <ProductProfile src={picture} alt={productItem.photo} />
            <ListTagStyled>
                {productItem.tag.map((tag)=>(
                    <p key={tag}>{tag}</p>
                ))}
            </ListTagStyled>
            <TitleStyled>
                {productItem.name}
            </TitleStyled>
            <DescriptionStyled>
                {productItem.description}
            </DescriptionStyled>
            <ContentBuyStyled>
                <PriceStyled>{formatNumber(currencySettings)}</PriceStyled>
                <ContentCartStyled>
                    <div>
                        <ButtonBuyStyled 
                            borderRadius='8px 0px 0px 8px'
                            onClick={()=> 
                                updateProductToCart(
                                    productItem.id, 
                                    productItem.selectedQuantity - 1, 
                                    productItem.stock
                                )}
                        >
                            -
                        </ButtonBuyStyled>
                        <span>
                            {productItem.selectedQuantity}
                        </span>
                        <ButtonBuyStyled 
                            borderRadius='0px 8px 8px 0px' 
                            onClick={()=> 
                                updateProductToCart(
                                    productItem.id, 
                                    productItem.selectedQuantity + 1,
                                    productItem.stock
                                )}
                        >
                            +
                        </ButtonBuyStyled>
                    </div>
                    <div>
                        <FaCartArrowDown color={COLORS.white}/>
                    </div>
                </ContentCartStyled>
            </ContentBuyStyled>
        </CardStyled>
    )
}