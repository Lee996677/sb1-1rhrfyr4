import Section from '../components/ui/Section';
import PageHeader from '../components/ui/PageHeader';
import Card from '../components/ui/Card';
import Heading from '../components/ui/Heading';
import Text from '../components/ui/Text';

const sections = [
  {
    title: 'Our Commitment',
    content: 'StriveTechAI is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.',
  },
  {
    title: 'Standards We Follow',
    content: `We aim to meet WCAG 2.1 AA standards by:
      • Providing text alternatives for non-text content
      • Ensuring sufficient color contrast
      • Making all functionality available from a keyboard
      • Providing ways to help users navigate, find content, and determine where they are`,
  },
  {
    title: 'Assistive Technologies',
    content: `Our website supports various assistive technologies:
      • Screen readers
      • Voice recognition software
      • Screen magnification software
      • Alternative input devices`,
  },
  {
    title: 'Known Issues',
    content: 'We are actively working to maintain and improve the accessibility of our website. If you encounter any accessibility barriers, please let us know.',
  },
  {
    title: 'Continuous Improvement',
    content: `We regularly:
      • Test with assistive technologies
      • Train our staff on accessibility
      • Engage with the community
      • Update our website to improve accessibility`,
  },
];

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-neutral-light">
      <Section>
        <PageHeader
          title="Accessibility Statement"
          description="Our commitment to digital accessibility for all users"
        />
        
        <div className="max-w-3xl mx-auto">
          <Card>
            <div className="p-8 space-y-8">
              <Text className="text-lg">
                Last updated: {new Date().toLocaleDateString()}
              </Text>
              
              {sections.map((section) => (
                <div key={section.title} className="space-y-4">
                  <Heading level={2}>{section.title}</Heading>
                  <Text className="whitespace-pre-line">{section.content}</Text>
                </div>
              ))}
              
              <div className="mt-8">
                <Text>
                  For accessibility issues or feedback, please contact{' '}
                  <a href="mailto:accessibility@strivetechai.com" className="text-secondary hover:underline">
                    accessibility@strivetechai.com
                  </a>
                </Text>
              </div>
            </div>
          </Card>
        </div>
      </Section>
    </div>
  );
}