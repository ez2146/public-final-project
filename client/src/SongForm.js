import React, { useState } from 'react';
import { TextField, Button, Typography, Paper, Box, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

// Define the theme
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
        }
      }
    }
  }
});

export default function SongForm() {
  const [songData, setSongData] = useState({
    title: '',
    artist: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSongData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/sendSong', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(songData)
    });
    const data = await response.text();
    alert(data);
    setSongData({ title: '', artist: '' });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
        <Paper elevation={6} style={{ padding: '20px', borderRadius: '15px', backgroundColor: '#2F2B34' }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Send me your favorite song
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              id="title"
              label="Title"
              name="title"
              value={songData.title}
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
              id="artist"
              label="Artist"
              name="artist"
              value={songData.artist}
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
            <Button type="submit" variant="contained" color="primary" fullWidth style={{ margin: '16px 0' }}>
              Submit
            </Button>
          </form>
        </Paper>
      </Box>
    </ThemeProvider>
  );
}
