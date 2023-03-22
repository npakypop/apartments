import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1d1d1d",
    },
    secondary: {
      main: "#009B4D",
    },
    accent: {
      main: "#00FFFF",
    },
  },
  shape: {
    borderRadius: 10,
  },
  typography: {
    title: {
      fontSize: 46,
      fontWeight: 700,
    },
    subtitle: {
      fontSize: 24,
      fontWeight: 500,
    },
    body: {
      fontSize: 18,
      fontWeight: 400,
    },
    button: {
      fontStyle: "italic",
    },
  },
});

export default theme;
