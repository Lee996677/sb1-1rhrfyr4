import { EnvelopeIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/outline';
import Card from '../ui/Card';
import Heading from '../ui/Heading';
import Text from '../ui/Text';

const contactDetails = [
  {
    icon: <EnvelopeIcon className="w-6 h-6" />,
    title: 'Email',
    content: 'hello@strivetechai.com',
  },
  {
    icon: <PhoneIcon className="w-6 h-6" />,
    title: 'Phone',
    content: '+1 (555) 123-4567',
  },
  {
    icon: <ClockIcon className="w-6 h-6" />,
    title: 'Office Hours',
    content: 'Monday–Friday, 9AM–5PM EST',
  },
];

export default function ContactInfo() {
  return (
    <Card>
      <div className="p-6">
        <Heading level={2} className="mb-6">Get in Touch</Heading>
        
        <div className="space-y-6">
          {contactDetails.map((detail) => (
            <div key={detail.title} className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary">
                {detail.icon}
              </div>
              <div>
                <Heading level={3}>{detail.title}</Heading>
                <Text>{detail.content}</Text>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Text>
            Whether you're ready to start a project or just want to learn more, our team is here to help.
            We'll get back to you promptly with the information you need.
          </Text>
        </div>
      </div>
    </Card>
  );
}