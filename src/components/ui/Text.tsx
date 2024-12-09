import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { classNames } from '../../utils/classNames';
import { fadeInUp } from '../../utils/animation';

interface TextProps {
  children: ReactNode;
  size?: 'sm' | 'base' | 'lg' | 'xl';
  className?: string;
  animate?: boolean;
}

export default function Text({ 
  children, 
  size = 'base',
  className,
  animate = true 
}: TextProps) {
  const baseStyles = classNames(
    'text-gray-600',
    {
      'text-sm': size === 'sm',
      'text-base': size === 'base',
      'text-lg': size === 'lg',
      'text-xl': size === 'xl',
    },
    className
  );

  if (animate) {
    return (
      <motion.p
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        className={baseStyles}
      >
        {children}
      </motion.p>
    );
  }

  return <p className={baseStyles}>{children}</p>;
}