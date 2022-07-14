import React from 'react'
import { compose, layout, space, color, border, LayoutProps, SpaceProps, ColorProps, BorderProps } from 'styled-system'
import styled from '@emotion/styled'
import shouldForwardProp from '@styled-system/should-forward-prop'

type styledProps = LayoutProps & SpaceProps & ColorProps & BorderProps
type ButtonProps = {
    onClick?: () => void
    children: React.ReactNode

}

const ButtonComponent = (props: ButtonProps & styledProps) => {
    const { onClick, children, ...otherProps } = props
    return (
        <ButtonContainer
            onClick={onClick}
            {...otherProps}
        >
            {children}
        </ButtonContainer>
    )
}

const ButtonContainer = styled('button', { shouldForwardProp })(
    {
        width: '300px',
        height: '50px',
        backgroundColor: 'blue',
        color: 'white',
    },
    compose(
        layout,
        space,
        color,
        border
    )
)

export const Button = ButtonComponent