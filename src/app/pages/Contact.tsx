import {
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
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';
import { useState, type ChangeEvent, type SubmitEvent } from 'react';
import { SendEmailAsync, FormState, SubmitStatus, INITIAL_FORM } from '../api/StackrixLabsBackendApi';

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

/**
 * Custom hook to manage the contact form state and behavior.
 * @returns All the state and handlers needed by the Contact View.
 */
export function SubmitContact() {
  // ── State ──────────────────────────────────
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  // ── Derived state (computed values) ────────
  const isLoading = status === 'loading';
  const isSuccess = status === 'success';
  const isError = status === 'error';

  // ── Handlers ───────────────────────────────

  // Handles any input, textarea, select, or checkbox change
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> | {
      target: {
        checked?: boolean;
        name?: string;
        type?: string;
        value: unknown;
      };
    }
  ) => {
    const { name, value, type } = e.target;
    if (!name) return;

    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? Boolean(e.target.checked) : String(value ?? ''),
    }));
  };

  // Validates form before calling the Model's submit function
  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    
    // Validation lives here in the ViewModel, not in the View
    if (!form.agreement) {
      setErrorMsg('Please agree to the terms before submitting.');
      setStatus('error');
      return;
    }

    try {
      // ViewModel calls the Model — View never does this directly
      await SendEmailAsync(form);
      setStatus('success');
      setForm(INITIAL_FORM);
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(
        err instanceof Error
          ? err.message
          : 'Failed to send message. Please try again.',
      );
    }
  };

  // ── Expose to View ─────────────────────────
  // The View only sees what the ViewModel decides to expose.
  // No raw setState, no fetch logic — just clean data and handlers.
  return {
    form,
    isLoading,
    isSuccess,
    isError,
    errorMsg,
    handleChange,
    handleSubmit,
  };
}


export function Contact() {
  const {
    form,
    isLoading,
    isSuccess,
    isError,
    errorMsg,
    handleChange,
    handleSubmit,
  } = SubmitContact();

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
            Let's Build Your Website
          </Typography>
          <Typography color="text.secondary" sx={{ fontSize: { xs: 18, md: 20 }, maxWidth: 780, mx: 'auto' }}>
            Ready to bring your vision to life? Fill out the form below and we will get back to you within the week to discuss your project.
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
                We're here to answer your questions and discuss how we can work together to create an effective web service for your business.
              </Typography>

              <Stack spacing={3}>
                <ContactDetail
                  icon={<EmailIcon />}
                  tone="#dbeafe"
                  iconColor="#2563eb"
                  title="Email"
                  detail={
                    <Link href="mailto:stackrixlabs@gmail.com" color="text.secondary" underline="hover">
                      stackrixlabs@gmail.com
                    </Link>
                  }
                  meta=""
                />
                <ContactDetail
                  icon={<LocationOnIcon />}
                  tone="#fce7f3"
                  iconColor="#db2777"
                  title="Location"
                  detail={<Typography color="text.secondary">Los Angeles, CA and Austin, TX</Typography>}
                  meta="Available for remote projects worldwide"
                />
              </Stack>
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
                Send Us a Message
              </Typography>

              {isSuccess && (
                <Alert severity="success" sx={{ mb: 3 }}>
                  Message sent. We'll get back to you within 24 hours.
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

function ContactDetail(props: ContactDetailProps) {
  return (
    <Stack direction="row" spacing={2} alignItems="flex-start">
      <Box
        sx={{
          alignItems: 'center',
          bgcolor: props.tone,
          borderRadius: 1,
          color: props.iconColor,
          display: 'flex',
          flexShrink: 0,
          height: 48,
          justifyContent: 'center',
          width: 48,
        }}
      >
        {props.icon}
      </Box>
      <Box>
        <Typography sx={{ fontWeight: 800, mb: 0.5 }}>{props.title}</Typography>
        {props.detail}
        {props.meta && (
          <Typography color="text.secondary" variant="body2" sx={{ mt: 0.5 }}>
            {props.meta}
          </Typography>
        )}
      </Box>
    </Stack>
  );
}
