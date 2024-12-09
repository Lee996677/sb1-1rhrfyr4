import { ReactNode } from 'react';
import Card from '../ui/Card';
import Heading from '../ui/Heading';
import Button from '../ui/Button';

interface ResourceCardProps {
  title: string;
  items: string[];
  icon: ReactNode;
}

export default function ResourceCard({ title, items, icon }: ResourceCardProps) {
  return (
    <Card>
      <div className="p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-lg mb-4">
          {icon}
        </div>
        <Heading level={3} className="mb-4">{title}</Heading>
        <ul className="space-y-4 mb-6">
          {items.map((item) => (
            <li key={item}>
              <Button href="#" variant="outline" className="text-left w-full">
                {item}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}