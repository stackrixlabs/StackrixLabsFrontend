import { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router';
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CodeIcon from '@mui/icons-material/Code';
import MenuIcon from '@mui/icons-material/Menu';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Portfolio', to: '/portfolio' },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: 'rgba(255, 255, 255, 0.94)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid',
        borderColor: 'divider',
        color: 'text.primary',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 72, justifyContent: 'space-between' }}>
          <Box
            component={RouterLink}
            to="/"
            sx={{
              alignItems: 'center',
              color: 'inherit',
              display: 'flex',
              gap: 1.5,
              textDecoration: 'none',
            }}
          >
            <Box
              sx={{
                alignItems: 'center',
                bgcolor: 'primary.main',
                backgroundImage: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                borderRadius: 1,
                color: 'primary.contrastText',
                display: 'flex',
                height: 40,
                justifyContent: 'center',
                width: 40,
              }}
            >
              <CodeIcon fontSize="small" />
            </Box>
            <Box>
              <Typography variant="h6" component="div" sx={{ fontWeight: 800, lineHeight: 1.1 }}>
                Stackrix Labs
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ display: 'block', lineHeight: 1.2 }}>
                Software Solutions
              </Typography>
            </Box>
          </Box>

          <Stack direction="row" spacing={1.25} sx={{ display: { xs: 'none', md: 'flex' } }}>
            {navItems.map((item) => (
              <Button
                key={item.to}
                component={RouterLink}
                to={item.to}
                color={isActive(item.to) ? 'primary' : 'inherit'}
                variant="text"
                sx={{
                  bgcolor: isActive(item.to) ? 'rgba(37, 99, 235, 0.08)' : 'transparent',
                  color: isActive(item.to) ? 'primary.main' : 'text.secondary',
                  fontWeight: isActive(item.to) ? 800 : 700,
                  px: 1.5,
                }}
              >
                {item.label}
              </Button>
            ))}
            <Button
              component={RouterLink}
              to="/contact"
              variant="contained"
              sx={{
                backgroundImage: 'linear-gradient(90deg, #2563eb, #7c3aed)',
                ml: 1,
                px: 3,
                '&:hover': {
                  backgroundImage: 'linear-gradient(90deg, #1d4ed8, #6d28d9)',
                },
              }}
            >
              Get Started
            </Button>
          </Stack>

          <IconButton
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            color="inherit"
            onClick={() => setMobileMenuOpen((open) => !open)}
            sx={{ display: { xs: 'inline-flex', md: 'none' } }}
          >
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        PaperProps={{
          sx: {
            pt: 9,
            width: 'min(88vw, 340px)',
          },
        }}
      >
        <Box sx={{ px: 2 }}>
          <List disablePadding>
            {navItems.map((item) => (
              <ListItemButton
                key={item.to}
                component={RouterLink}
                to={item.to}
                selected={isActive(item.to)}
                onClick={() => setMobileMenuOpen(false)}
                sx={{ borderRadius: 1, mb: 0.5 }}
              >
                <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: 800 }} />
              </ListItemButton>
            ))}
          </List>
          <Divider sx={{ my: 2 }} />
          <Button
            component={RouterLink}
            to="/contact"
            fullWidth
            size="large"
            variant="contained"
            onClick={() => setMobileMenuOpen(false)}
            sx={{
              backgroundImage: 'linear-gradient(90deg, #2563eb, #7c3aed)',
              '&:hover': {
                backgroundImage: 'linear-gradient(90deg, #1d4ed8, #6d28d9)',
              },
            }}
          >
            Get Started
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
}
