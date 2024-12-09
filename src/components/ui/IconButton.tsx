import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { classNames } from '../../utils/classNames';

interface IconButtonProps {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
}

export default function IconButton({
  icon,
  label,
  onClick,
  variant = 'primary',
  size = 'md',
  className,
  disabled = false,
}: IconButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        'inline-flex items-center justify-center rounded-full transition-colors',
        {
          'bg-secondary text-white hover:bg-opacity-90': variant === 'primary',
          'bg-white text-primary hover:bg-neutral-light': variant === 'secondary',
          'border-2 border-secondary text-secondary hover:bg-secondary hover:text-white':
            variant === 'outline',
        },
        {
          'p-1': size === 'sm',
          'p-2': size === 'md',
          'p-3': size === 'lg',
        },
        'disabled:opacity-50 disabled:cursor-not-allowed',
        className
      )}
      aria-label={label}
    >
      {icon}
    </motion.button>
  );
}