import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  Link,
} from '@mui/material';

const DriverLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Mock login
    navigate('/driver/dashboard');
  };

  return (
    <Box className="min-h-screen bg-gradient-to-br from-red-50 to-blue-50 flex items-center">
      <Container maxWidth="sm">
        <Paper className="p-8">
          <Typography variant="h4" className="mb-6 text-center">
            Driver Login
          </Typography>
          <Box className="space-y-4">
            <TextField
              fullWidth
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleLogin}
            >
              Login
            </Button>
            <Typography className="text-center">
              Don't have an account?{' '}
              <Link href="/driver/signup" className="text-blue-600">
                Sign up here
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default DriverLogin;