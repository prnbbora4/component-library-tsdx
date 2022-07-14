import React from 'react'
import { withTheme } from '@emotion/react'
import styled from '@emotion/styled';
import { Theme } from '../../Theme/SkaraNewTheme';
import { compose, typography, color, space, ColorProps, SpaceProps, TypographyProps } from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';

type SystemProps = ColorProps & SpaceProps & TypographyProps;

type TextProps = {
    theme?: Theme
    children: any
    variant: string
}

const TextComponent = (props: TextProps & SystemProps) => {

    const { theme, children, variant, ...otherProps } = props;

    switch (variant) {
        case 'h1':
            return (
                <React.Fragment>
                    <H1 theme={theme}
                        fontSize={'48px'}
                        color={'#18222F'}
                        fontWeight={'500'}
                        {...otherProps}>
                        {children}
                    </H1>
                </React.Fragment>
            )
        case 'h2':
            return (
                <React.Fragment>
                    <H2 theme={theme}
                        fontSize={'36px'}
                        color={'#18222F'}
                        fontWeight={'500'}
                        {...otherProps}>
                        {children}
                    </H2>
                </React.Fragment>
            )
        case 'h3':
            return (
                <React.Fragment>
                    <H3 theme={theme}
                        fontSize={'32px'}
                        color={'#18222F'}
                        fontWeight={'500'}
                        {...otherProps}>
                        {children}
                    </H3>
                </React.Fragment>
            )
        case 'subheading1':
            return (
                <React.Fragment>
                    <H4 theme={theme}
                        fontSize={'30px'}
                        color={'#18222F'}
                        fontWeight={'500'}
                        {...otherProps}>
                        {children}
                    </H4>
                </React.Fragment>
            )
        case 'subheading2':
            return (
                <React.Fragment>
                    <H5 theme={theme}
                        fontSize={'24px'}
                        color={'#18222F'}
                        fontWeight={'500'}
                        {...otherProps}>
                        {children}
                    </H5>
                </React.Fragment>
            )
        case 'body1':
            return (
                <React.Fragment>
                    <Body1 theme={theme}
                        fontSize={'22px'}
                        color={'#18222F'}
                        fontWeight={'400'}
                        {...otherProps}>
                        {children}
                    </Body1>
                </React.Fragment>
            )
        case 'body2':
            return (
                <React.Fragment>
                    <Body2 theme={theme}
                        fontSize={'18px'}
                        color={'#18222F'}
                        fontWeight={'400'}
                        {...otherProps}>
                        {children}
                    </Body2>
                </React.Fragment>
            )
        case 'button':
            return (
                <React.Fragment>
                    <Button theme={theme}
                        fontSize={'18px'}
                        color={'#18222F'}
                        fontWeight={'500'}
                        {...otherProps}>
                        {children}
                    </Button>
                </React.Fragment>
            )
        case 'link':
            return (
                <React.Fragment>
                    <Link theme={theme}
                        fontSize={'18px'}
                        color={'#00C897'}
                        fontWeight={'500'}
                        {...otherProps}>
                        {children}
                    </Link>
                </React.Fragment>
            )
        case 'caption':
            return (
                <React.Fragment>
                    <Caption theme={theme}
                        fontSize={'15px'}
                        color={'#18222F'}
                        fontWeight={'400'}
                        {...otherProps}>
                        {children}
                    </Caption>
                </React.Fragment>
            )
        case 'label':
            return (
                <React.Fragment>
                    <Label theme={theme}
                        fontSize={'13px'}
                        color={'#18222F'}
                        fontWeight={'400'}
                        {...otherProps}>
                        {children}
                    </Label>
                </React.Fragment>
            )
        default:
            return (
                <p>{children}</p>
            )
    }


}

const H1 = styled("h1", { shouldForwardProp })(
    {
        boxSizing: "border-box",
        margin: "0",
        padding: "0",
        lineHeight: "1.3",
        fontFamily: "Inter",
    },
    compose(
        space,
        color,
        typography
    )
);

const H2 = styled("h2", { shouldForwardProp })(
    {
        boxSizing: "border-box",
        margin: "0",
        padding: "0",
        lineHeight: "1.3",
        fontFamily: "Inter",
    },
    compose(
        space,
        color,
        typography
    )
);

const H3 = styled("h3", { shouldForwardProp })(
    {
        boxSizing: "border-box",
        margin: "0",
        padding: "0",
        lineHeight: "1.3",
        fontFamily: "Inter",
    },
    compose(
        space,
        color,
        typography
    )
);

const H4 = styled("h4", { shouldForwardProp })(
    {
        boxSizing: "border-box",
        margin: "0",
        padding: "0",
        lineHeight: "1.3",
        fontFamily: "Inter",
    },
    compose(
        space,
        color,
        typography
    )
);

const H5 = styled("h5", { shouldForwardProp })(
    {
        boxSizing: "border-box",
        margin: "0",
        padding: "0",
        lineHeight: "1.3",
        fontFamily: "Inter",
    },
    compose(
        space,
        color,
        typography
    )
);

const Body1 = styled("p", { shouldForwardProp })(
    {
        boxSizing: "border-box",
        margin: "0",
        padding: "0",
        lineHeight: "1.3",
        fontFamily: "Inter",
    },
    compose(
        space,
        color,
        typography
    )
);

const Body2 = styled("p", { shouldForwardProp })(
    {
        boxSizing: "border-box",
        margin: "0",
        padding: "0",
        lineHeight: "1.3",
        fontFamily: "Inter",
    },
    compose(
        space,
        color,
        typography
    )
);

const Button = styled("p", { shouldForwardProp })(
    {
        boxSizing: "border-box",
        margin: "0",
        padding: "0",
        lineHeight: "1.3",
        fontFamily: "Inter",
    },
    compose(
        space,
        color,
        typography
    )
);

const Link = styled("p", { shouldForwardProp })(
    {
        boxSizing: "border-box",
        margin: "0",
        padding: "0",
        lineHeight: "1.3",
        fontFamily: "Inter",
    },
    compose(
        space,
        color,
        typography
    )
);

const Caption = styled("p", { shouldForwardProp })(
    {
        boxSizing: "border-box",
        margin: "0",
        padding: "0",
        lineHeight: "1.3",
        fontFamily: "Inter",
    },
    compose(
        space,
        color,
        typography
    )
);

const Label = styled("p", { shouldForwardProp })(
    {
        boxSizing: "border-box",
        margin: "0",
        padding: "0",
        lineHeight: "1.3",
        fontFamily: "Inter",
    },
    compose(
        space,
        color,
        typography
    )
);
export const Typography = withTheme(TextComponent)