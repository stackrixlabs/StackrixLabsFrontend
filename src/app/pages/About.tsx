import { Link as RouterLink } from 'react-router';
import { useState, type ElementType, type ImgHTMLAttributes } from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BrushIcon from '@mui/icons-material/Brush';
import CodeIcon from '@mui/icons-material/Code';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LayersIcon from '@mui/icons-material/Layers';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PublicIcon from '@mui/icons-material/Public';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import StorageIcon from '@mui/icons-material/Storage';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';

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

const expertise = [
  {
    title: 'Full-Stack Development',
    text: 'End-to-end development using React, Node.js, and modern frameworks to build scalable web applications.',
    icon: CodeIcon,
    color: '#2563eb',
  },
  {
    title: 'UI/UX Design',
    text: 'Creating beautiful, intuitive interfaces that provide exceptional user experiences and drive conversions.',
    icon: BrushIcon,
    color: '#7c3aed',
  },
  {
    title: 'Responsive Design',
    text: 'Ensuring your website looks perfect and functions flawlessly on all devices, from mobile to desktop.',
    icon: SmartphoneIcon,
    color: '#db2777',
  },
  {
    title: 'Database Integration',
    text: 'Implementing robust database solutions for data management, user authentication, and dynamic content.',
    icon: StorageIcon,
    color: '#16a34a',
  },
  {
    title: 'SEO Optimization',
    text: 'Building websites with SEO best practices to help your business rank higher in search results.',
    icon: PublicIcon,
    color: '#ea580c',
  },
  {
    title: 'Custom Solutions',
    text: 'Tailored development to meet your specific requirements, no matter how unique or complex.',
    icon: LayersIcon,
    color: '#4f46e5',
  },
];

const technologies = [
  { name: 'React', category: 'Frontend' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Material UI', category: 'Design System' },
  { name: 'Next.js', category: 'Framework' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Figma', category: 'Design' },
  { name: 'Git', category: 'Version Control' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'Vercel', category: 'Hosting' },
  { name: 'REST APIs', category: 'Integration' },
];

const process = [
  {
    title: 'Discovery',
    text: 'Understanding your business, goals, and target audience to create the perfect strategy.',
  },
  {
    title: 'Design',
    text: 'Creating wireframes and mockups that align with your brand and user expectations.',
  },
  {
    title: 'Development',
    text: 'Building your website with clean code, testing, and optimization throughout.',
  },
  {
    title: 'Launch',
    text: 'Deploying your website and providing ongoing support to ensure continued success.',
  },
];

const values = [
  {
    title: 'Excellence',
    text: 'Delivering high-quality work that exceeds expectations through attention to detail and best practices.',
    icon: EmojiEventsIcon,
  },
  {
    title: 'Results-Driven',
    text: 'Focusing on outcomes that matter to your business: more traffic, leads, and conversions.',
    icon: TrackChangesIcon,
  },
  {
    title: 'Client-First',
    text: "Your success is my success. I'm committed to building lasting relationships and ongoing support.",
    icon: FavoriteIcon,
  },
];

export function About() {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      <Box component="section" sx={{ background: 'linear-gradient(135deg, #eff6ff 0%, #f5f3ff 52%, #fdf2f8 100%)', pt: { xs: 15, md: 17 }, pb: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Box sx={{ alignItems: 'center', display: 'grid', gap: { xs: 5, md: 7 }, gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' } }}>
            <Box>
              <Typography color="primary" sx={{ fontWeight: 800, mb: 2 }}>
                ABOUT ME
              </Typography>
              <Typography variant="h1" sx={{ fontSize: { xs: 40, md: 58 }, mb: 3 }}>
                Software Solution Consultant Specializing in Web Development
              </Typography>
              <Typography color="text.secondary" sx={{ fontSize: { xs: 18, md: 20 }, mb: 4 }}>
                I&apos;m passionate about transforming ideas into exceptional digital experiences. With expertise in modern web technologies, I help businesses establish their online presence through custom-built websites.
              </Typography>
              <Button component={RouterLink} to="/contact" size="large" variant="contained" endIcon={<ArrowForwardIcon />}>
                Let&apos;s Work Together
              </Button>
            </Box>

            <Box sx={{ overflow: 'hidden', borderRadius: 1, boxShadow: '0 24px 70px rgba(15, 23, 42, 0.18)' }}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1762341114881-669da93fef88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwcHJvZmVzc2lvbmFsJTIwb2ZmaWNlfGVufDF8fHx8MTc3MDk1MDk2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional workspace"
                style={{ aspectRatio: '4 / 3', display: 'block', objectFit: 'cover', width: '100%' }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <SectionIntro
            title="My Expertise"
            text="As a Software Solution Consultant, I offer comprehensive web development services to bring your vision to life."
          />

          <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' } }}>
            {expertise.map((item) => (
              <ExpertiseCard key={item.title} {...item} />
            ))}
          </Box>
        </Container>
      </Box>

      <Box component="section" sx={{ bgcolor: '#f9fafb', py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <SectionIntro
            title="Technologies I Work With"
            text="I use modern, battle-tested technologies to ensure your website is fast, secure, and maintainable."
          />

          <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)', lg: 'repeat(6, 1fr)' } }}>
            {technologies.map((tech) => (
              <Paper key={tech.name} variant="outlined" sx={{ p: 2.5, textAlign: 'center' }}>
                <Typography sx={{ fontWeight: 800, mb: 0.5 }}>{tech.name}</Typography>
                <Typography color="text.secondary" variant="caption">
                  {tech.category}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <SectionIntro
            title="My Development Process"
            text="A proven approach that ensures successful project delivery every time."
          />

          <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' } }}>
            {process.map((step, index) => (
              <Paper key={step.title} elevation={0} sx={{ border: '1px solid', borderColor: 'divider', p: 3, textAlign: 'center' }}>
                <Avatar sx={{ bgcolor: ['#dbeafe', '#ede9fe', '#fce7f3', '#dcfce7'][index], color: ['#2563eb', '#7c3aed', '#db2777', '#16a34a'][index], fontSize: 28, fontWeight: 900, height: 72, mx: 'auto', mb: 2, width: 72 }}>
                  {index + 1}
                </Avatar>
                <Typography variant="h3" sx={{ fontSize: 21, mb: 1 }}>
                  {step.title}
                </Typography>
                <Typography color="text.secondary" variant="body2">
                  {step.text}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Container>
      </Box>

      <Box component="section" sx={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)', color: 'white', py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', maxWidth: 760, mx: 'auto', mb: 6 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: 34, md: 44 }, mb: 1.5 }}>
              What I Stand For
            </Typography>
            <Typography sx={{ color: 'rgba(255, 255, 255, 0.78)' }}>
              The principles that guide every project I undertake.
            </Typography>
          </Box>

          <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' } }}>
            {values.map((value) => (
              <ValueCard key={value.title} {...value} />
            ))}
          </Box>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 8, md: 10 }, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h2" sx={{ fontSize: { xs: 34, md: 44 }, mb: 2 }}>
            Let&apos;s Create Something Amazing
          </Typography>
          <Typography color="text.secondary" sx={{ fontSize: { xs: 18, md: 20 }, mb: 4 }}>
            Ready to start your project? Get in touch and let&apos;s discuss how I can help bring your vision to life.
          </Typography>
          <Button component={RouterLink} to="/contact" size="large" variant="contained" endIcon={<ArrowForwardIcon />}>
            Get Started Today
          </Button>
        </Container>
      </Box>
    </Box>
  );
}

function SectionIntro({ title, text }: { title: string; text: string }) {
  return (
    <Box sx={{ textAlign: 'center', maxWidth: 760, mx: 'auto', mb: 6 }}>
      <Typography variant="h2" sx={{ fontSize: { xs: 34, md: 44 }, mb: 2 }}>
        {title}
      </Typography>
      <Typography color="text.secondary">{text}</Typography>
    </Box>
  );
}

function ExpertiseCard({ title, text, icon: Icon, color }: {
  title: string;
  text: string;
  icon: ElementType;
  color: string;
}) {
  return (
    <Card elevation={0} sx={{ bgcolor: '#f9fafb', border: '1px solid', borderColor: 'divider', height: '100%' }}>
      <CardContent sx={{ p: 3 }}>
        <Avatar variant="rounded" sx={{ bgcolor: color, height: 56, mb: 2, width: 56 }}>
          <Icon />
        </Avatar>
        <Typography variant="h3" sx={{ fontSize: 21, mb: 1.5 }}>
          {title}
        </Typography>
        <Typography color="text.secondary">{text}</Typography>
      </CardContent>
    </Card>
  );
}

function ValueCard({ title, text, icon: Icon }: {
  title: string;
  text: string;
  icon: ElementType;
}) {
  return (
    <Paper elevation={0} sx={{ bgcolor: 'rgba(255, 255, 255, 0.12)', border: '1px solid rgba(255, 255, 255, 0.22)', color: 'white', p: 4, textAlign: 'center' }}>
      <Avatar sx={{ bgcolor: 'rgba(255, 255, 255, 0.18)', height: 64, mx: 'auto', mb: 3, width: 64 }}>
        <Icon />
      </Avatar>
      <Typography variant="h3" sx={{ fontSize: 25, mb: 2 }}>
        {title}
      </Typography>
      <Typography sx={{ color: 'rgba(255, 255, 255, 0.78)' }}>{text}</Typography>
    </Paper>
  );
}
