import { ContentStyled, TypographyItemStyled } from "./styled"

type Props = {
    totalItems: number;
    deliveryPrice: number;
    total: number;
}

export const CartInformation = ({totalItems, deliveryPrice, total}:Props):JSX.Element => {
    return (
        <ContentStyled>
            <div>
                <TypographyItemStyled>
                    Total de itens
                </TypographyItemStyled>
                <TypographyItemStyled>
                    Total de itens
                </TypographyItemStyled>
            </div>
            <div>
                <TypographyItemStyled>
                    Entrega
                </TypographyItemStyled>
                <TypographyItemStyled>
                    Total de itens
                </TypographyItemStyled>
            </div>
            <div>
                <TypographyItemStyled>
                    Total
                </TypographyItemStyled>
                <TypographyItemStyled>
                    Total de itens
                </TypographyItemStyled>
            </div>
        </ContentStyled>
    )
}