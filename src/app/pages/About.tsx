import React from 'react';
import { Link } from 'react-router';
import { 
  Code2, 
  Palette, 
  Database,
  Layers,
  Globe,
  Smartphone,
  ArrowRight,
  Award,
  Target,
  Heart
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

export function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-blue-600 font-semibold mb-4">ABOUT ME</div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Software Solution Consultant Specializing in Web Development
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                I'm passionate about transforming ideas into exceptional digital experiences. With expertise in modern web technologies, I help businesses establish their online presence through custom-built websites.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-shadow font-medium"
              >
                Let's Work Together
                <ArrowRight className="size-5" />
              </Link>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1762341114881-669da93fef88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwcHJvZmVzc2lvbmFsJTIwb2ZmaWNlfGVufDF8fHx8MTc3MDk1MDk2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional workspace"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              My Expertise
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              As a Software Solution Consultant, I offer comprehensive web development services to bring your vision to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-blue-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Code2 className="size-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Full-Stack Development</h3>
              <p className="text-gray-600">
                End-to-end development using React, Node.js, and modern frameworks to build scalable web applications.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-purple-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Palette className="size-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">UI/UX Design</h3>
              <p className="text-gray-600">
                Creating beautiful, intuitive interfaces that provide exceptional user experiences and drive conversions.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-pink-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="size-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Responsive Design</h3>
              <p className="text-gray-600">
                Ensuring your website looks perfect and functions flawlessly on all devices, from mobile to desktop.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-green-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Database className="size-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Database Integration</h3>
              <p className="text-gray-600">
                Implementing robust database solutions for data management, user authentication, and dynamic content.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-orange-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Globe className="size-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">SEO Optimization</h3>
              <p className="text-gray-600">
                Building websites with SEO best practices to help your business rank higher in search results.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-indigo-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Layers className="size-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Solutions</h3>
              <p className="text-gray-600">
                Tailored development to meet your specific requirements, no matter how unique or complex.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technologies I Work With
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I use modern, battle-tested technologies to ensure your website is fast, secure, and maintainable.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'React', category: 'Frontend' },
              { name: 'TypeScript', category: 'Language' },
              { name: 'Node.js', category: 'Backend' },
              { name: 'Tailwind CSS', category: 'Styling' },
              { name: 'Next.js', category: 'Framework' },
              { name: 'MongoDB', category: 'Database' },
              { name: 'PostgreSQL', category: 'Database' },
              { name: 'Figma', category: 'Design' },
              { name: 'Git', category: 'Version Control' },
              { name: 'AWS', category: 'Cloud' },
              { name: 'Vercel', category: 'Hosting' },
              { name: 'REST APIs', category: 'Integration' }
            ].map((tech, index) => (
              <div key={index} className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow border border-gray-100">
                <div className="font-bold text-gray-900 mb-1">{tech.name}</div>
                <div className="text-xs text-gray-500">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              My Development Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A proven approach that ensures successful project delivery every time.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-3xl font-bold text-blue-600">1</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Discovery</h3>
              <p className="text-gray-600">
                Understanding your business, goals, and target audience to create the perfect strategy.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-3xl font-bold text-purple-600">2</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Design</h3>
              <p className="text-gray-600">
                Creating wireframes and mockups that align with your brand and user expectations.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-pink-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-3xl font-bold text-pink-600">3</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Development</h3>
              <p className="text-gray-600">
                Building your website with clean code, testing, and optimization throughout.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-3xl font-bold text-green-600">4</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Launch</h3>
              <p className="text-gray-600">
                Deploying your website and providing ongoing support to ensure continued success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              What I Stand For
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              The principles that guide every project I undertake.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="size-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Excellence</h3>
              <p className="text-blue-100">
                Delivering high-quality work that exceeds expectations through attention to detail and best practices.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="size-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Results-Driven</h3>
              <p className="text-blue-100">
                Focusing on outcomes that matter to your business - more traffic, leads, and conversions.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="size-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Client-First</h3>
              <p className="text-blue-100">
                Your success is my success. I'm committed to building lasting relationships and ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Let's Create Something Amazing
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Ready to start your project? Get in touch and let's discuss how I can help bring your vision to life.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-shadow font-medium"
          >
            Get Started Today
            <ArrowRight className="size-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
