import React from 'react';
import styled from '@emotion/styled';
import { compose, typography, color, space, layout, border, ColorProps, SpaceProps, LayoutProps, BorderProps } from 'styled-system';
import { flexbox, FlexProps, JustifyContentProps, AlignItemsProps, FlexBasisProps, FlexDirectionProps, } from 'styled-system';
import { grid, GridAreaProps, GridAutoColumnsProps, GridAutoFlowProps, GridAutoRowsProps, GridColumnGapProps, GridColumnProps, GridGapProps, GridRowGapProps, GridRowProps, GridTemplateAreasProps, GridTemplateColumnsProps, GridTemplateRowsProps } from 'styled-system';

import shouldForwardProp from '@styled-system/should-forward-prop';
// import { Theme } from '../../Theme/SkaraNewTheme'
import { withTheme } from '@emotion/react'

type StyleSystemProps = ColorProps & SpaceProps & LayoutProps & BorderProps;
type GridSystemProps = GridAreaProps & GridAutoColumnsProps & GridAutoFlowProps & GridAutoRowsProps & GridColumnGapProps & GridColumnProps & GridGapProps & GridRowGapProps & GridRowProps & GridTemplateAreasProps & GridTemplateColumnsProps & GridTemplateRowsProps;
type FlexSystemProps = FlexProps & FlexBasisProps & FlexDirectionProps & JustifyContentProps & AlignItemsProps;
type BoxProps = {
    // theme?: Theme
    children: React.ReactNode
}

const BoxComponent = (props: BoxProps & StyleSystemProps & GridSystemProps & FlexSystemProps) => {
    const { children, ...flexProps } = props;
    return (
        <BoxContainer
            // theme={theme}
            {...flexProps}
        >
            {children}
        </BoxContainer>
    )
}

const BoxContainer = styled("div", { shouldForwardProp })(

    {
        boxSizing: "border-box",
        display: "block",
        margin: 0,
    },
    compose(space,
        color,
        border,
        typography,
        layout,
        flexbox,
        grid,
    )
);


export const Box = withTheme(BoxComponent)