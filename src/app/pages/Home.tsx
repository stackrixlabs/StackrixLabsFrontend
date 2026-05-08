import { Link as RouterLink } from 'react-router';
import { useState, type ElementType, type ImgHTMLAttributes } from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Stack,
  Typography,
} from '@mui/material';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArticleIcon from '@mui/icons-material/Article';
import BrushIcon from '@mui/icons-material/Brush';
import BusinessIcon from '@mui/icons-material/Business';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CodeIcon from '@mui/icons-material/Code';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import GroupsIcon from '@mui/icons-material/Groups';
import PaletteIcon from '@mui/icons-material/Palette';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SecurityIcon from '@mui/icons-material/Security';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

type ImageWithFallbackProps = ImgHTMLAttributes<HTMLImageElement> & { fallbackSrc?: string };

function ImageWithFallback({ src, alt, fallbackSrc = '/images/fallback.png', ...props }: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState<string | undefined>(typeof src === 'string' ? src : undefined);

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={() => {
        if (fallbackSrc && imgSrc !== fallbackSrc) setImgSrc(fallbackSrc);
      }}
      {...props}
    />
  );
}

const services = [
  {
    title: 'Custom Development',
    text: 'Tailor-made websites built from scratch using modern technologies. No templates, just unique solutions designed for your business.',
    icon: CodeIcon,
    color: '#2563eb',
    tint: '#eff6ff',
    bullets: ['React & Modern JavaScript', 'Responsive Design', 'Fast Performance'],
  },
  {
    title: 'Design & UX',
    text: 'Beautiful, intuitive interfaces that users love. We focus on creating engaging experiences that convert visitors into customers.',
    icon: PaletteIcon,
    color: '#7c3aed',
    tint: '#f5f3ff',
    bullets: ['User-Centered Design', 'Modern Aesthetics', 'Conversion Focused'],
  },
  {
    title: 'Full-Service',
    text: 'From initial concept to launch and beyond. We handle everything including hosting, maintenance, and ongoing support.',
    icon: RocketLaunchIcon,
    color: '#db2777',
    tint: '#fdf2f8',
    bullets: ['Domain & Hosting Setup', 'Ongoing Maintenance', 'Technical Support'],
  },
];

const websiteTypes = [
  { name: 'Business Websites', desc: 'Professional sites for companies and organizations', icon: BusinessIcon },
  { name: 'E-commerce Stores', desc: 'Online shops with payment integration', icon: ShoppingCartIcon },
  { name: 'Portfolio Sites', desc: 'Showcase your work beautifully', icon: BrushIcon },
  { name: 'Landing Pages', desc: 'High-converting single-page sites', icon: AdsClickIcon },
  { name: 'Web Applications', desc: 'Interactive tools and platforms', icon: SettingsApplicationsIcon },
  { name: 'Blogs & Content Sites', desc: 'Content management systems', icon: ArticleIcon },
];

const reasons = [
  {
    title: 'Quality Guaranteed',
    text: 'Every line of code is tested and optimized for performance and security.',
    icon: SecurityIcon,
    color: '#2563eb',
    tint: '#dbeafe',
  },
  {
    title: 'Client-Focused Approach',
    text: 'Your vision guides every decision. We work closely with you throughout the project.',
    icon: GroupsIcon,
    color: '#7c3aed',
    tint: '#ede9fe',
  },
  {
    title: 'Fast Turnaround',
    text: 'Efficient processes mean your website launches on schedule, every time.',
    icon: FlashOnIcon,
    color: '#db2777',
    tint: '#fce7f3',
  },
];

export function Home() {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      <Box
        component="section"
        sx={{
          alignItems: 'center',
          backgroundImage:
            'linear-gradient(90deg, rgba(15, 23, 42, 0.82), rgba(37, 99, 235, 0.58)), url("https://images.unsplash.com/photo-1607971422532-73f9d45d7a47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlciUyMGNvZGluZyUyMGxhcHRvcHxlbnwxfHx8fDE3NzA5NTA5NjR8MA&ixlib=rb-4.1.0&q=80&w=1600&utm_source=figma&utm_medium=referral")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          color: 'white',
          display: 'flex',
          minHeight: { xs: 720, md: 760 },
          pt: 9,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: 820, py: { xs: 8, md: 12 } }}>
            <Chip
              icon={<FlashOnIcon />}
              label="Professional Software Solutions"
              sx={{
                bgcolor: 'rgba(255, 255, 255, 0.16)',
                color: 'white',
                mb: 3,
                '.MuiChip-icon': { color: 'white' },
              }}
            />
            <Typography variant="h1" sx={{ fontSize: { xs: 44, md: 72 }, mb: 3 }}>
              We provide custom-built software services for businesses of all types and sizes
            </Typography>
            <Typography sx={{ color: 'rgba(255, 255, 255, 0.84)', fontSize: { xs: 18, md: 21 }, maxWidth: 720, mb: 4 }}>
              We specialize in building custom software solutions tailored to your unique business needs. From simple landing pages to complex software applications.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button
                component={RouterLink}
                to="/contact"
                size="large"
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                sx={{ bgcolor: 'white', color: 'primary.main', '&:hover': { bgcolor: '#eff6ff' } }}
              >
                Start Your Project
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <SectionIntro
            eyebrow="WHAT WE DO"
            title="Websites Built For Your Success"
            text="I create custom web solutions that help businesses thrive online. Every project is tailored to your specific goals and requirements."
          />

          <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' } }}>
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </Box>
        </Container>
      </Box>

      <Box component="section" sx={{ bgcolor: '#f9fafb', py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <SectionIntro
            eyebrow="VERSATILE SOLUTIONS"
            title="Any Type of Website You Need"
            text="No matter what kind of website you envision, we have the expertise to bring it to life."
          />

          <Box sx={{ display: 'grid', gap: 2.5, gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' } }}>
            {websiteTypes.map((type) => (
              <IconSummaryCard key={type.name} {...type} />
            ))}
          </Box>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gap: { xs: 5, md: 7 }, gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, alignItems: 'center' }}>
            <Box sx={{ overflow: 'hidden', borderRadius: 1, boxShadow: '0 24px 70px rgba(15, 23, 42, 0.18)' }}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1728598909887-2d983a8889b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcwODY2NzkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Web design workspace"
                style={{ display: 'block', width: '100%', aspectRatio: '4 / 3', objectFit: 'cover' }}
              />
            </Box>

            <Box>
              <Typography color="primary" sx={{ fontWeight: 800, mb: 1 }}>
                WHY CHOOSE ME
              </Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: 34, md: 44 }, mb: 2 }}>
                Your Success Is My Priority
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 4 }}>
                As a dedicated Software Consultant, we bring technical expertise and creative problem-solving to every project.
              </Typography>

              <Stack spacing={3}>
                {reasons.map((reason) => (
                  <ReasonRow key={reason.title} {...reason} />
                ))}
              </Stack>

              <Button component={RouterLink} to="/about" endIcon={<ArrowForwardIcon />} sx={{ mt: 4 }}>
                Learn More About Us
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box component="section" sx={{ bgcolor: '#f9fafb', py: { xs: 8, md: 10 }, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h2" sx={{ fontSize: { xs: 34, md: 44 }, mb: 2 }}>
            Ready to Build Your Dream Website?
          </Typography>
          <Typography color="text.secondary" sx={{ fontSize: { xs: 18, md: 20 }, mb: 4 }}>
            Let's discuss your project and create something amazing together.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button component={RouterLink} to="/contact" size="large" variant="contained" endIcon={<ArrowForwardIcon />}>
              Get Started Now
            </Button>
            <Button component={RouterLink} to="/portfolio" size="large" variant="outlined">
              View My Work
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

function SectionIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <Box sx={{ textAlign: 'center', maxWidth: 760, mx: 'auto', mb: 6 }}>
      <Typography color="primary" sx={{ fontWeight: 800, mb: 1 }}>
        {eyebrow}
      </Typography>
      <Typography variant="h2" sx={{ fontSize: { xs: 34, md: 44 }, mb: 2 }}>
        {title}
      </Typography>
      <Typography color="text.secondary">{text}</Typography>
    </Box>
  );
}

function ServiceCard({ title, text, icon: Icon, color, tint, bullets }: {
  title: string;
  text: string;
  icon: ElementType;
  color: string;
  tint: string;
  bullets: string[];
}) {
  return (
    <Card elevation={0} sx={{ bgcolor: tint, border: '1px solid rgba(17, 24, 39, 0.08)', height: '100%' }}>
      <CardContent sx={{ p: 4 }}>
        <Avatar variant="rounded" sx={{ bgcolor: color, height: 64, mb: 3, width: 64 }}>
          <Icon />
        </Avatar>
        <Typography variant="h3" sx={{ fontSize: 25, mb: 2 }}>
          {title}
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 3 }}>
          {text}
        </Typography>
        <Stack spacing={1.25}>
          {bullets.map((bullet) => (
            <Stack key={bullet} direction="row" spacing={1} alignItems="center">
              <CheckCircleIcon sx={{ color, fontSize: 20 }} />
              <Typography variant="body2" color="text.secondary">
                {bullet}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}

function IconSummaryCard({ name, desc, icon: Icon }: { name: string; desc: string; icon: ElementType }) {
  return (
    <Card elevation={0} sx={{ border: '1px solid', borderColor: 'divider', height: '100%' }}>
      <CardContent sx={{ p: 3 }}>
        <Avatar variant="rounded" sx={{ bgcolor: '#eff6ff', color: 'primary.main', height: 54, mb: 2, width: 54 }}>
          <Icon />
        </Avatar>
        <Typography variant="h3" sx={{ fontSize: 21, mb: 1 }}>
          {name}
        </Typography>
        <Typography color="text.secondary" variant="body2">
          {desc}
        </Typography>
      </CardContent>
    </Card>
  );
}

function ReasonRow({ title, text, icon: Icon, color, tint }: {
  title: string;
  text: string;
  icon: ElementType;
  color: string;
  tint: string;
}) {
  return (
    <Stack direction="row" spacing={2} alignItems="flex-start">
      <Avatar variant="rounded" sx={{ bgcolor: tint, color, height: 52, width: 52 }}>
        <Icon />
      </Avatar>
      <Box>
        <Typography sx={{ fontWeight: 800, mb: 0.5 }}>{title}</Typography>
        <Typography color="text.secondary" variant="body2">
          {text}
        </Typography>
      </Box>
    </Stack>
  );
}
