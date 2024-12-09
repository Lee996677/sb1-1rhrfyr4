import { motion } from 'framer-motion';
import { UserCircleIcon, BeakerIcon, ScaleIcon } from '@heroicons/react/24/outline';
import Section from '../components/ui/Section';
import PageHeader from '../components/ui/PageHeader';
import Grid from '../components/ui/Grid';
import Card from '../components/ui/Card';
import Text from '../components/ui/Text';
import Heading from '../components/ui/Heading';

const team = [
  {
    name: 'Lee Brown',
    role: 'Founder & Chief Technology Innovation Officer',
    bio: '15+ years in digital transformation and AI expertise. Passionate about ethical AI development and innovation.',
    icon: <UserCircleIcon className="w-6 h-6 text-secondary" />,
  },
  {
    name: 'Tesh Casimir',
    role: 'Chief Strategy Officer',
    bio: 'Over two decades in international business and strategy, forging global partnerships and driving brand evolution.',
    icon: <BeakerIcon className="w-6 h-6 text-secondary" />,
  },
  {
    name: 'Marília Aires',
    role: 'Ethical AI Advisor & Group Legal Counsel',
    bio: 'Specializes in data protection and compliance, ensuring all AI solutions meet the highest ethical standards.',
    icon: <ScaleIcon className="w-6 h-6 text-secondary" />,
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-neutral-light">
      <Section>
        <PageHeader 
          title="About Us"
          description="Harnessing AI to create a future where technology is a positive force"
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-lg mx-auto mb-16"
        >
          <Text size="xl" className="text-center">
            At StriveTechAI, we believe in harnessing AI to create a future where technology 
            accelerates growth, ensures ethical standards, and drives sustainable value.
          </Text>
        </motion.div>

        <Heading level={2} className="text-center mb-12">Our Leadership Team</Heading>
        
        <Grid cols={3} gap={8}>
          {team.map((member) => (
            <Card key={member.name}>
              <div className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-lg mb-4 mx-auto">
                  {member.icon}
                </div>
                <Heading level={3} className="text-center">{member.name}</Heading>
                <Text size="sm" className="text-center text-secondary mb-4">{member.role}</Text>
                <Text className="text-center">{member.bio}</Text>
              </div>
            </Card>
          ))}
        </Grid>
      </Section>
    </div>
  );
}