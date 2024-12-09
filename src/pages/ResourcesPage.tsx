import { DocumentTextIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import Section from '../components/ui/Section';
import PageHeader from '../components/ui/PageHeader';
import Grid from '../components/ui/Grid';
import ResourceCard from '../components/resources/ResourceCard';
import NewsletterSignup from '../components/resources/NewsletterSignup';

const resources = [
  {
    title: 'Blog Articles',
    items: [
      'Validate Your MVP in Under 6 Weeks—With Automated Docs',
      '5 Common UX Pitfalls and How Automated Docs Help Avoid Them',
      'Rethinking Compliance: How AI-Generated Docs Streamline Updates',
    ],
    icon: <DocumentTextIcon className="w-6 h-6 text-secondary" />,
  },
  {
    title: 'Whitepapers & Guides',
    items: [
      'AI Ethics in Practice: A Starter Guide',
      'Scaling with Documaster AI: A Technical Whitepaper',
      'The Future of Documentation: AI-Driven Approaches',
    ],
    icon: <AcademicCapIcon className="w-6 h-6 text-secondary" />,
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-neutral-light">
      <Section>
        <PageHeader 
          title="Resources"
          description="Insights and expertise to drive your innovation forward"
        />
        
        <Grid cols={2} gap={8}>
          {resources.map((resource) => (
            <ResourceCard key={resource.title} {...resource} />
          ))}
        </Grid>

        <div className="mt-16">
          <NewsletterSignup />
        </div>
      </Section>
    </div>
  );
}