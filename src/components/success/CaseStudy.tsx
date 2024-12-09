import { ReactNode } from 'react';
import Card from '../ui/Card';
import Heading from '../ui/Heading';
import Text from '../ui/Text';
import Badge from '../ui/Badge';
import Divider from '../ui/Divider';

interface CaseStudyProps {
  title: string;
  icon: ReactNode;
  challenge: string;
  solution: string;
  results: string[];
  industry?: string;
  timeline?: string;
}

export default function CaseStudy({
  title,
  icon,
  challenge,
  solution,
  results,
  industry,
  timeline,
}: CaseStudyProps) {
  return (
    <Card className="h-full">
      <div className="p-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-lg">
              {icon}
            </div>
          </div>
          <div>
            <Heading level={3}>{title}</Heading>
            {(industry || timeline) && (
              <div className="flex gap-2 mt-2">
                {industry && <Badge variant="secondary">{industry}</Badge>}
                {timeline && <Badge variant="primary">{timeline}</Badge>}
              </div>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <Heading level={4}>Challenge</Heading>
            <Text>{challenge}</Text>
          </div>

          <Divider />

          <div>
            <Heading level={4}>Solution</Heading>
            <Text>{solution}</Text>
          </div>

          <Divider />

          <div>
            <Heading level={4}>Results</Heading>
            <ul className="mt-4 space-y-2">
              {results.map((result, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-secondary" />
                  <Text>{result}</Text>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Card>
  );
}