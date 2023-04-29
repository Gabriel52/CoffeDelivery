import styled from "styled-components";
import { COLORS } from "../../../../configuration/colors";



type TypographyStyled = {
    fontSize?: string,
    fontWeight?: number,
}

export const TypographyItemStyled = styled.p<TypographyStyled>`
    font-weight: ${(props)=> (props.fontWeight ? props.fontWeight : 600)};
    color: ${COLORS.gray};
    font-size: ${(props)=> (props.fontSize ? props.fontSize : '16px')};
`

export const PriceStyled = styled.div`
    display: flex;
    justify-content: space-between;
`