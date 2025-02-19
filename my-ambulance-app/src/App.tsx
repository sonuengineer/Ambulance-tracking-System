import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import LandingPage from './pages/LandingPage';
import UserLogin from './pages/UserLogin';
import DriverLogin from './pages/DriverLogin';
import DriverSignup from './pages/DriverSignup';
import UserDashboard from './pages/UserDashboard';
import DriverDashboard from './pages/DriverDashboard';

const theme = createTheme({
  palette: {
    primary: {
      main: '#e53935',
    },
    secondary: {
      main: '#1e88e5',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/user/login" element={<UserLogin />} />
          <Route path="/driver/login" element={<DriverLogin />} />
          <Route path="/driver/signup" element={<DriverSignup />} />
          <Route path="/user/dashboard" element={<UserDashboard />} />
          <Route path="/driver/dashboard" element={<DriverDashboard />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;