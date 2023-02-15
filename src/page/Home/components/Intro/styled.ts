import styled from "styled-components";
import { IS_EMPTY } from "../../../../configuration/const";

type ContainerType = {
    defocused: string;
}

export const ContainerStyled = styled.div<ContainerType>`
    display: grid;
    grid-template-columns: repeat(2, 50%);
    padding: 120px 160px;
    filter: blur(${(props)=> props.defocused}) ;

    position: ${(props) =>props.defocused === '0px' ? 'fixed': 'initial'};
    z-index: ${(props) =>props.defocused === '0px' ? '1000': '0'};

`

export const BannerStyled = styled.div`

    img{
        margin-right: auto;
        margin-left: auto;
        display: block;
    }
`

export const DescriptionStyled = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
`

export const TitleStyled = styled.h1`
    font-size: 48px;
    font-weight: 800px;
`

export const BenefitsContent = styled.div`
    display: flex;
    gap: 40px;
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
`
