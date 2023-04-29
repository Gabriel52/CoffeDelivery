import React, { useEffect, useState } from 'react';
import { FaCartArrowDown } from 'react-icons/fa';
import { ButtonCounter } from '../../../../components/ButtonCounter';

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

export const ProductItem = ({productItem}:Props): JSX.Element => {
    const [picture, setPicture] = useState<any>()
    const { updateProductToCart } = useProducts()
    useEffect(() => {
        const fetchPicture = async () => {
            try {
                const { default: img } = await import(`../../../../assets/${productItem.photo}.svg`);
                setPicture(img);
            } catch (error) {
                console.error(`Failed to load image for product ${productItem.name}`, error);
            }
        };
        fetchPicture();
    }, [productItem.photo]);
    
    const updateItem = (shouldRemoveItem: boolean) => {
        const updatedQuantity = shouldRemoveItem ? 
            productItem.selectedQuantity - 1 :
            productItem.selectedQuantity + 1;
        
        const { id, stock } = productItem;
        
        updateProductToCart(id, updatedQuantity, stock);
    };

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
                <PriceStyled>{formatNumber(productItem.price)}</PriceStyled>
                <ContentCartStyled>
                    <ButtonCounter 
                        updateItem={updateItem} 
                        itemAmount={productItem.selectedQuantity}
                    />
                    <div>
                        <FaCartArrowDown color={COLORS.white}/>
                    </div>
                </ContentCartStyled>
            </ContentBuyStyled>
        </CardStyled>
    )
}