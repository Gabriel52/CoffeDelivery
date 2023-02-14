import styled from "styled-components";
import { COLORS } from "../../colors";

export const NavbarStyled = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 32px 160px;
    gap: 820px;
`

export const ActionsStyled = styled.div`
    display: flex;    
    column-gap: 12px;

    svg{
        width: 22px;
        height: 22px;
    }

`
export const TagLocationStyled = styled.p`
    display: flex;
    align-items: center;
    margin: 0;

    background-color: ${COLORS.purple_light};
    border-radius: 6px;
    padding: 8px;
`

export const TagCartStyled = styled.span`
    background-color: ${COLORS.yellow_light};
    padding: 8px;
    border-radius: 6px;

`