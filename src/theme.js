import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#CF7BF4",
    },
    success: {
      main: "#fff"
    },
  },
  fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
  typography: {
    h1: {
      fontFamily: ["Russo One", "sans-serif", "sans-serif"].join(","),

      color: "white",
      fontSize: "6rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
      "@media(max-width:800px)": {
        fontSize: "4rem",

      }
    },
    h2: {
      fontFamily: ["Russo One", "sans-serif", "sans-serif"].join(","),
      color: "white",
      fontSize: "3.75rem",
      lineHeight: 1.2,
      letterSpacing: "-0.00833em",
      "@media(max-width:800px)": {
        fontSize: "2rem",

      },
    },
    h3: {
      fontFamily: ["Russo One", "sans-serif", "sans-serif"].join(","),

      color: "white",
      fontSize: "3rem",
      lineHeight: 1.167,
      letterSpacing: "0em",

      "@media(max-width:800px)": {
        fontSize: "1.5rem",

      },
    },
    h4: {
      fontFamily: ["Russo One", "sans-serif", "sans-serif"].join(","),

      color: "white",
      fontSize: "2.125rem",
      lineHeight: 1.235,
      letterSpacing: "0.00735em",
      "@media(max-width:800px)":{
        fontSize: "1rem",
      },
    },
    h5: {
      fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
      fontWeight: 400,
      color: "white",
      fontSize: "1.5rem",
      lineHeight: 1.334,
      letterSpacing: "0em",
      "@media(max-width:800px)":{
        fontSize: "1rem",

      },
    },
    h6: {
      fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
      fontWeight: 400,
      color: "white",
      fontSize: "1.25rem",
      lineHeight: 1.6,
      letterSpacing: "0.0075em",
      "@media(max-width:800px)":{
        fontSize: "1rem",

      },
    },
    subtitle1: {
      fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
      fontWeight: 400,
      color: "white",
      fontSize: "1rem",
      lineHeight: 1.75,
      letterSpacing: "0.00938em",
    },
    subtitle2: {
      fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
      fontWeight: 400,
      color: "white",
      fontSize: "0.875rem",
      lineHeight: 1.57,
      letterSpacing: "0.00714em",
    },
    body1: {
      fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
      fontWeight: 400,
      color: "white",
      fontSize: "1rem",
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
    },
    body2: {
      fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
      fontWeight: 400,
      color: "white",
      fontSize: "0.875rem",
      lineHeight: 1.43,
      letterSpacing: "0.01071em",
    },
    button: {
      fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
      fontWeight: 400,
      color: "#fff",
      fontSize: "0.875rem",
      lineHeight: 1.75,
      letterSpacing: "0.02857em",
      textTransform: "uppercase",
    },
    caption: {
      fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
      fontWeight: 400,
      color: "white",
      fontSize: "0.75rem",
      lineHeight: 1.66,
      letterSpacing: "0.03333em",
    },
    overline: {
      fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
      fontWeight: 400,
      color: "white",
      fontSize: "0.75rem",
      lineHeight: 2.66,
      letterSpacing: "0.08333em",
      textTransform: "uppercase",
    },
  },
});
