export type Theme = {
    color: Color
    style: Style
    // breakpoints: Breakpoints
    breakpoints: any[]
    fontSizes: any[]
    space: any[]
}

type Color = {
    primary: ColorPrimary
    secondary: ColorSecondary
    greys: ColorGreys
    typography: Typography
    button: Button
    tones: Tones
}
type ColorPrimary = {
    primary1: string,
    primary2: string,
    primaryVariant: string
}
type ColorSecondary = {
    secondary1: string,
    secondaryVariant: string
}
type ColorGreys = {
    skaraDarkGrey: string,
    skaraLightGrey: string,
    skaraDisabledGrey: string,
    skaraSurfaceGrey1: string,
    skaraSurfaceGrey2: string,
    skaraSurfaceGrey3: string,
    skaraWhite: string
}
type Typography = {
    primary: string
    secondary: string
    error: string
    success: string
    hovered: string
}
type Tones = {
    skaraOrange: string
    skaraYellow: string
    skaraLightGreen: string
    skaraDarkGreen: string
    skaraLightBlue: string
    skaraDarkBlue: string
    skaraLightPink: string
    skaraDarkPink: string
    skaraRed: string
    skaraAqua: string
}
type Button = {
    typography: ButtonTypography
    icon: ButtonIcon
    background: ButtonBackground
    link: ButtonLink
}
type ButtonTypography = {
    primary: string
    secondary: string
    disabled: ButtonTypographyDisabled
    hovered: ButtonTypographyHovered
    grey: ButtonTypographyGrey
}

type ButtonTypographyDisabled = {
    primary: string
    secondary: string
}

type ButtonTypographyHovered = {
    primary: string
    secondary: string
}
type ButtonTypographyGrey = {
    default: string
    disabled: string
}

type ButtonIcon = {
    primary: string
    secondary: string
    disabled: ButtonIconDisabled
    hovered: ButtonIconHovered
    grey: ButtonIconGrey
}

type ButtonIconDisabled = {
    primary: string
    secondary: string
}

type ButtonIconHovered = {
    primary: string
    secondary: string
}
type ButtonIconGrey = {
    default: string
    disabled: string
}

type ButtonBackground = {
    primary: string
    secondary: string
    disabled: ButtonBackgroundDisabled
    hovered: ButtonBackgroundHovered
    grey: ButtonBackgroundGrey
}

type ButtonBackgroundDisabled = {
    primary: string
    secondary: string
}

type ButtonBackgroundHovered = {
    primary: string
    secondary: string
}
type ButtonBackgroundGrey = {
    default: string
    active: string
    disabled: string
}

type ButtonLink = {
    active: string,
    disabled: string,
    hovered: string,
}

type Style = {
    shape: Shape,
    size: Size,
    fontWeight: FontWeight,
}
type Shape = {
    square: string,
    round: string,
}
type Size = {
    small: string,
    default: string,
    large: string,
}
type FontWeight = {
    light: string,
    medium: string,
    bold: string,
}

export const themes: { [key: string]: Theme } = {
    default: {
        color: {
            primary: {
                primary1: "#18222F",
                primary2: "#0B0F15",
                primaryVariant: "#2E4563"
            },
            secondary: {
                secondary1: "#00C897",
                secondaryVariant: "#009A75",
            },
            greys: {
                skaraDarkGrey: "#A2B5D0",
                skaraLightGrey: "#F0F4F9",
                skaraDisabledGrey: "#D3DAE4",
                skaraSurfaceGrey1: "#E4EAF1",
                skaraSurfaceGrey2: "#CED5DE",
                skaraSurfaceGrey3: "#EBEFF5",
                skaraWhite: "#FFFFFF"
            },
            tones: {
                skaraOrange: '#FFAE34',
                skaraYellow: '#F9FD50',
                skaraLightGreen: '#85EF47',
                skaraDarkGreen: '#00BD56',
                skaraLightBlue: '#87CDFF',
                skaraDarkBlue: '#207DFF',
                skaraLightPink: '#FD8AFF',
                skaraDarkPink: '#D015E0',
                skaraRed: '#FF6B4A',
                skaraAqua: '#0DECDD',

            },
            typography: {
                primary: '#18222F',
                secondary: "#A2B5D0",
                error: '#FF3C3C',
                success: '#00E267',
                hovered: "#18222F"
            },
            button: {
                typography: {
                    primary: '#FFFFFF',
                    secondary: '#18222F',
                    disabled: {
                        primary: '#A2B5D0',
                        secondary: '#D3DAE4',
                    },
                    hovered: {
                        primary: '#FFFFFF',
                        secondary: '#0B0F15',
                    },
                    grey: {
                        default: '#18222F',
                        disabled: '#A2B5D0'
                    }
                },
                icon: {
                    primary: '#323232',
                    secondary: '#18222F',
                    disabled: {
                        primary: '#A2B5D0',
                        secondary: '#D3DAE4',
                    },
                    hovered: {
                        primary: '#FFFFFF',
                        secondary: '#0B0F15',
                    },
                    grey: {
                        default: '#18222F',
                        disabled: '#A2B5D0'
                    }
                },
                background: {
                    primary: '#18222F',
                    secondary: '#F0F4F9',
                    disabled: {
                        primary: '#D3DAE4',
                        secondary: '#F0F4F9',
                    },
                    hovered: {
                        primary: '#0B0F15',
                        secondary: '#F0F4F9',
                    },
                    grey: {
                        default: '#F0F4F9',
                        active: '#E4EAF1',
                        disabled: '#F0F4F9',
                    },
                },
                link: {
                    active: '#00C897',
                    disabled: '#A2B5D0',
                    hovered: '#009A75 ',
                }
            },
        },
        style: {
            shape: {
                square: "0px",
                round: "50%",
            },
            size: {
                small: "24px",
                default: "34px",
                large: "64px",
            },
            fontWeight: {
                light: "400",
                medium: "500",
                bold: "700",
            }
        },
        breakpoints: ["320px", "768px", "960px", "1200px", "2048px", "3840px"],
        fontSizes: [10, 12, 14, 16, 18, 20, 24, 28, 42, 84],
        space: [0, 4, 8, 16, 32, 64]
    }
}