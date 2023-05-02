import { MdOutlineAttachMoney } from 'react-icons/md';

import { ChoseButtonStyled, ContainerStyled, DescriptionStyled, ButtonStyled } from "./styled"
import { COLORS } from '../../../../configuration/colors';
import { AiFillCreditCard, AiTwotoneBank } from 'react-icons/ai';
import { useState } from 'react';

export const ChosePayment = ():JSX.Element => {
    const [activeButton, setActiveButton] = useState('withoutChoosing');
    
    const handleChangeActiveButton = (activeButton: string) => {
        setActiveButton(activeButton);
    }

    return (
        <ContainerStyled>
            <DescriptionStyled>
                <MdOutlineAttachMoney size={30} color={COLORS.purple} />
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </DescriptionStyled>
            <ChoseButtonStyled>
                <ButtonStyled 
                    isActive={activeButton === 'creditCard'}
                    onClick={()=>handleChangeActiveButton('creditCard')}
                >
                    <AiFillCreditCard size={20} color={COLORS.purple} />
                    Cartão de crédito
                </ButtonStyled>
                <ButtonStyled 
                    isActive={activeButton === 'debitCard'}
                    onClick={()=>handleChangeActiveButton('debitCard')}
                >
                    <AiTwotoneBank size={20} color={COLORS.purple} />
                    Cartão de débito
                </ButtonStyled>
                <ButtonStyled 
                    isActive={activeButton === 'money'}
                    onClick={()=>handleChangeActiveButton('money')}
                >
                    <MdOutlineAttachMoney size={20} color={COLORS.purple} />
                    Dinheiro
                </ButtonStyled>
            </ChoseButtonStyled>
        </ContainerStyled>
    )
}