import { motion } from 'framer-motion';
import {
  DocumentArrowUpIcon,
  ArrowPathIcon,
  ShareIcon,
  ClockIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  BriefcaseIcon,
} from '@heroicons/react/24/outline';
import Button from '../components/ui/Button';
import Section from '../components/ui/Section';
import PageHeader from '../components/ui/PageHeader';
import Grid from '../components/ui/Grid';
import FeatureCard from '../components/documaster/FeatureCard';
import UseCase from '../components/documaster/UseCase';

const features = [
  {
    title: 'Instant Updates',
    description: 'No more stale docs. Every iteration triggers auto-refreshes.',
    icon: <ArrowPathIcon className="w-6 h-6 text-secondary" />,
  },
  {
    title: 'Comprehensive Coverage',
    description: "From tech specs to training guides, we have got you covered.",
    icon: <DocumentArrowUpIcon className="w-6 h-6 text-secondary" />,
  },
  {
    title: 'Easy Access & Sharing',
    description: 'Distribute updated docs to your team and stakeholders in seconds.',
    icon: <ShareIcon className="w-6 h-6 text-secondary" />,
  },
  {
    title: 'Reduced Overhead',
    description: 'Focus on innovation, not busywork.',
    icon: <ClockIcon className="w-6 h-6 text-secondary" />,
  },
];

const useCases = [
  {
    title: 'Startups',
    description: 'Generate investor-ready specs from day one. Keep documentation current as you iterate rapidly.',
    icon: <BuildingOfficeIcon className="w-6 h-6 text-secondary" />,
  },
  {
    title: 'Enterprises',
    description: 'Maintain compliance, technical, and onboarding docs synced at scale across your organization.',
    icon: <UserGroupIcon className="w-6 h-6 text-secondary" />,
  },
  {
    title: 'Consultants',
    description: 'Deliver professional, current documentation sets to clients effortlessly and consistently.',
    icon: <BriefcaseIcon className="w-6 h-6 text-secondary" />,
  },
];

export default function DocumasterPage() {
  return (
    <div className="min-h-screen bg-neutral-light">
      {/* Hero Section */}
      <div className="bg-primary text-white">
        <Section>
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold mb-6"
            >
              Documaster AI: Your Automated Documentation Companion
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 mb-8"
            >
              Keep specs, compliance records, and user guides always current—no manual effort required.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button href="/contact" variant="secondary" size="lg">
                Schedule a Demo
              </Button>
            </motion.div>
          </div>
        </Section>
      </div>

      {/* Features Section */}
      <Section>
        <PageHeader
          title="Key Features"
          description="Everything you need to streamline your documentation process"
        />
        <Grid cols={4}>
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              delay={index * 0.1}
            />
          ))}
        </Grid>
      </Section>

      {/* Use Cases Section */}
      <Section className="bg-white">
        <PageHeader
          title="Who Uses Documaster AI?"
          description="Trusted by organizations of all sizes"
        />
        <Grid cols={3}>
          {useCases.map((useCase, index) => (
            <UseCase
              key={useCase.title}
              {...useCase}
              delay={index * 0.1}
            />
          ))}
        </Grid>
        <div className="text-center mt-16">
          <Button href="/contact" variant="primary" size="lg">
            Get Started with Documaster AI
          </Button>
        </div>
      </Section>
    </div>
  );
}