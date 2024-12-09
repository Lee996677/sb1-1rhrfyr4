import { ReactNode } from 'react';
import Card from '../ui/Card';
import Heading from '../ui/Heading';
import Text from '../ui/Text';
import Badge from '../ui/Badge';

interface SuccessStoryProps {
  title: string;
  challenge: string;
  solution: string;
  results: string;
  icon: ReactNode;
}

export default function SuccessStory({
  title,
  challenge,
  solution,
  results,
  icon,
}: SuccessStoryProps) {
  return (
    <Card>
      <div className="p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-lg mb-4">
          {icon}
        </div>
        <Heading level={3} className="mb-4">{title}</Heading>
        
        <div className="space-y-4">
          <div>
            <Badge variant="primary" className="mb-2">Challenge</Badge>
            <Text>{challenge}</Text>
          </div>
          
          <div>
            <Badge variant="secondary" className="mb-2">Solution</Badge>
            <Text>{solution}</Text>
          </div>
          
          <div>
            <Badge variant="success" className="mb-2">Results</Badge>
            <Text>{results}</Text>
          </div>
        </div>
      </div>
    </Card>
  );
}