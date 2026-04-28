import React from 'react';
import { Link } from 'react-router';
import { 
  ArrowRight, 
  Code2, 
  Palette, 
  Rocket, 
  Shield,
  Zap,
  Users,
  CheckCircle2,
  Star
} from 'lucide-react';

type ImageWithFallbackProps = React.ImgHTMLAttributes<HTMLImageElement> & { fallbackSrc?: string };

function ImageWithFallback({ src, alt, fallbackSrc = '/images/fallback.png', ...props }: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = React.useState<string | undefined>(typeof src === 'string' ? src : undefined);

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

export function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
                <Zap className="size-4" />
                <span className="text-sm font-medium">Professional Software Solutions</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                We provide custom-built software services
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> for businesses of all sizes</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                We specialize in building custom software solutions tailored to your unique business needs. From simple landing pages to complex software applications.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-shadow font-medium"
                >
                  Start Your Project
                  <ArrowRight className="size-5" />
                </Link>
                <Link 
                  to="/portfolio"
                  className="inline-flex items-center gap-2 bg-white text-gray-700 px-8 py-4 rounded-lg border-2 border-gray-300 hover:border-blue-600 transition-colors font-medium"
                >
                  View Portfolio
                </Link>
              </div>
            </div>

            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1607971422532-73f9d45d7a47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlciUyMGNvZGluZyUyMGxhcHRvcHxlbnwxfHx8fDE3NzA5NTA5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Software development"
                className="rounded-2xl shadow-2xl w-full"
              />
              
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <CheckCircle2 className="size-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Delivery Guaranteed</div>
                    <div className="text-sm text-gray-600">On-time, every time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-blue-600 font-semibold mb-2">WHAT I DO</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Websites Built For Your Success
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I create custom web solutions that help businesses thrive online. Every project is tailored to your specific goals and requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-xl transition-shadow">
              <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Code2 className="size-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Development</h3>
              <p className="text-gray-700 mb-6">
                Tailor-made websites built from scratch using modern technologies. No templates, just unique solutions designed for your business.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-blue-600" />
                  React & Modern JavaScript
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-blue-600" />
                  Responsive Design
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-blue-600" />
                  Fast Performance
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-xl transition-shadow">
              <div className="bg-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Palette className="size-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Design & UX</h3>
              <p className="text-gray-700 mb-6">
                Beautiful, intuitive interfaces that users love. I focus on creating engaging experiences that convert visitors into customers.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-purple-600" />
                  User-Centered Design
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-purple-600" />
                  Modern Aesthetics
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-purple-600" />
                  Conversion Focused
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-2xl hover:shadow-xl transition-shadow">
              <div className="bg-pink-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Rocket className="size-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Full-Service</h3>
              <p className="text-gray-700 mb-6">
                From initial concept to launch and beyond. I handle everything including hosting, maintenance, and ongoing support.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-pink-600" />
                  Domain & Hosting Setup
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-pink-600" />
                  Ongoing Maintenance
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-pink-600" />
                  Technical Support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Websites Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-blue-600 font-semibold mb-2">VERSATILE SOLUTIONS</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Any Type of Website You Need
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              No matter what kind of website you envision, I have the expertise to bring it to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Business Websites', desc: 'Professional sites for companies and organizations', icon: '🏢' },
              { name: 'E-commerce Stores', desc: 'Online shops with payment integration', icon: '🛒' },
              { name: 'Portfolio Sites', desc: 'Showcase your work beautifully', icon: '🎨' },
              { name: 'Landing Pages', desc: 'High-converting single-page sites', icon: '🎯' },
              { name: 'Web Applications', desc: 'Interactive tools and platforms', icon: '⚙️' },
              { name: 'Blogs & Content Sites', desc: 'Content management systems', icon: '📝' }
            ].map((type, index) => (
              <div key={index} className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow border border-gray-100">
                <div className="text-4xl mb-3">{type.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{type.name}</h3>
                <p className="text-gray-600 text-sm">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1728598909887-2d983a8889b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcwODY2NzkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Web design workspace"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>

            <div>
              <div className="text-blue-600 font-semibold mb-2">WHY CHOOSE ME</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Your Success Is My Priority
              </h2>
              <p className="text-gray-600 mb-8">
                As a dedicated Software Solution Consultant, I bring technical expertise and creative problem-solving to every project.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <Shield className="size-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Quality Guaranteed</h3>
                    <p className="text-gray-600 text-sm">Every line of code is tested and optimized for performance and security.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-lg flex-shrink-0">
                    <Users className="size-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Client-Focused Approach</h3>
                    <p className="text-gray-600 text-sm">Your vision guides every decision. I work closely with you throughout the project.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-pink-100 p-3 rounded-lg flex-shrink-0">
                    <Zap className="size-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Fast Turnaround</h3>
                    <p className="text-gray-600 text-sm">Efficient processes mean your website launches on schedule, every time.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link 
                  to="/about"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
                >
                  Learn More About Me
                  <ArrowRight className="size-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Clients Say</h2>
            <p className="text-blue-100">Real feedback from satisfied clients</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Emily Johnson',
                role: 'Business Owner',
                text: 'The website exceeded all our expectations. Professional, fast, and exactly what we needed to grow our online presence.',
                rating: 5
              },
              {
                name: 'Michael Chen',
                role: 'Startup Founder',
                text: 'Working with a true professional. The attention to detail and communication throughout was exceptional.',
                rating: 5
              },
              {
                name: 'Sarah Williams',
                role: 'Marketing Director',
                text: 'Our new website has transformed our business. More leads, better engagement, and a modern look we are proud of.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="size-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-white/90 mb-6">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-blue-200">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Build Your Dream Website?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss your project and create something amazing together.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-shadow font-medium"
            >
              Get Started Now
              <ArrowRight className="size-5" />
            </Link>
            <Link 
              to="/portfolio"
              className="inline-flex items-center gap-2 bg-white text-gray-700 px-8 py-4 rounded-lg border-2 border-gray-300 hover:border-blue-600 transition-colors font-medium"
            >
              View My Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
