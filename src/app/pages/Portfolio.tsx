import React from 'react';
import { Link } from 'react-router';
import { ExternalLink, ArrowRight } from 'lucide-react';

function ImageWithFallback({
  src,
  alt,
  className
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [errored, setErrored] = React.useState(false);
  const fallback =
    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800"><rect width="100%" height="100%" fill="%23f3f4f6"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23959ea6" font-family="Arial, Helvetica, sans-serif" font-size="24">Image unavailable</text></svg>';
  return (
    // simple <img> fallback; replace with next/image or custom loader if needed
    <img
      src={errored ? fallback : src}
      alt={alt}
      className={className}
      onError={() => setErrored(true)}
    />
  );
}

export function Portfolio() {
  const projects = [
    {
      title: 'E-Commerce Fashion Store',
      category: 'E-Commerce',
      description: 'A modern online fashion boutique with product catalog, shopping cart, and secure checkout. Built with React and integrated payment processing.',
      image: 'https://images.unsplash.com/photo-1613211431746-aacbe481a84b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGVzaWduJTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzcwOTM2MzcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'E-commerce', 'Stripe', 'Responsive'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Corporate Business Website',
      category: 'Business',
      description: 'Professional corporate website for a consulting firm. Features include service pages, team profiles, blog, and contact forms.',
      image: 'https://images.unsplash.com/photo-1607971422532-73f9d45d7a47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlciUyMGNvZGluZyUyMGxhcHRvcHxlbnwxfHx8fDE3NzA5NTA5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Corporate', 'CMS', 'SEO', 'Multi-page'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Restaurant Menu & Ordering',
      category: 'Restaurant',
      description: 'Digital menu and online ordering system for a local restaurant. Includes real-time order management and customer notifications.',
      image: 'https://images.unsplash.com/photo-1728598909887-2d983a8889b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcwODY2NzkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'Real-time', 'Mobile-first', 'API'],
      color: 'from-orange-500 to-amber-500'
    },
    {
      title: 'Portfolio Website for Designer',
      category: 'Portfolio',
      description: 'Creative portfolio showcasing design work with smooth animations and interactive galleries. Optimized for visual impact.',
      image: 'https://images.unsplash.com/photo-1762341114881-669da93fef88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwcHJvZmVzc2lvbmFsJTIwb2ZmaWNlfGVufDF8fHx8MTc3MDk1MDk2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Creative', 'Animations', 'Gallery', 'Modern'],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'SaaS Landing Page',
      category: 'Landing Page',
      description: 'High-converting landing page for a SaaS product. Features include pricing tables, testimonials, and lead capture forms.',
      image: 'https://images.unsplash.com/photo-1607971422532-73f9d45d7a47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlciUyMGNvZGluZyUyMGxhcHRvcHxlbnwxfHx8fDE3NzA5NTA5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Landing Page', 'Conversion', 'Marketing', 'Forms'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Real Estate Listings Platform',
      category: 'Web App',
      description: 'Property listing website with advanced search filters, map integration, and virtual tour features. Full CRUD functionality.',
      image: 'https://images.unsplash.com/photo-1728598909887-2d983a8889b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcwODY2NzkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Web App', 'Database', 'Maps', 'Search'],
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-blue-600 font-semibold mb-4">PORTFOLIO</div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Recent Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore a selection of websites I've built for clients across different industries. Each project is crafted with care and tailored to specific business goals.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity`}></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-gray-900">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all">
                    View Case Study
                    <ExternalLink className="size-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What I Can Build For You
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From simple landing pages to complex web applications, I have experience building all types of websites.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🏢', title: 'Business Sites', count: '15+ Projects' },
              { icon: '🛍️', title: 'E-Commerce', count: '10+ Projects' },
              { icon: '🎨', title: 'Portfolios', count: '12+ Projects' },
              { icon: '📱', title: 'Web Apps', count: '8+ Projects' },
              { icon: '📄', title: 'Landing Pages', count: '20+ Projects' },
              { icon: '🍽️', title: 'Restaurant Sites', count: '6+ Projects' },
              { icon: '🏥', title: 'Healthcare', count: '5+ Projects' },
              { icon: '🎓', title: 'Educational', count: '4+ Projects' }
            ].map((type, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="text-5xl mb-3">{type.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{type.title}</h3>
                <p className="text-sm text-gray-600">{type.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Every Project Follows a Proven Process
              </h2>
              <p className="text-gray-600 mb-8">
                Whether you need a simple brochure website or a complex e-commerce platform, I follow a structured approach to ensure your project succeeds.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-blue-100 text-blue-600 font-bold w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Consultation & Planning</h3>
                    <p className="text-gray-600 text-sm">We discuss your goals, requirements, and create a detailed project roadmap.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-purple-100 text-purple-600 font-bold w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Design & Prototype</h3>
                    <p className="text-gray-600 text-sm">Creating mockups and getting your feedback before development begins.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-pink-100 text-pink-600 font-bold w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Development & Testing</h3>
                    <p className="text-gray-600 text-sm">Building your website with clean code and thorough testing.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-green-100 text-green-600 font-bold w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Launch & Support</h3>
                    <p className="text-gray-600 text-sm">Deploying your site and providing ongoing maintenance and updates.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-10 rounded-2xl text-white">
              <h3 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h3>
              <p className="mb-8 text-blue-100">
                Let's discuss your website needs and create something exceptional together. Get a free consultation and project quote.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <div className="bg-white/20 p-1 rounded-full">
                    <svg className="size-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Free initial consultation
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-white/20 p-1 rounded-full">
                    <svg className="size-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Detailed project proposal
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-white/20 p-1 rounded-full">
                    <svg className="size-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Transparent pricing
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-white/20 p-1 rounded-full">
                    <svg className="size-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Flexible timeline options
                </li>
              </ul>

              <Link 
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-semibold w-full justify-center"
              >
                Get Your Free Quote
                <ArrowRight className="size-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Built With Modern Technologies
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            All projects are developed using cutting-edge tools and frameworks for optimal performance and maintainability.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Next.js', 'MongoDB', 'PostgreSQL', 'REST APIs'].map((tech, index) => (
              <div 
                key={index}
                className="bg-white px-6 py-3 rounded-full border-2 border-gray-200 font-semibold text-gray-700 hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
