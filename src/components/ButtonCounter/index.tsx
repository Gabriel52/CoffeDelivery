import { ButtonBuyStyled, ContentAmountStyled } from "./styled"

type Props = {
    updateItem: (removeItem: boolean) => void
    itemAmount: number;
}

export const ButtonCounter = ({updateItem, itemAmount}:Props) => {
    return (
        <div>
            <ButtonBuyStyled 
                borderRadius='8px 0px 0px 8px'
                onClick={()=>updateItem(true)}
            >
                -
            </ButtonBuyStyled>
            <ContentAmountStyled>
                {itemAmount}
            </ContentAmountStyled>
            <ButtonBuyStyled 
                borderRadius='0px 8px 8px 0px' 
                onClick={()=>updateItem(false)}
            >
                +
            </ButtonBuyStyled>
        </div>
    )
}