import { Link as RouterLink } from 'react-router';
import {
  Box,
  Container,
  Divider,
  IconButton,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import TwitterIcon from '@mui/icons-material/Twitter';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

const services = ['Custom Websites', 'E-commerce Solutions', 'Web Applications', 'Consulting Services'];

export function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: '#111827', color: 'grey.300', py: 6 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gap: 4,
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, minmax(0, 1fr))',
              md: '1.3fr repeat(3, 1fr)',
            },
            mb: 4,
          }}
        >
          <Box>
            <Stack direction="row" spacing={1.25} alignItems="center" sx={{ mb: 2 }}>
              <Box
                sx={{
                  alignItems: 'center',
                  backgroundImage: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                  borderRadius: 1,
                  color: 'white',
                  display: 'flex',
                  height: 36,
                  justifyContent: 'center',
                  width: 36,
                }}
              >
                <CodeIcon fontSize="small" />
              </Box>
              <Typography variant="h6" sx={{ color: 'white', fontWeight: 800 }}>
                 Stackrix Labs
              </Typography>
            </Stack>
            <Typography variant="body2" sx={{ maxWidth: 260 }}>
              Creating exceptional websites tailored to your business needs.
            </Typography>
          </Box>

          <Box>
            <Typography sx={{ color: 'white', fontWeight: 800, mb: 2 }}>Quick Links</Typography>
            <Stack spacing={1}>
              {quickLinks.map((item) => (
                <Link
                  key={item.to}
                  component={RouterLink}
                  to={item.to}
                  underline="none"
                  color="inherit"
                  variant="body2"
                  sx={{ width: 'fit-content', '&:hover': { color: 'primary.light' } }}
                >
                  {item.label}
                </Link>
              ))}
            </Stack>
          </Box>

          <Box>
            <Typography sx={{ color: 'white', fontWeight: 800, mb: 2 }}>Services</Typography>
            <Stack component="ul" spacing={1} sx={{ listStyle: 'none', m: 0, p: 0 }}>
              {services.map((service) => (
                <Typography key={service} component="li" variant="body2">
                  {service}
                </Typography>
              ))}
            </Stack>
          </Box>

          <Box>
            <Typography sx={{ color: 'white', fontWeight: 800, mb: 2 }}>Connect</Typography>
            <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
              <IconButton aria-label="LinkedIn" href="#" sx={{ bgcolor: '#1f2937', color: 'white', '&:hover': { bgcolor: 'primary.main' } }}>
                <LinkedInIcon fontSize="small" />
              </IconButton>
              <IconButton aria-label="GitHub" href="#" sx={{ bgcolor: '#1f2937', color: 'white', '&:hover': { bgcolor: 'primary.main' } }}>
                <GitHubIcon fontSize="small" />
              </IconButton>
              <IconButton aria-label="Twitter" href="#" sx={{ bgcolor: '#1f2937', color: 'white', '&:hover': { bgcolor: 'primary.main' } }}>
                <TwitterIcon fontSize="small" />
              </IconButton>
            </Stack>
            <Link
              href="mailto:stackrixlabs@gmail.com"
              underline="none"
              color="inherit"
              variant="body2"
              sx={{ alignItems: 'center', display: 'inline-flex', gap: 1, '&:hover': { color: 'primary.light' } }}
            >
              <MailIcon fontSize="small" />
              stackrixlabs@gmail.com
            </Link>
          </Box>
        </Box>

        <Divider sx={{ borderColor: '#1f2937', mb: 3 }} />
        <Typography variant="body2" textAlign="center">
          &copy; 2026 Stackrix Labs. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
