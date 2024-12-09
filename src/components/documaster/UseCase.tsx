import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface UseCaseProps {
  title: string;
  description: string;
  icon: ReactNode;
  delay?: number;
}

export default function UseCase({ title, description, icon, delay = 0 }: UseCaseProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-md"
    >
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center w-10 h-10 bg-secondary bg-opacity-10 rounded-lg">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-primary mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}