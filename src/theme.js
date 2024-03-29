import { createContext, useState, useMemo} from "react";
import { createTheme } from "@mui/material/styles"

export const tokens = (mode) => ({
    ...(mode === 'dark')
        ? {
            grey: {
                100: "#e0e0e0",
                200: "#c2c2c2",
                300: "#a3a3a3",
                400: "#858585",
                500: "#666666",
                600: "#525252",
                700: "#3d3d3d",
                800: "#292929",
                900: "#141414"
            },
            primary: {
                100: "#d0d1d5",
                200: "#a1a4ab",
                300: "#727681",
                400: "#1f2a40",
                500: "#141b2d",
                600: "#101624",
                700: "#0c101b",
                800: "#080b12",
                900: "#040509"
            },
            orangeAccent: {
                100: "#ffe4dc",
                200: "#ffc9b9",
                300: "#ffae96",
                400: "#ff9373",
                500: "#ff7850",
                600: "#cc6040",
                700: "#994830",
                800: "#663020",
                900: "#331810"
            },
            greenAccent: {
                100: "#dbf5ee",
                200: "#b7ebde",
                300: "#94e2cd",
                400: "#70d8bd",
                500: "#4cceac",
                600: "#3da58a",
                700: "#2e7c67",
                800: "#1e5245",
                900: "#0f2922"
            },
            redAccent: {
                100: "#f8dcdb",
                200: "#f1b9b7",
                300: "#e99592",
                400: "#e2726e",
                500: "#db4f4a",
                600: "#af3f3b",
                700: "#832f2c",
                800: "#58201e",
                900: "#2c100f"
            },
        } : {
            grey: {
                100: "#141414",
                200: "#292929",
                300: "#3d3d3d",
                400: "#525252",
                500: "#666666",
                600: "#858585",
                700: "#a3a3a3",
                800: "#c2c2c2",
                900: "#e0e0e0",
            },
            primary: {
                100: "#040509",
                200: "#080b12",
                300: "#0c101b",
                400: "#101624",
                500: "#141b2d",
                600: "#1f2a40",
                700: "#727681",
                800: "#a1a4ab",
                900: "#d0d1d5",
            },
            orangeAccent: {
                100: "#331810",
                200: "#663020",
                300: "#994830",
                400: "#cc6040",
                500: "#ff7850",
                600: "#ff9373",
                700: "#ffae96",
                800: "#ffc9b9",
                900: "#ffe4dc",
            },
            greenAccent: {
                100: "#0f2922",
                200: "#1e5245",
                300: "#2e7c67",
                400: "#3da58a",
                500: "#4cceac",
                600: "#70d8bd",
                700: "#94e2cd",
                800: "#b7ebde",
                900: "#dbf5ee",
            },
            redAccent: {
                100: "#2c100f",
                200: "#58201e",
                300: "#832f2c",
                400: "#af3f3b",
                500: "#db4f4a",
                600: "#e2726e",
                700: "#e99592",
                800: "#f1b9b7",
                900: "#f8dcdb",
            },
        } 
})

export const themeSetting = (mode) => {
    const colors = tokens(mode);

    return {
        palette: {
            mode: mode,
            ...(mode === 'dark'
                ?{
                    primary: {
                        main: colors.primary[500],
                    },
                    secondary: {
                        main: colors.orangeAccent[500],
                    },
                    tertiary: {
                        main: colors.greenAccent[500],
                    },
                    neutral: {
                        dark: colors.grey[700],
                        main: colors.grey[500],
                        light: colors.grey[100]
                    },
                    background: {
                        default: colors.primary[500],
                    }
                } : {
                    primary: {
                        main: colors.primary[100],
                    },
                    secondary: {
                        main: colors.orangeAccent[500],
                    },
                    tertiary: {
                        main: colors.greenAccent[500],
                    },
                    neutral: {
                        dark: colors.grey[700],
                        main: colors.grey[500],
                        light: colors.grey[100]
                    },
                    background: {
                        default: "#f5f5f5",
                    },
                }),
        },
        typography: {
            fontFamily: ["Montserrat","sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Montserrat","sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Montserrat","sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Montserrat","sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Montserrat","sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Montserrat","sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Montserrat","sans-serif"].join(","),
                fontSize: 14,
            },
        },
    };
};

export const ColorModeContext = createContext({
    toggleColorMode: () => {}
});

export const useMode = () => {
    const [mode, setMode] = useState("dark");

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () =>
            setMode((prev) => (prev === "light" ? "dark" : "light")),
        }),
        []
    );

    const theme = useMemo(() => createTheme(themeSetting(mode)), [mode]);

    return[theme, colorMode];
}
