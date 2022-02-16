import { createTheme } from "@mui/material"

export default function getTheme() {
    const theme = createTheme({
        palette: {
          primary: {
            main: '#aaaaaa',
          },
          secondary: {
            main: "#cccccc",
          },
        },
    });

    return theme;
}