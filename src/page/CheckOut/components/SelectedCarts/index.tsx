import { useNavigate } from "react-router-dom"
import { IS_EMPTY, PRICE_DELIVERY } from "../../../../configuration/const"
import { useProducts } from "../../../../Provider"
import { CartInformation } from "../CartInformation"
import { CartItems } from "../CartItems"
import { BoxSelectedCartStyled, ConfirmButtonStyled, ContentSelectedCartsStyled, TiTleStyled } from "./styled"

export const SelectedCarts = ():JSX.Element => {
    const { products, totalPrice } = useProducts()
    const navigate = useNavigate();

    const selectedProducts = 
        products.filter(product => product.selectedQuantity !== IS_EMPTY)

    return (
        <>
            <TiTleStyled>
                Cafés selecionados
            </TiTleStyled>
            <BoxSelectedCartStyled>
                <ContentSelectedCartsStyled>
                    {selectedProducts.map((product)=> (
                        <CartItems 
                            productItem={product} 
                            key={product.id}
                        />
                    ))}
                </ContentSelectedCartsStyled>
                <CartInformation totalItems={totalPrice} deliveryPrice={PRICE_DELIVERY} />
                <ConfirmButtonStyled onClick={()=>{navigate('/success')}}>
                    Confirmar
                </ConfirmButtonStyled>
            </BoxSelectedCartStyled>
        </>
    )
}