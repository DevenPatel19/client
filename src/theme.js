import { createTheme } from "@mui/material/styles";

export const shades = {
    // Black
    primary: {
        100: "#cccccc",
        200: "#999999",
        300: "#666666",
        400: "#333333",
        500: "#000000",
        600: "#000000",
        700: "#000000",
        800: "#000000",
        900: "#000000",
    },

    secondary: {
        100: "#f7ccd2",
        200: "#ef99a4",
        300: "#e66677",
        400: "#de3349",
        500: "#d6001c",
        600: "#ab0016",
        700: "#800011",
        800: "#56000b",
        900: "#2b0006",
    },

    tertiary: {
        100: "#ccd2de",
        200: "#99a5bc",
        300: "#66789b",
        400: "#334b79",
        500: "#001e58",
        600: "#001846",
        700: "#001235",
        800: "#000c23",
        900: "#000612",
    },
};

export const theme = createTheme({
    palette: {
        primary: {
            main: shades.primary[500],
        },
        secondary: {
            main: shades.secondary[500],
        },
        tertiary: {
            dark: shades.tertiary[700],
            main: shades.tertiary[500],
            light: shades.tertiary[100],
        },
    },
    typography: {
        fontFamily: ["Fauna one", "sans-serif"].join(","),
        fontSize: 11,
        h1: {
            fontFamily: ["Cinzel", "sans-serif"].join(","),
            fontSize: 48,
        },
        h2: {
            fontFamily: ["Cinzel", "sans-serif"].join(","),
            fontSize: 36,
        },
        h3: {
            fontFamily: ["Cinzel", "sans-serif"].join(","),
            fontSize: 20,
        },
        h4: {
            fontFamily: ["Cinzel", "sans-serif"].join(","),
            fontSize: 14,
        },
    },
});
