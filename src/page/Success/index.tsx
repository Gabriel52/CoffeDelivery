import { 
    ContentOrderStyled,
    ImageStyled,
    ItemsStyled, 
    MessageStyled, 
    OrderInfoStyled, 
    TypographyIconStyled, 
    WrapperStyled 
} from './styles';
import { Spacing } from '../../components';
import { COLORS } from '../../configuration/colors';
import { MdLocationPin } from 'react-icons/md';
import { useProducts } from '../../Provider';
import LogoDelivery from '../../assets/delivery_logo.svg'

export const Success = ():JSX.Element=> {
    const { infoAddress } = useProducts()

    return (
        <WrapperStyled>
            <MessageStyled>
                    <h2>Uhu! Pedido confirmado</h2>
                    <p>Agora é só aguardar que logo o café chegará até você</p>
                    <Spacing type="margin" top="40px">
                        <OrderInfoStyled>
                            <ContentOrderStyled>
                                <ItemsStyled>
                                    <TypographyIconStyled backgroundColor={COLORS.purple}>
                                        <MdLocationPin color={COLORS.white}/>
                                        <p>
                                            Entrega em <span>{infoAddress?.logradouro}</span><br/>
                                            {infoAddress?.bairro} - {infoAddress?.localidade}, {infoAddress?.uf}
                                        </p>
                                    </TypographyIconStyled>
                                </ItemsStyled>
                                <ItemsStyled>
                                    <TypographyIconStyled backgroundColor={COLORS.purple}>
                                        <MdLocationPin color={COLORS.white}/>
                                        <p>
                                            Entrega em <span>{infoAddress?.logradouro}</span><br/>
                                            {infoAddress?.bairro} - {infoAddress?.localidade}, {infoAddress?.uf}
                                        </p>
                                    </TypographyIconStyled>
                                </ItemsStyled>
                                <ItemsStyled>
                                    <TypographyIconStyled backgroundColor={COLORS.purple}>
                                        <MdLocationPin color={COLORS.white}/>
                                        <p>
                                            Entrega em <span>{infoAddress?.logradouro}</span><br/>
                                            {infoAddress?.bairro} - {infoAddress?.localidade}, {infoAddress?.uf}
                                        </p>
                                    </TypographyIconStyled>
                                </ItemsStyled>
                            </ContentOrderStyled>
                        </OrderInfoStyled>
                    </Spacing>
            </MessageStyled>
            <ImageStyled>
                <img src={LogoDelivery} alt="Logo Delivery" />
            </ImageStyled>
        </WrapperStyled>
    )
}   