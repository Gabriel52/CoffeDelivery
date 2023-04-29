import styled from "styled-components";
import { COLORS } from "../../../../configuration/colors";

export const TiTleStyled = styled.h3`
    font-weight: 700;
    font-size: 18px;
`
export const BoxSelectedCartStyled = styled.div`
    background-color: ${COLORS.gray_light};
    padding: 40px;
    border-radius: 6px 44px;
    
    max-height: 550px;

`

export const ContentSelectedCartsStyled = styled.ul`
    list-style: none;
    overflow-y: scroll;
    max-height: 512px;
    padding: 0px;
    ::-webkit-scrollbar {
        width: 12px;               /* width of the entire scrollbar */
    }

    ::-webkit-scrollbar-track {
        background: #585757;        /* color of the tracking area */
    }

    ::-webkit-scrollbar-thumb {
        background-color: #d8d4d4;    /* color of the scroll thumb */
        border-radius: 20px;       /* roundness of the scroll thumb */
        border: 3px solid #d8d4d4;  /* creates padding around scroll thumb */
    }
`