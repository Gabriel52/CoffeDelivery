import styled from "styled-components";
import { COLORS } from "../../../../configuration/colors";

export const ContainerStyled = styled.section`
    background-color: ${COLORS.gray_light};
    padding: 40px;
    border-radius: 8px;
`

export const ChoseButtonStyled = styled.div`
    display: flex;
    justify-content: space-around;
`

type ButtonType = {
    isActive: boolean
}

export const ButtonStyled = styled.button<ButtonType>`
    display: flex;
    align-items: center;
    grid-gap: 5px;
    background-color: ${(props)=> (props.isActive 
        ? COLORS.purple_light : COLORS.base_button)};
    border: ${(props)=> (props.isActive ?
    `1px solid ${COLORS.purple}` : '')};
`

export const DescriptionStyled = styled.div`
    display: flex;
    align-items: center;
`