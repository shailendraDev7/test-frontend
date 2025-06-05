// src/theme.js (or wherever you prefer to put your theme configuration)
import { createTheme } from '@mui/material/styles';
import { grey, orange } from '@mui/material/colors'; // Import the colors you need

const theme = createTheme({
  palette: {
    primary: {
      main: orange[400], 
      light: orange[200],
      dark:orange[700],
      contrastText: '#fff'
    },
    secondary: {
      main: grey[900], 
    },
    // You can define other colors too:
    // error: {
    //   main: '#f44336', // Standard error color
    // },
    // warning: {
    //   main: '#ff9800',
    // },
    // info: {
    //   main: '#2196f3',
    // },
    // success: {
    //   main: '#4caf50',
    // },
    // background: {
    //   default: '#fff',
    //   paper: '#fff',
    // },
    // text: {
    //   primary: 'rgba(0, 0, 0, 0.87)',
    //   secondary: 'rgba(0, 0, 0, 0.6)',
    // },
  },
  // You can also customize typography, spacing, components, etc., here
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    // ... other typography settings
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Example: make all buttons slightly more rounded
        },
      },
    },
    // ... other component overrides
  },
});

export default theme;