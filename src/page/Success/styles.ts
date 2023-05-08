import styled from "styled-components";
import { COLORS } from "../../configuration/colors";

export const WrapperStyled = styled.section`
    display: flex;
    padding: 32px 160px;
    justify-content: space-around;
`

export const MessageStyled = styled.div`

    h2{
        font-weight: 800;
        font-size: 32px;
        color: ${COLORS.yellow};
        margin: 0;
    }
    p{
        margin: 4px;
    }
`
export const OrderInfoStyled = styled.div`
    padding: 40px;
    position: relative;
    background: linear-gradient(45deg, rgba(219, 172, 44), rgba(128, 71, 248));
    padding: 3px;
    border-radius: 6px 36px;
`
export const ItemsStyled = styled.div``

export const ContentOrderStyled = styled.div`
    background: #FAFAFA;
    padding: 2rem;
    border-radius: 6px 36px;
    display: grid;
    grid-gap: 32px;
`

type TypographyType = {
    backgroundColor: string
}
export const TypographyIconStyled = styled.p<TypographyType>`
    display: flex;
    align-items: center;
    gap:12px;
    svg{
        background-color: ${(props)=>props.backgroundColor};
        border-radius: 1000px;
        justify-content: center;
        align-items: center;
        padding: 8px;
    }

    span {
        font-weight: bold;
    }
`

export const ImageStyled = styled.div`
    display: flex;
    align-items: center;
    img{
        width: 500px;
    }
`