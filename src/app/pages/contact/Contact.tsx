import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Container,
  FormControl,
  FormControlLabel,
  InputLabel,
  Link,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import type { ReactNode } from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmailIcon from '@mui/icons-material/Email';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MessageIcon from '@mui/icons-material/Message';
import PhoneIcon from '@mui/icons-material/Phone';
import SendIcon from '@mui/icons-material/Send';
import { useContactViewModel } from './useContactViewModel';

const websiteTypes = [
  'Business Website',
  'E-Commerce Store',
  'Portfolio Website',
  'Landing Page',
  'Web Application',
  'Blog / Content Site',
  'Other',
];

const budgetRanges = [
  'Less than $5,000',
  '$5,000 - $10,000',
  '$10,000 - $25,000',
  '$25,000 - $50,000',
  '$50,000+',
  'Not sure yet',
];

const timelines = [
  'ASAP (1-2 weeks)',
  '1 month',
  '2-3 months',
  '3-6 months',
  'Flexible / Not urgent',
];

const faqs = [
  {
    q: 'How long does it take to build a website?',
    a: "Timeline varies based on complexity. A simple website takes 2-3 weeks, while complex e-commerce or web applications may take 2-3 months. I'll provide a detailed timeline during our consultation.",
  },
  {
    q: 'What information do you need to start?',
    a: "I'll need details about your business, target audience, design preferences, and specific features you want. Any existing brand materials like logos and colors are also helpful.",
  },
  {
    q: 'Do you provide hosting and maintenance?',
    a: 'Yes. I can handle hosting setup and offer ongoing maintenance packages to keep your website secure, updated, and running smoothly.',
  },
  {
    q: 'Will my website be mobile-friendly?',
    a: 'Absolutely. All websites I build are fully responsive and optimized for mobile, tablet, and desktop devices.',
  },
  {
    q: 'Can I update the website myself?',
    a: 'Yes, I can build your site with a user-friendly CMS that allows you to make updates easily. I also provide training and documentation.',
  },
];

export function Contact() {
  const {
    form,
    isLoading,
    isSuccess,
    isError,
    errorMsg,
    handleChange,
    handleSubmit,
  } = useContactViewModel();

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      <Box
        component="section"
        sx={{
          background: 'linear-gradient(135deg, #eff6ff 0%, #f5f3ff 52%, #fdf2f8 100%)',
          pb: { xs: 8, md: 10 },
          pt: { xs: 15, md: 17 },
        }}
      >
        <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
          <Typography color="primary" sx={{ fontWeight: 800, mb: 2 }}>
            GET IN TOUCH
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: 40, md: 64 }, mb: 3 }}>
            Let&apos;s Build Your Website
          </Typography>
          <Typography color="text.secondary" sx={{ fontSize: { xs: 18, md: 20 }, maxWidth: 780, mx: 'auto' }}>
            Ready to bring your vision to life? Fill out the form below and I&apos;ll get back to you within 24 hours to discuss your project.
          </Typography>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gap: { xs: 5, md: 7 },
              gridTemplateColumns: { xs: '1fr', md: '0.9fr 1.1fr' },
            }}
          >
            <Box>
              <Typography variant="h2" sx={{ fontSize: { xs: 30, md: 36 }, mb: 2 }}>
                Contact Information
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 4 }}>
                I&apos;m here to answer your questions and discuss how we can work together to create an effective website for your business.
              </Typography>

              <Stack spacing={3}>
                <ContactDetail
                  icon={<EmailIcon />}
                  tone="#dbeafe"
                  iconColor="#2563eb"
                  title="Email"
                  detail={
                    <Link href="mailto:hello@webcraft.com" color="text.secondary" underline="hover">
                      hello@webcraft.com
                    </Link>
                  }
                  meta="I typically respond within 24 hours"
                />
                <ContactDetail
                  icon={<PhoneIcon />}
                  tone="#ede9fe"
                  iconColor="#7c3aed"
                  title="Phone"
                  detail={
                    <Link href="tel:+15551234567" color="text.secondary" underline="hover">
                      +1 (555) 123-4567
                    </Link>
                  }
                  meta="Mon-Fri, 9am-6pm EST"
                />
                <ContactDetail
                  icon={<LocationOnIcon />}
                  tone="#fce7f3"
                  iconColor="#db2777"
                  title="Location"
                  detail={<Typography color="text.secondary">San Francisco, CA</Typography>}
                  meta="Available for remote projects worldwide"
                />
                <ContactDetail
                  icon={<AccessTimeIcon />}
                  tone="#dcfce7"
                  iconColor="#16a34a"
                  title="Working Hours"
                  detail={
                    <Stack spacing={0.25}>
                      <Typography color="text.secondary">Monday - Friday: 9:00 AM - 6:00 PM EST</Typography>
                      <Typography color="text.secondary">Saturday: 10:00 AM - 2:00 PM EST</Typography>
                      <Typography color="text.secondary">Sunday: Closed</Typography>
                    </Stack>
                  }
                />
              </Stack>

              <Paper
                variant="outlined"
                sx={{
                  background: 'linear-gradient(135deg, #eff6ff, #f5f3ff)',
                  borderColor: '#bfdbfe',
                  mt: 5,
                  p: 3,
                }}
              >
                <Stack direction="row" spacing={1.25} alignItems="center" sx={{ mb: 1.5 }}>
                  <MessageIcon color="primary" />
                  <Typography variant="h6" sx={{ fontWeight: 800 }}>
                    Prefer a Quick Chat?
                  </Typography>
                </Stack>
                <Typography color="text.secondary" variant="body2" sx={{ mb: 2 }}>
                  Schedule a free 30-minute consultation to discuss your project in detail.
                </Typography>
                <Button fullWidth variant="contained" size="large">
                  Schedule a Call
                </Button>
              </Paper>
            </Box>

            <Paper
              component="form"
              onSubmit={handleSubmit}
              elevation={0}
              sx={{
                border: '1px solid',
                borderColor: 'divider',
                boxShadow: '0 24px 70px rgba(15, 23, 42, 0.10)',
                p: { xs: 3, md: 4 },
              }}
            >
              <Typography variant="h2" sx={{ fontSize: { xs: 26, md: 30 }, mb: 3 }}>
                Send Me a Message
              </Typography>

              {isSuccess && (
                <Alert severity="success" sx={{ mb: 3 }}>
                  Message sent. I&apos;ll get back to you within 24 hours.
                </Alert>
              )}

              {isError && (
                <Alert severity="error" sx={{ mb: 3 }}>
                  {errorMsg}
                </Alert>
              )}

              <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' } }}>
                <TextField
                  label="First Name"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  required
                  fullWidth
                />
                <TextField
                  label="Last Name"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  required
                  fullWidth
                />
              </Box>

              <Stack spacing={3} sx={{ mt: 3 }}>
                <TextField
                  label="Email Address"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  fullWidth
                />
                <TextField
                  label="Phone Number"
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 123-4567"
                  fullWidth
                />

                <FormControl fullWidth required>
                  <InputLabel id="website-type-label">Website Type</InputLabel>
                  <Select
                    labelId="website-type-label"
                    label="Website Type"
                    name="websiteType"
                    value={form.websiteType}
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>Select a type...</em>
                    </MenuItem>
                    {websiteTypes.map((type) => (
                      <MenuItem key={type} value={type}>
                        {type}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel id="budget-label">Budget Range</InputLabel>
                  <Select
                    labelId="budget-label"
                    label="Budget Range"
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>Select your budget...</em>
                    </MenuItem>
                    {budgetRanges.map((range) => (
                      <MenuItem key={range} value={range}>
                        {range}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel id="timeline-label">Project Timeline</InputLabel>
                  <Select
                    labelId="timeline-label"
                    label="Project Timeline"
                    name="timeline"
                    value={form.timeline}
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>When do you need it?</em>
                    </MenuItem>
                    {timelines.map((timeline) => (
                      <MenuItem key={timeline} value={timeline}>
                        {timeline}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <TextField
                  label="Project Details"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, goals, and any specific requirements..."
                  required
                  fullWidth
                  multiline
                  rows={5}
                  helperText="Please be as detailed as possible to help me understand your needs."
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      name="agreement"
                      checked={form.agreement}
                      onChange={handleChange}
                    />
                  }
                  label="I agree to receive communications about my project and understand that my information will be kept confidential."
                  sx={{ alignItems: 'flex-start', '.MuiFormControlLabel-label': { color: 'text.secondary', fontSize: 14, pt: 1 } }}
                />

                <Button
                  type="submit"
                  disabled={isLoading}
                  size="large"
                  variant="contained"
                  startIcon={isLoading ? <CircularProgress color="inherit" size={20} /> : <SendIcon />}
                  sx={{
                    backgroundImage: 'linear-gradient(90deg, #2563eb, #7c3aed)',
                    '&:hover': {
                      backgroundImage: 'linear-gradient(90deg, #1d4ed8, #6d28d9)',
                    },
                  }}
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </Button>
              </Stack>
            </Paper>
          </Box>
        </Container>
      </Box>

      <Box component="section" sx={{ bgcolor: '#f9fafb', py: { xs: 8, md: 10 } }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', mb: 5 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: 30, md: 36 }, mb: 1.5 }}>
              Frequently Asked Questions
            </Typography>
            <Typography color="text.secondary">Common questions I receive from potential clients</Typography>
          </Box>

          <Stack spacing={2}>
            {faqs.map((faq) => (
              <Accordion
                key={faq.q}
                disableGutters
                elevation={0}
                sx={{
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 1,
                  overflow: 'hidden',
                  '&:before': { display: 'none' },
                }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography sx={{ fontWeight: 800 }}>{faq.q}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="text.secondary">{faq.a}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Stack>
        </Container>
      </Box>

      <Box
        component="section"
        sx={{
          background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
          color: 'white',
          py: { xs: 8, md: 10 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" sx={{ fontSize: { xs: 34, md: 44 }, mb: 2 }}>
            Let&apos;s Create Something Amazing
          </Typography>
          <Typography sx={{ color: 'rgba(255, 255, 255, 0.82)', fontSize: { xs: 18, md: 20 }, mb: 4 }}>
            Every great website starts with a conversation. I&apos;m excited to hear about your project and help you succeed online.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button href="mailto:hello@webcraft.com" size="large" variant="contained" sx={{ bgcolor: 'white', color: 'primary.main', '&:hover': { bgcolor: '#eff6ff' } }}>
              Email Me Directly
            </Button>
            <Button href="tel:+15551234567" size="large" variant="outlined" sx={{ borderColor: 'rgba(255, 255, 255, 0.46)', color: 'white', '&:hover': { borderColor: 'white', bgcolor: 'rgba(255, 255, 255, 0.12)' } }}>
              Call Now
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

type ContactDetailProps = {
  icon: ReactNode;
  tone: string;
  iconColor: string;
  title: string;
  detail: ReactNode;
  meta?: string;
};

function ContactDetail({ icon, tone, iconColor, title, detail, meta }: ContactDetailProps) {
  return (
    <Stack direction="row" spacing={2} alignItems="flex-start">
      <Box
        sx={{
          alignItems: 'center',
          bgcolor: tone,
          borderRadius: 1,
          color: iconColor,
          display: 'flex',
          flexShrink: 0,
          height: 48,
          justifyContent: 'center',
          width: 48,
        }}
      >
        {icon}
      </Box>
      <Box>
        <Typography sx={{ fontWeight: 800, mb: 0.5 }}>{title}</Typography>
        {detail}
        {meta && (
          <Typography color="text.secondary" variant="body2" sx={{ mt: 0.5 }}>
            {meta}
          </Typography>
        )}
      </Box>
    </Stack>
  );
}
