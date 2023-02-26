import styled from "styled-components";
import { COLORS } from "../../configuration/colors";

type SkeletonType = {
    width: string;
    height: string;
}

export const SkeletonStyled = styled.div<SkeletonType>`
    width:${(props)=>props.width};
    height:${(props)=>props.height};

    background-color: ${COLORS.gray_light};
    border-radius: 6px;
`