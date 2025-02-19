import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
} from '@mui/material';

const UserLogin = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const handleSendOTP = () => {
    // Mock OTP sending
    setOtpSent(true);
  };

  const handleVerifyOTP = () => {
    // Mock OTP verification
    navigate('/user/dashboard');
  };

  return (
    <Box className="min-h-screen bg-gradient-to-br from-red-50 to-blue-50 flex items-center">
      <Container maxWidth="sm">
        <Paper className="p-8">
          <Typography variant="h4" className="mb-6 text-center">
            User Login
          </Typography>
          {!otpSent ? (
            <Box className="space-y-4">
              <TextField
                fullWidth
                label="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                variant="outlined"
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleSendOTP}
              >
                Send OTP
              </Button>
            </Box>
          ) : (
            <Box className="space-y-4">
              <TextField
                fullWidth
                label="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                variant="outlined"
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleVerifyOTP}
              >
                Verify OTP
              </Button>
            </Box>
          )}
        </Paper>
      </Container>
    </Box>
  );
};

export default UserLogin;