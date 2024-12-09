import Heading from './Heading';
import Text from './Text';

interface PageHeaderProps {
  title: string;
  description?: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="text-center mb-16">
      <Heading level={1}>{title}</Heading>
      {description && (
        <Text size="xl" className="max-w-2xl mx-auto">
          {description}
        </Text>
      )}
    </div>
  );
}