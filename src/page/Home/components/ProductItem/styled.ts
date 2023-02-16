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

export const ContentBuyStyled = styled.div``