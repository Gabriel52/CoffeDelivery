import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { Input, Spacing } from '../../../../components';
import { COLORS } from '../../../../configuration/colors';

import { 
    BoxAddressStyled, 
    ContentTitleBoxStyled, 
    FieldsAddressStyled, 
    GroupInputStyled, 
    TiTleStyled, 
    TypographyStyled 
} from './styled';

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
                        width="250px"
                        name="cep" 
                        type="number" 
                        placeholder='Coloque os números do seu CEP'
                    />
                    <Spacing type="margin" top="16px">
                        <Input
                            disabled
                            width='96%'
                            name="street" 
                            type="text" 
                            placeholder='Rua'
                        />
                    </Spacing>
                    <Spacing type="margin" top="16px">
                        <GroupInputStyled gridTemplateColumns='30% 60%' gap="6%">
                            <Input
                                disabled
                                name="houseNumber" 
                                type="number" 
                                placeholder='Número'
                            />
                            <Input
                                disabled
                                name="complement" 
                                type="text" 
                                placeholder='Complemento'
                            />
                        </GroupInputStyled>
                    </Spacing>
                    <Spacing type="margin" top="16px">
                        <GroupInputStyled gridTemplateColumns='30% 36% 18%' gap="6%">
                            <Input
                                disabled
                                name="neighborhood" 
                                type="text" 
                                placeholder='Bairro'
                            />
                            <Input
                                disabled
                                name="city" 
                                type="text" 
                                placeholder='Cidade'
                            />
                            <Input
                                disabled
                                name="uf" 
                                type="text" 
                                placeholder='UF'
                            />
                        </GroupInputStyled>
                    </Spacing>
                </FieldsAddressStyled>
            </BoxAddressStyled>
        </div>
    )
}
