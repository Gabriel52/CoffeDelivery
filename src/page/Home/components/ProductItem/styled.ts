import styled from "styled-components";
import { COLORS } from "../../../../configuration/colors";

export const CardStyled = styled.div`
    width: 256px;
    height: 310px;
    border-radius: 6px 36px;

    background-color: ${COLORS.gray_light};
    padding: 20px;
    position: relative;
    text-align: center;

`

export const ProductProfile = styled.img`
    position: absolute;
    top: -20px;
    right: 100px;
`

export const ListTagStyled = styled.div`
    margin-top: 40%;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;

    grid-gap: 8px;
    p {
        padding: 4px 8px;
        border-radius: 100px;
        background-color: ${COLORS.yellow_light};
        color: ${COLORS.yellow_dark};
        font-weight: 700;
    }
`

export const TitleStyled = styled.h4`
    margin-top: 16px;
    margin-BOTTOM: 8px;
    font-weight: 700;
    font-size: 20px;
`

export const DescriptionStyled = styled.p`
    margin: 0;
    font-weight: 700;
    font-size: 14px;
    color: ${COLORS.base_label};
`

export const ContentBuyStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 22px;
`

export const PriceStyled = styled.h5`
    font-size: 22px;
    font-weight: 800;
`

export const ContentCartStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    span {
        background-color: ${COLORS.base_button};
        padding: 7.5px;
    }
`

type ButtonProps = {
    borderRadius: string
} 

export const ButtonBuyStyled = styled.button<ButtonProps>`
    background-color: ${COLORS.base_button};
    border-radius: ${(props)=> props.borderRadius};
    color: ${COLORS.purple};
    font-weight: bold;
    padding: 0.4em 0.8em
`
