import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { Input } from '../../../../components/Input/Input';
import { COLORS } from '../../../../configuration/colors';

import { BoxAddressStyled, ContentTitleBoxStyled, FieldsAddressStyled, TiTleStyled, TypographyStyled } from './styled';

export const FormAddress = ()=> {
    return(
        <div>
            <TiTleStyled>
                Complete seu pedido
            </TiTleStyled>
            <BoxAddressStyled>
                <ContentTitleBoxStyled>
                    <IoLocationOutline color={COLORS.purple_dark}/>
                    <div>
                        <TypographyStyled fontSize='16px' fontWeight='400' >
                            Endereço de Entrega
                        </TypographyStyled>
                        <TypographyStyled fontSize='14px' fontWeight='400'>
                            Informe o endereço onde deseja receber seu pedido
                        </TypographyStyled>
                    </div>
                </ContentTitleBoxStyled>
                <FieldsAddressStyled>
                        <Input 
                            width="200px"
                            name="cep" 
                            type="text" 
                            placeholder='CEP'
                        />
                    </FieldsAddressStyled>
            </BoxAddressStyled>
        </div>
    )
}