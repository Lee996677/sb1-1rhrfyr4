import Section from '../components/ui/Section';
import PageHeader from '../components/ui/PageHeader';
import Card from '../components/ui/Card';
import Heading from '../components/ui/Heading';
import Text from '../components/ui/Text';

const sections = [
  {
    title: 'Information We Collect',
    content: `We collect information that you provide directly to us, including:
      • Name and contact information
      • Company details (optional)
      • Usage data and analytics
      • Information collected through cookies and similar technologies`,
  },
  {
    title: 'How We Use Your Information',
    content: `Your information helps us:
      • Respond to your inquiries and provide support
      • Improve our services and user experience
      • Send newsletters and updates (with your consent)
      • Analyze website traffic and usage patterns`,
  },
  {
    title: 'Data Security',
    content: `We implement appropriate security measures to protect your personal information:
      • Encryption of sensitive data
      • Secure servers and databases
      • Regular security audits and updates
      • Limited access to personal information`,
  },
  {
    title: 'Your Rights',
    content: `You have the right to:
      • Access your personal data
      • Request corrections or deletions
      • Opt-out of marketing communications
      • Request data portability`,
  },
  {
    title: 'Updates to This Policy',
    content: 'We may update this Privacy Policy periodically. Continued use of our services after changes indicates acceptance of the updated policy.',
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-neutral-light">
      <Section>
        <PageHeader
          title="Privacy Policy"
          description="How we collect, use, and protect your information"
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
                  For questions about this Privacy Policy, please contact{' '}
                  <a href="mailto:privacy@strivetechai.com" className="text-secondary hover:underline">
                    privacy@strivetechai.com
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