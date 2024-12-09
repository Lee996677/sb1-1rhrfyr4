import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '../../utils/styles';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  animate?: boolean;
}

const variantStyles = {
  primary: 'bg-accent-purple text-white hover:bg-accent-purple/90 shadow-lg shadow-accent-purple/25 hover:shadow-xl hover:shadow-accent-purple/30',
  secondary: 'bg-white text-primary hover:bg-neutral-light shadow-lg hover:shadow-xl',
  outline: 'border-2 border-current hover:scale-105 transition-transform',
};

const sizeStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className,
  type = 'button',
  animate = true,
}: ButtonProps) {
  const baseStyles = cn(
    'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200',
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  const motionProps = animate ? {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
  } : {};

  if (href) {
    return (
      <motion.div {...motionProps}>
        <Link to={href} className={baseStyles}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={baseStyles}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}