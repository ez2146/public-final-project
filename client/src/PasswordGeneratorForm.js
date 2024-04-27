import React, { useState } from 'react';
import { Button, Typography, Paper, Box } from '@mui/material';

export default function PasswordGeneratorForm() {
  const [generatedPassword, setGeneratedPassword] = useState('');

  const handleGeneratePassword = async () => {
    try {
      const response = await fetch('/generatePassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          length: 12,  
          numbers: true,  
          symbols: false,  
          uppercase: true,
          lowercase: true  
        })
      });
      if (response.ok) {
        const data = await response.json();
        setGeneratedPassword(data.password);
      } else {
        throw new Error('Failed to generate password');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Box maxWidth={400} mx="auto" my={2}>
      <Paper elevation={6} style={{ padding: '20px', borderRadius: '15px', textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Generate a Password
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleGeneratePassword}
          style={{ marginBottom: '16px' }}
        >
          Generate Password
        </Button>
        {generatedPassword && (
          <Typography variant="body1" style={{ color: 'white', backgroundColor: '#444', padding: '10px', borderRadius: '4px' }}>
            Generated Password: {generatedPassword}
          </Typography>
        )}
      </Paper>
    </Box>
  );
}
