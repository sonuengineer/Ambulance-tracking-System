import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Button,
  Card,
  CardContent,
  Switch,
  FormControlLabel,
  AppBar,
  Toolbar,
} from '@mui/material';
import { LogOut } from 'lucide-react';

const mockRequests = [
  {
    id: 1,
    patientName: 'Alice Johnson',
    location: '123 Main St',
    destination: 'City Hospital',
    distance: '5.2 km',
    timestamp: '2 mins ago',
  },
  {
    id: 2,
    patientName: 'Bob Wilson',
    location: '456 Park Ave',
    destination: 'General Hospital',
    distance: '3.8 km',
    timestamp: '5 mins ago',
  },
];

const DriverDashboard = () => {
  const navigate = useNavigate();
  const [isAvailable, setIsAvailable] = useState(true);
  const [activeRequests, setActiveRequests] = useState(mockRequests);

  const handleAvailabilityChange = () => {
    setIsAvailable(!isAvailable);
  };

  const handleAcceptRequest = (requestId: number) => {
    setActiveRequests(activeRequests.filter((req) => req.id !== requestId));
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <Box className="min-h-screen bg-gradient-to-br from-red-50 to-blue-50">
      <AppBar position="static" color="primary">
        <Toolbar className="justify-between">
          <Typography variant="h6">Driver Dashboard</Typography>
          <Button color="inherit" onClick={handleLogout} startIcon={<LogOut />}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" className="py-8">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className="p-4">
              <FormControlLabel
                control={
                  <Switch
                    checked={isAvailable}
                    onChange={handleAvailabilityChange}
                    color="primary"
                  />
                }
                label={`Status: ${isAvailable ? 'Available' : 'Unavailable'}`}
              />
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h5" className="mb-4">
              Active Requests
            </Typography>
            {activeRequests.map((request) => (
              <Card key={request.id} className="mb-4 hover:shadow-lg transition-shadow">
                <CardContent>
                  <Typography variant="h6">{request.patientName}</Typography>
                  <Typography color="textSecondary">
                    From: {request.location}
                  </Typography>
                  <Typography color="textSecondary">
                    To: {request.destination}
                  </Typography>
                  <Typography color="textSecondary">
                    Distance: {request.distance}
                  </Typography>
                  <Typography color="textSecondary" className="mb-4">
                    Requested: {request.timestamp}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleAcceptRequest(request.id)}
                    disabled={!isAvailable}
                  >
                    Accept Request
                  </Button>
                </CardContent>
              </Card>
            ))}
            {activeRequests.length === 0 && (
              <Typography className="text-center text-gray-500 py-8">
                No active requests
              </Typography>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DriverDashboard;