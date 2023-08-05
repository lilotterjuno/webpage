import type { Config } from "tailwindcss"

const primaryColors = {
    0: "#000000",
    10: "#001944",
    20: "#002d6d",
    25: "#003883",
    30: "#17448f",
    35: "#27509b",
    40: "#355ca8",
    50: "#5075c3",
    60: "#6b8fdf",
    70: "#86aafc",
    80: "#afc6ff",
    90: "#d9e2ff",
    95: "#edf0ff",
    98: "#faf8ff",
    99: "#fefbff",
    100: "#ffffff",
}

const secondaryColors = {
    0: "#000000",
    10: "#001e2d",
    20: "#00344b",
    25: "#00405b",
    30: "#004c6b",
    35: "#00587c",
    40: "#00658d",
    50: "#007fb0",
    60: "#2c9acf",
    70: "#50b5eb",
    80: "#81cfff",
    90: "#c6e7ff",
    95: "#e4f3ff",
    98: "#f5faff",
    99: "#fbfcff",
    100: "#ffffff",
}

const tertiaryColors = {
    0: "#000000",
    10: "#211b00",
    20: "#383000",
    25: "#453b00",
    30: "#524700",
    35: "#5f5200",
    40: "#6c5e00",
    50: "#887700",
    60: "#a49117",
    70: "#c1ab33",
    80: "#ddc74d",
    90: "#fbe366",
    95: "#fff1b6",
    98: "#fff9ec",
    99: "#fffbff",
    100: "#ffffff",
}

const errorColors = {
    0: "#000000",
    10: "#410002",
    20: "#690005",
    25: "#7e0007",
    30: "#93000a",
    35: "#a80710",
    40: "#ba1a1a",
    50: "#de3730",
    60: "#ff5449",
    70: "#ff897d",
    80: "#ffb4ab",
    90: "#ffdad6",
    95: "#ffedea",
    98: "#fff8f7",
    99: "#fffbff",
    100: "#ffffff",
}

const neutralColors = {
    0: "#000000",
    10: "#001b3d",
    20: "#003062",
    25: "#003b76",
    30: "#00468a",
    35: "#13529a",
    40: "#265ea7",
    50: "#4477c1",
    60: "#6091dd",
    70: "#7cacfa",
    80: "#a8c8ff",
    90: "#d6e3ff",
    95: "#ecf0ff",
    98: "#f9f9ff",
    99: "#fdfbff",
    100: "#ffffff",
}

const neutralVariantColors = {
    0: "#000000",
    10: "#191b23",
    20: "#2e3038",
    25: "#393b43",
    30: "#44464f",
    35: "#50525a",
    40: "#5c5e67",
    50: "#757780",
    60: "#8f9099",
    70: "#a9abb4",
    80: "#c5c6d0",
    90: "#e1e2ec",
    95: "#eff0fa",
    98: "#faf8ff",
    99: "#fefbff",
    100: "#ffffff",
}

const fontSize = {
    "2xs": "0.5635rem",
    xs: "0.625rem",
    sm: "0.875rem",
    base: "1rem",
    md: "1.25rem",
    lg: "1.75rem",
    xl: "2rem",
    "2xl": "2.5rem",
    "3xl": "3rem",
}

export default {
    content: ["./index.html", "./src/**/*.{html,ts,tsx}", "./src/*.{ts,tsx}"],
    theme: {
        extend: {
            spacing: {
                sm: "0.25rem",
                base: "0.5rem",
                md: "0.75rem",
                lg: "1rem",
                xl: "1.25rem",
                "2xl": "1.5rem",
                "3xl": "1.75rem",
            },

            fontSize: {
                h1: fontSize["3xl"],
                h2: fontSize["2xl"],
                h3: fontSize.xl,
                h4: fontSize.lg,
                h5: fontSize.md,
            },

            colors: {
                background: neutralColors[99],
                outline: neutralVariantColors[50],

                surface: {
                    _: neutralColors[99],
                    variant: neutralVariantColors[90],
                },

                container: {
                    primary: primaryColors[90],
                    secondary: secondaryColors[90],
                    tertiary: tertiaryColors[90],
                    error: errorColors[90],
                },

                _: {
                    primary: primaryColors[40],
                    secondary: secondaryColors[40],
                    tertiary: tertiaryColors[40],
                    error: errorColors[40],
                },

                on: {
                    primary: {
                        _: primaryColors[100],
                        container: primaryColors[10],
                    },
                    secondary: {
                        _: secondaryColors[100],
                        container: secondaryColors[10],
                    },
                    tertiary: {
                        _: tertiaryColors[100],
                        container: tertiaryColors[10],
                    },
                    error: {
                        _: errorColors[100],
                        container: errorColors[10],
                    },
                    background: neutralColors[10],
                    surface: {
                        _: neutralColors[10],
                        variant: neutralVariantColors[30],
                    },
                },
            },
        },

        colors: {
            error: { ...errorColors },

            "neutral-variant": { ...neutralVariantColors },

            neutral: { ...neutralColors },

            primary: { ...primaryColors },

            secondary: { ...secondaryColors },

            tertiary: { ...tertiaryColors },
        },

        boxShadow: {
            "1": "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)",
            "2": "0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)",
            "3": "0px 1px 3px 0px rgba(0, 0, 0, 0.30), 0px 4px 8px 3px rgba(0, 0, 0, 0.15)",
            "4": "0px 2px 3px 0px rgba(0, 0, 0, 0.30), 0px 6px 10px 4px rgba(0, 0, 0, 0.15)",
            "5": "0px 4px 4px 0px rgba(0, 0, 0, 0.30), 0px 8px 12px 6px rgba(0, 0, 0, 0.15)",
        },

        fontFamily: {
            sans: ["Fredoka", "Comfortaa", "Arial"],
        },

        fontSize: { ...fontSize },

        fontWeight: {
            light: "300",
            base: "400",
            medium: "500",
            bold: "600",
        },
    },
    plugins: [],
} satisfies Config
