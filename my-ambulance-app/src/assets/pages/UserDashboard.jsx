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
  AppBar,
  Toolbar,
} from '@mui/material';
import { LogOut } from 'lucide-react';

const mockDrivers = [
  {
    id: 1,
    name: 'John Doe',
    vehicleNumber: 'KA-01-HH-1234',
    rating: 4.5,
    distance: '2.5 km',
  },
  {
    id: 2,
    name: 'Jane Smith',
    vehicleNumber: 'KA-01-HH-5678',
    rating: 4.8,
    distance: '3.1 km',
  },
];

const UserDashboard = () => {
  const navigate = useNavigate();
  const [selectedDriver, setSelectedDriver] = useState(null);

  const handleBookAmbulance = (driver: any) => {
    setSelectedDriver(driver);
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <Box className="min-h-screen bg-gradient-to-br from-red-50 to-blue-50">
      <AppBar position="static" color="primary">
        <Toolbar className="justify-between">
          <Typography variant="h6">User Dashboard</Typography>
          <Button color="inherit" onClick={handleLogout} startIcon={<LogOut />}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" className="py-8">
        <Typography variant="h4" className="mb-6">
          Available Ambulances
        </Typography>
        <Grid container spacing={3}>
          {mockDrivers.map((driver) => (
            <Grid item xs={12} md={6} key={driver.id}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent>
                  <Typography variant="h6">{driver.name}</Typography>
                  <Typography color="textSecondary">
                    Vehicle: {driver.vehicleNumber}
                  </Typography>
                  <Typography color="textSecondary">
                    Rating: {driver.rating} ⭐
                  </Typography>
                  <Typography color="textSecondary">
                    Distance: {driver.distance}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    className="mt-4"
                    onClick={() => handleBookAmbulance(driver)}
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {selectedDriver && (
          <Paper className="mt-8 p-4">
            <Typography variant="h6">Booking Confirmed!</Typography>
            <Typography>
              Driver {selectedDriver.name} is on the way. ETA:{' '}
              {selectedDriver.distance}
            </Typography>
          </Paper>
        )}
      </Container>
    </Box>
  );
};

export default UserDashboard;