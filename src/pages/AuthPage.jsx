import React, { useState } from 'react';
import { Grid, Box, Typography, TextField, Button, Container } from '@mui/material';
import SignUp from '../components/signUp';

export default function ResponsiveLayout() {
 

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} sx={{ minHeight: '100vh' }}>

        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '100vh' }}>
         
            <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold' }}>
              
              <img src="images/logo2.png" />alik
            </Typography>

       
            <Typography variant="h5" component="h4" sx={{textAlign: 'center',fontWeight: 'bold'}}>
              SIGN UP
            </Typography>

          
            <Typography sx={{ marginBottom: 3 ,textAlign: 'center'}}>
              We suggest the email address you use by default.
            </Typography>

            <SignUp/>

    
            
         
            <Button variant="outlined" fullWidth sx={{ marginBottom: 2 }}>
              Continue without Google
            </Button>

            
            <Button variant="outlined" fullWidth sx={{ marginBottom: 2 }}>
              Continue with Facebook
            </Button>

            
            <Typography sx={{ textAlign: 'center' }}>
              Already have an account? <a href="#">Log in</a>
            </Typography>
          </Box>
        </Grid>

      
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: { xs: 'none', md: 'block' }, 
              backgroundImage: 'url(images/1.svg)', 
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '90%',
              margin: '5%',
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}