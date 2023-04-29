import { formatNumber } from "../../../../utils/formatNumber";
import { ContentStyled, PriceStyled, TypographyItemStyled } from "./styled"

type Props = {
    totalItems: number;
    deliveryPrice: number;
}

export const CartInformation = ({totalItems, deliveryPrice}:Props):JSX.Element => {
    return (
        <ContentStyled>
            <PriceStyled>
                <TypographyItemStyled>
                    Total de itens
                </TypographyItemStyled>
                <TypographyItemStyled>
                    {formatNumber(totalItems)}
                </TypographyItemStyled>
            </PriceStyled>
            <PriceStyled>
                <TypographyItemStyled>
                    Entrega
                </TypographyItemStyled>
                <TypographyItemStyled>
                    {formatNumber(deliveryPrice)}
                </TypographyItemStyled>
            </PriceStyled>
            <PriceStyled>
                <TypographyItemStyled 
                    fontWeight={800}
                    fontSize="20px"
                >
                    Total
                </TypographyItemStyled>
                <TypographyItemStyled>
                    {formatNumber(totalItems + deliveryPrice)}
                </TypographyItemStyled>
            </PriceStyled>
        </ContentStyled>
    )
}