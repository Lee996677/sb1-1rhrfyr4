import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { classNames } from '../../utils/classNames';
import { fadeInUp } from '../../utils/animation';

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  className?: string;
  animate?: boolean;
}

export default function Heading({ 
  level = 1, 
  children, 
  className,
  animate = true 
}: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  const baseStyles = classNames(
    'font-bold text-primary',
    {
      'text-4xl mb-4': level === 1,
      'text-3xl mb-3': level === 2,
      'text-2xl mb-2': level === 3,
      'text-xl mb-2': level === 4,
      'text-lg mb-1': level === 5,
      'text-base mb-1': level === 6,
    },
    className
  );

  if (animate) {
    return (
      <motion.div
        variants={fadeInUp}
        initial="initial"
        animate="animate"
      >
        <Tag className={baseStyles}>{children}</Tag>
      </motion.div>
    );
  }

  return <Tag className={baseStyles}>{children}</Tag>;
}