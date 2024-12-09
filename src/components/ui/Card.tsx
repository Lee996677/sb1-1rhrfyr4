import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { classNames } from '../../utils/classNames';

interface CardProps {
  children: ReactNode;
  className?: string;
  animate?: boolean;
}

export default function Card({ children, className, animate = true }: CardProps) {
  const Component = animate ? motion.div : 'div';
  
  return (
    <Component
      className={classNames(
        'bg-white rounded-lg shadow-lg overflow-hidden',
        className
      )}
      {...(animate && {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
      })}
    >
      {children}
    </Component>
  );
}