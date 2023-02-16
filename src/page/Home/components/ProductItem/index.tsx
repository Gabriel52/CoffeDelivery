import React, { useEffect, useState } from 'react';

import { ProductType } from '../../../../types';
import { 
    CardStyled, 
    DescriptionStyled, 
    ListTagStyled, 
    ProductProfile, 
    TitleStyled 
} from './styled';

type Props = {
    productItem: ProductType
}

export const ProductItem = ({productItem}:Props) => {
    const [picture, setPicture] = useState<any>()
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
                    <p>{tag}</p>
                ))}
            </ListTagStyled>
            <TitleStyled>
                {productItem.name}
            </TitleStyled>
            <DescriptionStyled>
                {productItem.description}
            </DescriptionStyled>
        </CardStyled>
    )
}