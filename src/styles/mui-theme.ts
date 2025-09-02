import { createTheme } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

// Dark theme with orange as secondary
const theme = createTheme({
  palette: {
    mode: 'dark', // dark mode
    primary: {
      main: '#ffffff', // main text color or buttons
    },
    secondary: {
      main: orange[500], // your accent color
    },
    background: {
      default: '#121212', // dark background
      paper: '#1e1e1e',   // for cards, appbars, etc.
    },
    text: {
      primary: '#ffffff',
      secondary: '#cccccc',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

export default theme;
