import { Lightbulb } from 'lucide-react';

interface Template {
  name: string;
  data: Record<string, string[]>;
}

interface ExampleTemplatesProps {
  onLoadTemplate: (data: Record<string, string[]>) => void;
}

const templates: Template[] = [
  {
    name: 'Freelance Designer',
    data: {
      valueProposition: [
        'Custom design solutions for small businesses',
        'Fast turnaround times',
        'Affordable pricing packages'
      ],
      targetAudience: [
        'Small business owners',
        'Startups needing branding',
        'Entrepreneurs launching products'
      ],
      promotionChannels: [
        'Instagram portfolio',
        'LinkedIn networking',
        'Dribbble & Behance',
        'Local business events'
      ],
      contentStrategy: [
        'Daily design tips on Instagram',
        'Before/after case studies',
        'Client testimonial videos',
        'Free design resources'
      ],
      metrics: [
        'Social media followers growth',
        'Engagement rate',
        'Lead conversion rate',
        'Client referral rate'
      ],
      resources: [
        'Adobe Creative Suite',
        'Portfolio website',
        'Social media management tools',
        'Design templates library'
      ],
      revenue: [
        'Project-based fees',
        'Monthly retainer clients',
        'Digital product sales',
        'Online courses'
      ],
      costs: [
        'Software subscriptions',
        'Website hosting',
        'Marketing ads',
        'Professional development'
      ],
      activities: [
        'Client consultations',
        'Design creation',
        'Content posting',
        'Networking and outreach'
      ]
    }
  },
  {
    name: 'SaaS Startup',
    data: {
      valueProposition: [
        'All-in-one project management tool',
        'Automated workflow features',
        'Seamless team collaboration'
      ],
      targetAudience: [
        'Remote teams (10-50 people)',
        'Tech startups',
        'Creative agencies'
      ],
      promotionChannels: [
        'Product Hunt launch',
        'Tech blogs & publications',
        'YouTube tutorials',
        'Twitter/X thought leadership',
        'SEO content marketing'
      ],
      contentStrategy: [
        'Weekly productivity blog posts',
        'Video tutorials and demos',
        'Customer success stories',
        'Industry research reports',
        'Podcast sponsorships'
      ],
      metrics: [
        'Monthly active users',
        'Conversion rate (trial to paid)',
        'Customer acquisition cost',
        'Churn rate',
        'Net Promoter Score'
      ],
      resources: [
        'Development team',
        'Cloud infrastructure',
        'Marketing automation platform',
        'Customer support tools'
      ],
      revenue: [
        'Subscription tiers (Basic, Pro, Enterprise)',
        'Add-on features',
        'Annual plan discounts',
        'White-label licensing'
      ],
      costs: [
        'Cloud hosting',
        'Development team salaries',
        'Marketing and advertising',
        'Customer support',
        'Sales commissions'
      ],
      activities: [
        'Product development',
        'Customer onboarding',
        'Content creation',
        'Sales outreach',
        'Community building'
      ]
    }
  },
  {
    name: 'Content Creator',
    data: {
      valueProposition: [
        'Educational content in digital marketing',
        'Entertaining and actionable advice',
        'Community-driven learning'
      ],
      targetAudience: [
        'Aspiring marketers',
        'Small business owners',
        'Marketing professionals'
      ],
      promotionChannels: [
        'YouTube channel',
        'TikTok short-form content',
        'Email newsletter',
        'Podcast platform',
        'Instagram Reels'
      ],
      contentStrategy: [
        '3 YouTube videos per week',
        'Daily TikTok tips',
        'Weekly newsletter with insights',
        'Monthly live Q&A sessions',
        'Collaboration with other creators'
      ],
      metrics: [
        'Subscriber growth rate',
        'Video views and watch time',
        'Email open rates',
        'Engagement rate',
        'Revenue per 1000 views'
      ],
      resources: [
        'Video equipment and editing software',
        'Email marketing platform',
        'Thumbnail design tools',
        'Analytics tools'
      ],
      revenue: [
        'YouTube ad revenue',
        'Sponsored content',
        'Affiliate marketing',
        'Digital courses',
        'Membership community'
      ],
      costs: [
        'Equipment and software',
        'Video editing outsourcing',
        'Platform subscriptions',
        'Paid promotions',
        'Accounting and legal'
      ],
      activities: [
        'Content planning and scripting',
        'Filming and editing',
        'Community engagement',
        'Brand partnerships',
        'Email marketing'
      ]
    }
  }
];

export function ExampleTemplates({ onLoadTemplate }: ExampleTemplatesProps) {
  return (
    <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 border border-purple-200">
      <div className="flex items-center gap-2 mb-4">
        <Lightbulb className="size-5 text-purple-600" />
        <h3 className="font-semibold text-purple-900">Example Templates</h3>
      </div>
      <p className="text-sm text-gray-700 mb-4">
        Get started quickly with a pre-built business model template
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {templates.map((template) => (
          <button
            key={template.name}
            onClick={() => onLoadTemplate(template.data)}
            className="bg-white p-4 rounded-lg border border-purple-200 hover:border-purple-400 hover:shadow-md transition-all text-left"
          >
            <div className="font-medium text-purple-900">{template.name}</div>
            <div className="text-xs text-gray-600 mt-1">Click to load</div>
          </button>
        ))}
      </div>
    </div>
  );
}
