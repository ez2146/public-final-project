// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Lato, sans-serif',
  },
});

console.log(theme); // Check what's being output here

export default theme;