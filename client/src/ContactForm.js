import React, { useState } from 'react';
import { TextField, Button, Typography, Paper, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#345995',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    allVariants: {
      color: 'white',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#2F2B34', 
          padding: '20px', 
          borderRadius: '15px',
          margin: '20px 0',
        }
      }
    }
  }
});

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/sendemail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    const data = await response.text();
    alert(data); 
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <ThemeProvider theme={theme}>

  <Box maxWidth={600} mx="auto" my={2}>
      <Paper elevation={6}>
        <Typography variant="h4" component="h1" gutterBottom>
          Contact Me!
        </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              id="name"
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              margin="normal"
              variant="outlined"
              InputLabelProps={{
                style: { color: '#fff' },
              }}
              inputProps={{
                style: { color: '#fff' }, 
              }}
            />
            <TextField
              fullWidth
              id="email"
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              margin="normal"
              variant="outlined"
              InputLabelProps={{
                style: { color: '#fff' },
              }}
              inputProps={{
                style: { color: '#fff' }, 
              }}
            />
            <TextField
              fullWidth
              id="message"
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              multiline
              rows={4}
              margin="normal"
              variant="outlined"
              InputLabelProps={{
                style: { color: '#fff' },
              }}
              inputProps={{
                style: { color: '#fff' }, 
              }}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth style={{ margin: '16px 0' }}>
              Submit
            </Button>
          </form>
        </Paper>
        </Box>
    </ThemeProvider>
  );
}
