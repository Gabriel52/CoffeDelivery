import styled from "styled-components";
import { COLORS } from "../../configuration/colors";

type InputType ={
    width: string
}

export const InputStyled = styled.input<InputType>`
    width: ${(props)=>props.width};
    
    border: 2px solid ${COLORS.base_button};
    border-radius: 4px;
    background-color: ${COLORS.base_input};
    padding: 12px;

    font-size: 14px;
    font-weight: 400;
    color: ${COLORS.base_label};
`

export const ContentInputStyled = styled.div`
    display: grid;
    gap: 5px;

    span {
        color: ${COLORS.error};
    }
`