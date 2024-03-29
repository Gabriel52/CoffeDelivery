import { useEffect, useState } from "react"
import { FaTrashAlt } from 'react-icons/fa'

import { ButtonCounter } from "../../../../components/ButtonCounter"
import { useProducts } from "../../../../Provider"
import { ProductType } from "../../../../types"
import { formatNumber } from "../../../../utils/formatNumber"
import { 
    ButtonRemoveItemStyled,
    ContentCartStyled, 
    GroupButtonsStyled, 
    GroupInformationStyled, 
    PriceStyled, 
    ProductProfile, 
    TitleStyled 
} from "./styled"
import { IS_EMPTY } from "../../../../configuration/const"

type Props = {
    productItem: ProductType
}

export const CartItems = ({productItem}:Props):JSX.Element => {
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

    const updateItem = (isRemoveItem: boolean, isDeleitem?: boolean ) => {
        const { id, stock } = productItem;
        if(isDeleitem){
            updateProductToCart(id, IS_EMPTY, stock);
        }else{
            const updatedQuantity = isRemoveItem ? 
                productItem.selectedQuantity - 1 :
                productItem.selectedQuantity + 1;
            
            updateProductToCart(id, updatedQuantity, stock);
        }
    };
    return (
        <ContentCartStyled>
            <div>
                <ProductProfile src={picture} alt={productItem.photo} />
            </div>
            <GroupInformationStyled>
                <div>
                    <TitleStyled>
                        {productItem.name}
                    </TitleStyled>
                    <GroupButtonsStyled >
                        <ButtonCounter 
                            updateItem={updateItem} 
                            itemAmount={productItem.selectedQuantity}
                        />
                        <ButtonRemoveItemStyled onClick={()=>{updateItem(false, true)}} >
                            <FaTrashAlt />
                            Remover
                        </ButtonRemoveItemStyled>
                    </GroupButtonsStyled>

                </div>
                <div>
                    <PriceStyled>
                        {formatNumber(productItem.price * productItem.selectedQuantity)}
                    </PriceStyled>
                </div>
            </GroupInformationStyled>
        </ContentCartStyled>
    )
}