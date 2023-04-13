import styled from "styled-components";
import { COLORS } from "../../configuration/colors";



type ButtonProps = {
    borderRadius: string
} 

export const ButtonBuyStyled = styled.button<ButtonProps>`
    background-color: ${COLORS.base_button};
    border-radius: ${(props)=> props.borderRadius};
    color: ${COLORS.purple};
    font-weight: bold;
    padding: 0.4em 0.8em;
`
export const ContentAmountStyled = styled.span`
        background-color: ${COLORS.base_button};
        padding: 7.5px;
`