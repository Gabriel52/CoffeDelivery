import { FaCartArrowDown } from 'react-icons/fa';
import { FiPackage } from 'react-icons/fi';
import { RiTimerFill } from 'react-icons/ri';
import { AiOutlineCoffee } from 'react-icons/ai'


import { 
    BannerStyled,
    BenefitsContent,
    ContainerStyled, 
    DescriptionStyled, 
    TitleStyled, 
    TypographyIconStyled
} from "./styled"
import BannerImage from '../../../../assets/banner.svg'
import { COLORS } from '../../../../colors';

export const Intro = ()=> {
    return (
        <ContainerStyled>
            <div>
                <TitleStyled>
                    Encontre o café perfeito para qualquer hora do dia
                </TitleStyled>
                <DescriptionStyled>
                    Com o Coffe Delivery você recebeu seu café onde estiver, a qualquer hora
                </DescriptionStyled>
                <BenefitsContent>
                    <div>
                        <TypographyIconStyled backgroundColor={COLORS.yellow_dark}>
                            <FaCartArrowDown color={COLORS.white}/>
                            Compra simples e segura
                        </TypographyIconStyled>
                        <TypographyIconStyled backgroundColor={COLORS.yellow}>
                            <RiTimerFill color={COLORS.white}/>
                            Entrega rápida e rastreada
                        </TypographyIconStyled>
                    </div>
                    <div>
                        <TypographyIconStyled backgroundColor={COLORS.gray}>
                            <FiPackage color={COLORS.white}/>
                            Embalagem mantém o café intacto
                        </TypographyIconStyled>
                        <TypographyIconStyled backgroundColor={COLORS.purple_light}>
                            <AiOutlineCoffee color={COLORS.white}/>
                            O café chega fresquinho até você
                        </TypographyIconStyled>
                    </div>
                </BenefitsContent>
            </div>
            <BannerStyled>
                <img src={BannerImage} alt="banner" />
            </BannerStyled>
        </ContainerStyled>
    )
}