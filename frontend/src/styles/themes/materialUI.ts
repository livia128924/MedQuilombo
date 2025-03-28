import { createTheme } from '@mui/material';
import { theme } from '../theme';

export const muiThemeDefault = createTheme({
  palette: {
    primary: {
      main: theme.colors.primary.main
    },

    error: {
      main: theme.colors.danger.main
    },

    contrastThreshold: 3,
    tonalOffset: 0.1
  }
});
