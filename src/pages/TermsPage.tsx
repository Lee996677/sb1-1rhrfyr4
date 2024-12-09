import Section from '../components/ui/Section';
import PageHeader from '../components/ui/PageHeader';
import Card from '../components/ui/Card';
import Heading from '../components/ui/Heading';
import Text from '../components/ui/Text';

const sections = [
  {
    title: 'Acceptance of Terms',
    content: 'By accessing or using StriveTechAI services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.',
  },
  {
    title: 'Use License',
    content: `Our services are licensed, not sold:
      • For personal or business use only
      • May not be copied or modified
      • May not be used for commercial purposes without authorization
      • Subject to all applicable laws and regulations`,
  },
  {
    title: 'Intellectual Property',
    content: 'All content, features, and functionality are owned by StriveTechAI and are protected by international copyright, trademark, and other intellectual property laws.',
  },
  {
    title: 'User Responsibilities',
    content: `You agree to:
      • Provide accurate information
      • Maintain the security of your account
      • Not use the services for unlawful purposes
      • Not interfere with the proper working of the services`,
  },
  {
    title: 'Limitation of Liability',
    content: 'StriveTechAI shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.',
  },
  {
    title: 'Changes to Terms',
    content: 'We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms.',
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-neutral-light">
      <Section>
        <PageHeader
          title="Terms of Service"
          description="Please read these terms carefully before using our services"
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
                  For questions about these Terms, please contact{' '}
                  <a href="mailto:legal@strivetechai.com" className="text-secondary hover:underline">
                    legal@strivetechai.com
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