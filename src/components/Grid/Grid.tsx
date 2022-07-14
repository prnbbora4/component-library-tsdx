import React from 'react'
import styled from '@emotion/styled';
// import { Theme } from '../../Theme/SkaraNewTheme'
import { withTheme } from '@emotion/react'
import { compose, typography, color, space, layout, border, ColorProps, SpaceProps, LayoutProps, BorderProps } from 'styled-system';
import { grid, GridAreaProps, GridAutoColumnsProps, GridAutoFlowProps, GridAutoRowsProps, GridColumnGapProps, GridColumnProps, GridGapProps, GridRowGapProps, GridRowProps, GridTemplateAreasProps, GridTemplateColumnsProps, GridTemplateRowsProps } from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';

type StyleSystemProps = ColorProps & SpaceProps & LayoutProps & BorderProps;
type GridSystemProps = GridAreaProps & GridAutoColumnsProps & GridAutoFlowProps & GridAutoRowsProps & GridColumnGapProps & GridColumnProps & GridGapProps & GridRowGapProps & GridRowProps & GridTemplateAreasProps & GridTemplateColumnsProps & GridTemplateRowsProps;
type GridProps = {
    // theme?: Theme,
    children?: React.ReactNode,
}

const GridComponent = (props: GridProps & StyleSystemProps & GridSystemProps) => {
    const { children, ...rest } = props;
    return (
        <GridContainer
            // theme={theme}
            {...rest}
        >
            {children}
        </GridContainer>
    )
}

const GridContainer = styled('div', { shouldForwardProp })(
    {
        boxSizing: "border-box",
        margin: 0,
        display: "grid",
    },
    compose(
        space,
        color,
        border,
        typography,
        layout,
        grid,
    )
)

export const Grid = withTheme(GridComponent)