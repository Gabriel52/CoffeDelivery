import styled from "styled-components";
import { COLORS } from "../../../../configuration/colors";


export const TiTleStyled = styled.h3`
    font-weight: 700;
    font-size: 18px;
`

export const BoxAddressStyled = styled.section`
    background-color: ${COLORS.gray_light};
    padding: 40px;
    border-radius: 8px;
`

type TypographyType = {
    fontSize?: string;
    fontWeight?: string;
    lineHeight?: string;
    color?: string;
}

export const TypographyStyled = styled.p<TypographyType>`
    font-size: ${(props)=>(props.fontSize ? props.fontSize : '14px')};
    font-weight: ${(props)=>(props.fontWeight ? props.fontWeight : '500')};
    line-height: ${(props)=>(props.lineHeight ? props.lineHeight : 'normal')};
    color: ${(props)=>(props.color ? props.color : COLORS.black)};
    margin:0px;

`

export const ContentTitleBoxStyled = styled.div`
    display: flex;
    gap: 8px;
    margin-bottom: 32px;
`

export const FieldsAddressStyled = styled.form``

type GroupInputType = {
    gridTemplateColumns: string;
    gap?: string;
}

export const GroupInputStyled = styled.div<GroupInputType>`
    display: grid;
    grid-template-columns: ${(props)=> props.gridTemplateColumns};
    gap: ${(props)=> props.gap};
`


export const ButtonStyled = styled.button`
    color: ${COLORS.white};
    background-color: ${COLORS.yellow};
    transition: all 700ms;
    height: 44px;

    &:disabled {
        background-color: ${COLORS.gray};
        cursor: not-allowed;

        &:hover {
        filter: brightness(100%);
        }
    }

    &:hover {
        filter: brightness(50%);
    }
`;