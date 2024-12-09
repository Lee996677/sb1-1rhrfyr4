import { RocketLaunchIcon, BeakerIcon, CpuChipIcon } from '@heroicons/react/24/outline';
import ServiceCard from '../components/services/ServiceCard';
import Button from '../components/ui/Button';
import Section from '../components/ui/Section';
import PageHeader from '../components/ui/PageHeader';
import Grid from '../components/ui/Grid';

const services = [
  {
    title: 'MVP Accelerator Program',
    description: 'Launch your minimum viable product in weeks, validate core features early, and gain actionable insights.',
    icon: <RocketLaunchIcon className="w-6 h-6 text-secondary" />,
    features: [
      'Rapid Prototyping',
      'User Testing & Feedback',
      'Integrated Documentation',
      'Weekly Progress Updates'
    ],
    ctaText: 'Request a Custom Quote',
    ctaLink: '/contact'
  },
  {
    title: 'POC Validation Workshops',
    description: 'Prove technical feasibility and market fit before full-scale development to minimize risk.',
    icon: <BeakerIcon className="w-6 h-6 text-secondary" />,
    features: [
      'Feasibility Assessments',
      'Compliance Checks',
      'Automated Technical Docs',
      'Risk Analysis Reports'
    ],
    ctaText: 'Learn More',
    ctaLink: '/contact'
  },
  {
    title: 'AI Integration & Support',
    description: 'Scale with advanced AI models, continuous optimization, and always-updated documentation.',
    icon: <CpuChipIcon className="w-6 h-6 text-secondary" />,
    features: [
      'Custom AI Models',
      'Performance Optimization',
      'Continuous Documentation',
      '24/7 Technical Support'
    ],
    ctaText: 'Contact for Details',
    ctaLink: '/contact'
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-neutral-light">
      <Section>
        <PageHeader 
          title="Our Services"
          description="From Idea to Reality: Rapid, Reliable, and Ethical AI-Driven Solutions"
        />
        
        <Grid cols={3} gap={8}>
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </Grid>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-8">
            Need a custom solution? We're here to help you achieve your goals.
          </p>
          <Button href="/contact" variant="outline" size="lg">
            Schedule a Consultation
          </Button>
        </div>
      </Section>
    </div>
  );
}