import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#f4ac45",
            light: "#f6bd6a",
            lighter: "#f7c57d",
            lightest: "#fad6a2",
            shade: "#c38a37",
            shader: "#ab7830",
            shadest: "#926729"
        },
        secondary: {
            main: "#92bfb1",
            light: "#a8ccc1",
            shade: "#75998e"
        },
        accent: {
            main: "#a61c3c"
        },
        white: {
            main: "#fff"
        }
    },
    shape: {
        borderRadius: "5px"
    }
})