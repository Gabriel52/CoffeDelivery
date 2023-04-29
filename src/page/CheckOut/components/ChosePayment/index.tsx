import { MdOutlineAttachMoney } from 'react-icons/md';

import { ChoseButtonStyled, ContainerStyled } from "./styled"

// MdOutlineAttachMoney
// AiFillCreditCard CREDIT CARD
// AiTwotoneBank BANK
export const ChosePayment = ():JSX.Element => {
    return (
        <ContainerStyled>
            <div>
                <MdOutlineAttachMoney />
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
            <ChoseButtonStyled>
                <button>
                    Cartão de crédito
                </button>
                <button>
                    Cartão de débito
                </button>
                <button>
                    Dinheiro
                </button>
            </ChoseButtonStyled>
        </ContainerStyled>
    )
}