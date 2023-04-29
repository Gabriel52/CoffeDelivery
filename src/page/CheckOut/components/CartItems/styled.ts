import styled from "styled-components";
import { COLORS } from "../../../../configuration/colors";

export const ContentCartStyled = styled.li`
    list-style-type: none;
    display: flex;
    padding: 10px;
    column-gap: 20px;

    border-bottom: 1px solid ${COLORS.base_button};
`

export const ProductProfile = styled.img`
    top: -20px;
    right: 100px;
    width: 64px;
    height: 64px;
`
export const GroupInformationStyled = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

export const PriceStyled = styled.h5`
    font-size: 16px;
    font-weight: 700;
    margin: 0px;
    color: #574F4D;
`

export const TitleStyled = styled.p`
    margin: 0px;
`

export const ButtonRemoveItemStyled = styled.button`
    background-color: ${COLORS.base_button};
    border-radius: 6px;
    color: ${COLORS.purple};
    font-weight: bold;
    padding: 0.4em 0.8em;
`

export const GroupButtonsStyled = styled.div`
    display: flex;
    gap: 4px;
`