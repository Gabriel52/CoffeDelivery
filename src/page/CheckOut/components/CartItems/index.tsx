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

type Props = {
    productItem: ProductType
}

export const CartItems = ({productItem}:Props):JSX.Element => {
    const [picture, setPicture] = useState<any>()
    const { updateProductToCart } = useProducts()
    const currencySettings = {
        language: 'pt-BR',
        value: productItem.price * productItem.selectedQuantity,
        style: 'currency',
        currency: 'BRL'
    }
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
    console.log(productItem)
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
                        <ButtonRemoveItemStyled >
                            <FaTrashAlt />
                            Remover
                        </ButtonRemoveItemStyled>
                    </GroupButtonsStyled>

                </div>
                <div>
                    <PriceStyled>{formatNumber(currencySettings)}</PriceStyled>
                </div>
            </GroupInformationStyled>
        </ContentCartStyled>
    )
}