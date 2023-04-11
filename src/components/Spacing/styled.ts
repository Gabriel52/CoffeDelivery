import styled from 'styled-components';

type SpacingStyledProps = {
    vertical: string;
    horizontal: string;
    top: string;
    left: string;
    right: string;
    bottom: string;
    type: string;
};




/**
 * @function
 * @name getSpacing
 *
 * @description
 * Repensável por retornar o estilo do espaçamento conforme as propriedades do
 * componente.
 */
function getSpacing(props: SpacingStyledProps) {
    if (props.vertical !== '0px' || props.horizontal !== '0px') {
        return `${props.type}: ${props.vertical} ${props.horizontal}`;
    }
    return `${props.type}: ${props.top} ${props.right} ${props.bottom} ${props.left}`;
}

export const SpacingStyled = styled.div<SpacingStyledProps>`
    width: 100%;
    ${(props) => getSpacing(props)};
`;
