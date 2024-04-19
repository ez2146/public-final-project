import React from 'react';
import ContactForm from './ContactForm';
import SongForm from './SongForm';
import IntroSection from './IntroSection';
import { CssBaseline, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#DBD4D3' 
    },
    primary: {
      main: '#345995',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <IntroSection /> 
      <Container component="main" maxWidth="sm">
        <ContactForm />
        <SongForm />
      </Container>
    </ThemeProvider>
  );
}

export default App;