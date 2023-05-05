import React, { useEffect } from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { Input, Spacing } from '../../../../components';
import { COLORS } from '../../../../configuration/colors';

import { 
    BoxAddressStyled, 
    ButtonStyled, 
    ContentTitleBoxStyled, 
    FieldsAddressStyled, 
    GroupInputStyled, 
    TiTleStyled, 
    TypographyStyled 
} from './styled';
import { useFormAddress } from './useFormAddress';
import { useProducts } from '../../../../Provider';

const ERROR_MESSAGE_CEP =  'Por favor coloque um CEP valido'

export const FormAddress = ()=> {
    const { handleCepChange, cep, isValidCep } = useFormAddress()
    const { handleSearchCep, infoAddress} = useProducts()
    
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
                    <div style={{display: 'flex', gridGap: '8px'}}>
                        <Input 
                            width="250px"
                            name="cep" 
                            type="number" 
                            placeholder='Coloque os números do seu CEP'
                            value={cep}
                            isError={!isValidCep}
                            errorMessage={ERROR_MESSAGE_CEP}
                            onChange={handleCepChange}
                        />
                        <ButtonStyled 
                            type="button" 
                            disabled={!isValidCep}
                            onClick={()=> handleSearchCep(cep)}
                        >
                            Buscar CEP
                        </ButtonStyled>
                    </div>
                    <Spacing type="margin" top="16px">
                        <Input
                            disabled
                            width='96%'
                            name="street" 
                            type="text" 
                            placeholder='Rua'
                            value={infoAddress && infoAddress.logradouro}
                        />
                    </Spacing>
                    <Spacing type="margin" top="16px">
                        <GroupInputStyled gridTemplateColumns='30% 60%' gap="6%">
                            <Input
                                disabled
                                name="houseNumber" 
                                type="number" 
                                placeholder='Número'
                                value={infoAddress && infoAddress.gia}
                            />
                            <Input
                                disabled
                                name="complement" 
                                type="text" 
                                placeholder='Complemento'
                                value={infoAddress && infoAddress.complemento}
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
                                value={infoAddress && infoAddress.bairro}
                            />
                            <Input
                                disabled
                                name="city" 
                                type="text" 
                                placeholder='Cidade'
                                value={infoAddress && infoAddress.localidade}
                            />
                            <Input
                                disabled
                                name="uf" 
                                type="text" 
                                placeholder='UF'
                                value={infoAddress && infoAddress.uf}
                            />
                        </GroupInputStyled>
                    </Spacing>
                </FieldsAddressStyled>
            </BoxAddressStyled>
        </div>
    )
}
