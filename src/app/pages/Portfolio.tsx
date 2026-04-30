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
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArticleIcon from '@mui/icons-material/Article';
import BrushIcon from '@mui/icons-material/Brush';
import BusinessIcon from '@mui/icons-material/Business';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CodeIcon from '@mui/icons-material/Code';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SchoolIcon from '@mui/icons-material/School';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import StorefrontIcon from '@mui/icons-material/Storefront';

type ImageWithFallbackProps = ImgHTMLAttributes<HTMLImageElement> & { fallbackSrc?: string };

function ImageWithFallback({ src, alt, fallbackSrc, ...props }: ImageWithFallbackProps) {
  const fallback =
    fallbackSrc ||
    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800"><rect width="100%" height="100%" fill="%23f3f4f6"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23959ea6" font-family="Arial, Helvetica, sans-serif" font-size="24">Image unavailable</text></svg>';
  const [imgSrc, setImgSrc] = useState<string | undefined>(typeof src === 'string' ? src : undefined);

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={() => {
        if (imgSrc !== fallback) setImgSrc(fallback);
      }}
      {...props}
    />
  );
}

const projects = [
  {
    title: 'E-Commerce Fashion Store',
    category: 'E-Commerce',
    description: 'A modern online fashion boutique with product catalog, shopping cart, and secure checkout. Built with React and integrated payment processing.',
    image: 'https://images.unsplash.com/photo-1613211431746-aacbe481a84b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGVzaWduJTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzcwOTM2MzcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['React', 'E-commerce', 'Stripe', 'Responsive'],
    color: '#db2777',
  },
  {
    title: 'Corporate Business Website',
    category: 'Business',
    description: 'Professional corporate website for a consulting firm. Features include service pages, team profiles, blog, and contact forms.',
    image: 'https://images.unsplash.com/photo-1607971422532-73f9d45d7a47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlciUyMGNvZGluZyUyMGxhcHRvcHxlbnwxfHx8fDE3NzA5NTA5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Corporate', 'CMS', 'SEO', 'Multi-page'],
    color: '#2563eb',
  },
  {
    title: 'Restaurant Menu & Ordering',
    category: 'Restaurant',
    description: 'Digital menu and online ordering system for a local restaurant. Includes real-time order management and customer notifications.',
    image: 'https://images.unsplash.com/photo-1728598909887-2d983a8889b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcwODY2NzkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['React', 'Real-time', 'Mobile-first', 'API'],
    color: '#ea580c',
  },
  {
    title: 'Portfolio Website for Designer',
    category: 'Portfolio',
    description: 'Creative portfolio showcasing design work with smooth animations and interactive galleries. Optimized for visual impact.',
    image: 'https://images.unsplash.com/photo-1762341114881-669da93fef88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwcHJvZmVzc2lvbmFsJTIwb2ZmaWNlfGVufDF8fHx8MTc3MDk1MDk2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Creative', 'Animations', 'Gallery', 'Modern'],
    color: '#7c3aed',
  },
  {
    title: 'SaaS Landing Page',
    category: 'Landing Page',
    description: 'High-converting landing page for a SaaS product. Features include pricing tables, testimonials, and lead capture forms.',
    image: 'https://images.unsplash.com/photo-1607971422532-73f9d45d7a47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlciUyMGNvZGluZyUyMGxhcHRvcHxlbnwxfHx8fDE3NzA5NTA5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Landing Page', 'Conversion', 'Marketing', 'Forms'],
    color: '#16a34a',
  },
  {
    title: 'Real Estate Listings Platform',
    category: 'Web App',
    description: 'Property listing website with advanced search filters, map integration, and virtual tour features. Full CRUD functionality.',
    image: 'https://images.unsplash.com/photo-1728598909887-2d983a8889b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcwODY2NzkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Web App', 'Database', 'Maps', 'Search'],
    color: '#0891b2',
  },
];

const projectTypes = [
  { icon: BusinessIcon, title: 'Business Sites', count: '15+ Projects' },
  { icon: StorefrontIcon, title: 'E-Commerce', count: '10+ Projects' },
  { icon: BrushIcon, title: 'Portfolios', count: '12+ Projects' },
  { icon: SmartphoneIcon, title: 'Web Apps', count: '8+ Projects' },
  { icon: ArticleIcon, title: 'Landing Pages', count: '20+ Projects' },
  { icon: RestaurantIcon, title: 'Restaurant Sites', count: '6+ Projects' },
  { icon: LocalHospitalIcon, title: 'Healthcare', count: '5+ Projects' },
  { icon: SchoolIcon, title: 'Educational', count: '4+ Projects' },
];

const processSteps = [
  {
    title: 'Consultation & Planning',
    text: 'We discuss your goals, requirements, and create a detailed project roadmap.',
    icon: SearchIcon,
    color: '#2563eb',
    tint: '#dbeafe',
  },
  {
    title: 'Design & Prototype',
    text: 'Creating mockups and getting your feedback before development begins.',
    icon: DesignServicesIcon,
    color: '#7c3aed',
    tint: '#ede9fe',
  },
  {
    title: 'Development & Testing',
    text: 'Building your website with clean code and thorough testing.',
    icon: CodeIcon,
    color: '#db2777',
    tint: '#fce7f3',
  },
  {
    title: 'Launch & Support',
    text: 'Deploying your site and providing ongoing maintenance and updates.',
    icon: RocketLaunchIcon,
    color: '#16a34a',
    tint: '#dcfce7',
  },
];

const technologies = ['React', 'TypeScript', 'Material UI', 'Node.js', 'Next.js', 'MongoDB', 'PostgreSQL', 'REST APIs'];

export function Portfolio() {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      <Box component="section" sx={{ background: 'linear-gradient(135deg, #eff6ff 0%, #f5f3ff 52%, #fdf2f8 100%)', pt: { xs: 15, md: 17 }, pb: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
          <Typography color="primary" sx={{ fontWeight: 800, mb: 2 }}>
            PORTFOLIO
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: 42, md: 68 }, mb: 3 }}>
            Recent Projects
          </Typography>
          <Typography color="text.secondary" sx={{ fontSize: { xs: 18, md: 20 }, maxWidth: 840, mx: 'auto' }}>
            Explore a selection of websites I&apos;ve built for clients across different industries. Each project is crafted with care and tailored to specific business goals.
          </Typography>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gap: 4, gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' } }}>
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </Box>
        </Container>
      </Box>

      <Box component="section" sx={{ bgcolor: '#f9fafb', py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <SectionIntro
            title="What I Can Build For You"
            text="From simple landing pages to complex web applications, I have experience building all types of websites."
          />
          <Box sx={{ display: 'grid', gap: 2.5, gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' } }}>
            {projectTypes.map((type) => (
              <ProjectTypeCard key={type.title} {...type} />
            ))}
          </Box>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Box sx={{ alignItems: 'center', display: 'grid', gap: { xs: 5, md: 7 }, gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' } }}>
            <Box>
              <Typography variant="h2" sx={{ fontSize: { xs: 34, md: 44 }, mb: 2 }}>
                Every Project Follows a Proven Process
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 4 }}>
                Whether you need a simple brochure website or a complex e-commerce platform, I follow a structured approach to ensure your project succeeds.
              </Typography>
              <Stack spacing={3}>
                {processSteps.map((step) => (
                  <ProcessRow key={step.title} {...step} />
                ))}
              </Stack>
            </Box>

            <Paper elevation={0} sx={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)', color: 'white', p: { xs: 3, md: 5 } }}>
              <Typography variant="h2" sx={{ fontSize: { xs: 30, md: 36 }, mb: 2 }}>
                Ready to Start Your Project?
              </Typography>
              <Typography sx={{ color: 'rgba(255, 255, 255, 0.78)', mb: 4 }}>
                Let&apos;s discuss your website needs and create something exceptional together. Get a free consultation and project quote.
              </Typography>
              <Stack spacing={1.5} sx={{ mb: 4 }}>
                {['Free initial consultation', 'Detailed project proposal', 'Transparent pricing', 'Flexible timeline options'].map((item) => (
                  <Stack key={item} direction="row" spacing={1.25} alignItems="center">
                    <CheckCircleIcon sx={{ color: 'rgba(255, 255, 255, 0.92)' }} />
                    <Typography>{item}</Typography>
                  </Stack>
                ))}
              </Stack>
              <Button
                component={RouterLink}
                to="/contact"
                fullWidth
                size="large"
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                sx={{ bgcolor: 'white', color: 'primary.main', '&:hover': { bgcolor: '#eff6ff' } }}
              >
                Get Your Free Quote
              </Button>
            </Paper>
          </Box>
        </Container>
      </Box>

      <Box component="section" sx={{ bgcolor: '#f9fafb', py: { xs: 8, md: 10 }, textAlign: 'center' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ fontSize: { xs: 32, md: 40 }, mb: 1.5 }}>
            Built With Modern Technologies
          </Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 720, mx: 'auto', mb: 5 }}>
            All projects are developed using modern tools and frameworks for optimal performance and maintainability.
          </Typography>
          <Stack direction="row" flexWrap="wrap" gap={1.5} justifyContent="center">
            {technologies.map((tech) => (
              <Chip key={tech} label={tech} variant="outlined" sx={{ bgcolor: 'white', fontSize: 16, px: 1.5, py: 2.4 }} />
            ))}
          </Stack>
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

function ProjectCard({ title, category, description, image, tags, color }: {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  color: string;
}) {
  return (
    <Card elevation={0} sx={{ border: '1px solid', borderColor: 'divider', height: '100%', overflow: 'hidden' }}>
      <Box sx={{ height: 288, overflow: 'hidden', position: 'relative' }}>
        <ImageWithFallback
          src={image}
          alt={title}
          style={{ display: 'block', height: '100%', objectFit: 'cover', width: '100%' }}
        />
        <Chip label={category} sx={{ bgcolor: 'rgba(255, 255, 255, 0.92)', fontWeight: 800, left: 16, position: 'absolute', top: 16 }} />
      </Box>
      <CardContent sx={{ p: 4 }}>
        <Typography variant="h3" sx={{ color, fontSize: { xs: 24, md: 28 }, mb: 1.5 }}>
          {title}
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 3 }}>
          {description}
        </Typography>
        <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 3 }}>
          {tags.map((tag) => (
            <Chip key={tag} label={tag} size="small" sx={{ bgcolor: '#f3f4f6' }} />
          ))}
        </Stack>
        <Button endIcon={<OpenInNewIcon />} sx={{ color }}>
          View Case Study
        </Button>
      </CardContent>
    </Card>
  );
}

function ProjectTypeCard({ icon: Icon, title, count }: {
  icon: ElementType;
  title: string;
  count: string;
}) {
  return (
    <Card elevation={0} sx={{ border: '1px solid', borderColor: 'divider', height: '100%', textAlign: 'center' }}>
      <CardContent sx={{ p: 3 }}>
        <Avatar variant="rounded" sx={{ bgcolor: '#eff6ff', color: 'primary.main', height: 56, mx: 'auto', mb: 2, width: 56 }}>
          <Icon />
        </Avatar>
        <Typography sx={{ fontWeight: 800, mb: 0.5 }}>{title}</Typography>
        <Typography color="text.secondary" variant="body2">
          {count}
        </Typography>
      </CardContent>
    </Card>
  );
}

function ProcessRow({ title, text, icon: Icon, color, tint }: {
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
