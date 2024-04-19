import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

export default function IntroSection() {
  return (
    <Box style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
      <Paper elevation={6} style={{ padding: '20px', borderRadius: '15px', maxWidth: '600px', width: '100%', marginBottom: '20px', backgroundColor: '#2F2B34' }}>
        <Typography variant="h4" component="h1" style={{ color: 'white', marginBottom: '16px' }}>
          Hi, I'm Ethan Zheng
        </Typography>
        <Typography variant="body1" style={{ color: 'white', marginBottom: '16px' }}>
          I'm a junior at NYU Stern studying in the Business, Technology, and Entrepreneurship
          program, and pursuing a dual major in Computer Science. I'm an aspiring Product Manager with
          experience in software development, UI/UX design, product marketing, and the product
          development process. I am currently interested in -1 to 0 research and GTM strategy.
        </Typography>
        <Typography variant="body1" style={{ color: 'white', marginBottom: '16px' }}>
          Always eager to learn and help others, feel free to reach out!
        </Typography>
        <Typography variant="body1" style={{ color: 'white' }}>
          ez2146@stern.nyu.edu
        </Typography>
      </Paper>
    </Box>
  );
}
