import { ReactNode } from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';
import Button from '../ui/Button';
import Card from '../ui/Card';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  features: string[];
  ctaText: string;
  ctaLink: string;
}

export default function ServiceCard({ 
  title, 
  description, 
  icon, 
  features, 
  ctaText, 
  ctaLink 
}: ServiceCardProps) {
  return (
    <Card>
      <div className="px-6 py-8">
        <div className="flex items-center justify-center w-12 h-12 bg-secondary bg-opacity-10 rounded-lg mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-600">
              <CheckIcon className="w-4 h-4 text-secondary mr-2" />
              {feature}
            </li>
          ))}
        </ul>
        <div className="mt-auto">
          <Button href={ctaLink} variant="primary" className="w-full">
            {ctaText}
          </Button>
        </div>
      </div>
    </Card>
  );
}