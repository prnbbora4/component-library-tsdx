import React from 'react';
import styled from '@emotion/styled';
import { compose, typography, color, space, layout, border, ColorProps, SpaceProps, LayoutProps, BorderProps } from 'styled-system';
import { flexbox, FlexProps, JustifyContentProps, AlignItemsProps, FlexBasisProps, FlexDirectionProps, } from 'styled-system';

import shouldForwardProp from '@styled-system/should-forward-prop';
// import { Theme } from '../../Theme/SkaraNewTheme'
import { withTheme } from '@emotion/react'

type FlexboxProps = {
    // theme?: Theme
    children?: React.ReactNode
}

const FlexComponent = (props: FlexboxProps & ColorProps & SpaceProps & LayoutProps & BorderProps & FlexProps & FlexBasisProps & FlexDirectionProps & JustifyContentProps & AlignItemsProps) => {
    const { children, ...flexProps } = props;
    return (
        <FlexContainer
            // theme={theme}
            {...flexProps}
        >
            {children}
        </FlexContainer>
    )
}

const FlexContainer = styled("div", { shouldForwardProp })(

    {
        boxSizing: "border-box",
        display: "flex",
        margin: 0,
    },
    compose(space,
        color,
        border,
        typography,
        layout,
        flexbox
    )
);


export const Flex = withTheme(FlexComponent)