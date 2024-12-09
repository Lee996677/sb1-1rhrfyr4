import { useState } from 'react';
import Card from '../ui/Card';
import Heading from '../ui/Heading';
import Text from '../ui/Text';
import Button from '../ui/Button';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
  };

  return (
    <Card>
      <div className="p-8 text-center">
        <Heading level={2}>Subscribe for Monthly Insights</Heading>
        <Text className="mb-6">
          Get the latest updates on AI innovation, documentation best practices, and industry insights.
        </Text>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
              required
            />
            <Button type="submit">Subscribe</Button>
          </div>
        </form>
      </div>
    </Card>
  );
}