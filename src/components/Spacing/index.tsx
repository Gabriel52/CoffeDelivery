import React from 'react';

import { SpacingStyled } from './styled';


type SpacingProps = {
    children?: React.ReactNode;
    vertical?: string;
    horizontal?: string;
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    type?: string;
};

/**
 * @export
 * @component
 * @name Spacing
 *
 * @description
 * Componente responsável por montar o Spacing.
 */
export const Spacing = ({
    children = null,
    type = 'padding',
    vertical = '0px',
    horizontal = '0px',
    top = '0px',
    left = '0px',
    right = '0px',
    bottom = '0px',
}: SpacingProps): JSX.Element => (
    <SpacingStyled
        vertical={vertical}
        horizontal={horizontal}
        top={top}
        left={left}
        right={right}
        bottom={bottom}
        type={type}
    >
        {children}
    </SpacingStyled>
);