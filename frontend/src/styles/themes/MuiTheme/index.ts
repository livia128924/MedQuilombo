import { createTheme } from "@mui/material";

import theme from "..";

export const MUI_DEFAULT_THEME = createTheme({
  typography: { fontFamily: "'Avenir', sans-serif" },

  palette: {
    primary: {
      main: "#84a985",
      contrastText: "#84a985",
    },

    secondary: {
      main: theme.colors.secondary.main,
      contrastText: "#601212",
    },

    warning: {
      main: theme.colors.warning.main,
    },

    error: {
      main: "#EA3A3D",
    },

    success: {
      main: theme.colors.success.main,
    },

    info: {
      main: theme.colors.info.main,
    },

    text: {
      primary: theme.colors.text.main,
    },

    background: {
      default: theme.colors.background.default,
    },

    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});
