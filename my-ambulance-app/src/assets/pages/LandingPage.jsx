import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, Typography, Grid, Paper } from '@mui/material';
import { Ambulance, Heart, Clock, Shield } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Clock size={40} className="text-red-600" />,
      title: '24/7 Service',
      description: 'Round-the-clock emergency medical transportation available',
    },
    {
      icon: <Heart size={40} className="text-red-600" />,
      title: 'Professional Care',
      description: 'Highly trained medical staff and state-of-the-art equipment',
    },
    {
      icon: <Shield size={40} className="text-red-600" />,
      title: 'Safety First',
      description: 'Rigorous safety protocols and sanitized vehicles',
    },
  ];

  return (
    <Box className="min-h-screen bg-gradient-to-br from-red-50 to-blue-50">
      {/* Hero Section */}
      <Box 
        className="h-[60vh] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1587745416684-47953f16f02f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      >
        <Container maxWidth="lg" className="h-full">
          <Box className="flex flex-col items-center justify-center h-full text-center text-white">
            <Ambulance size={80} className="text-white mb-6" />
            <Typography variant="h2" component="h1" className="mb-4 font-bold">
              CCC Ambulance Service
            </Typography>
            <Typography variant="h5" className="mb-8">
              Quick and reliable emergency medical transportation
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => navigate('/user/login')}
              className="w-64 text-lg py-3"
            >
              Request Ambulance
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" className="py-16">
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper className="p-6 h-full text-center hover:shadow-lg transition-shadow">
                <Box className="flex justify-center mb-4">
                  {feature.icon}
                </Box>
                <Typography variant="h5" className="mb-2">
                  {feature.title}
                </Typography>
                <Typography color="textSecondary">
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Box className="mt-16 text-center">
          <Typography variant="h4" className="mb-8">
            Join Our Network of Professional Drivers
          </Typography>
          <Box className="flex justify-center space-x-4">
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              onClick={() => navigate('/driver/login')}
            >
              Driver Login
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              onClick={() => navigate('/driver/signup')}
            >
              Register as Driver
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LandingPage;