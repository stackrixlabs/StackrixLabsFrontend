import { Box } from '@mui/material';
import { Outlet } from 'react-router';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

export function Root() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navigation />
      <Box component="main" sx={{ flex: 1 }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
