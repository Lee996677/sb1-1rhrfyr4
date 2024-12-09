import { ReactNode } from 'react';
import { classNames } from '../../utils/classNames';

interface GridProps {
  children: ReactNode;
  cols?: 1 | 2 | 3 | 4;
  gap?: 4 | 8 | 12 | 16;
  className?: string;
}

export default function Grid({ children, cols = 3, gap = 8, className }: GridProps) {
  return (
    <div
      className={classNames(
        'grid',
        {
          'grid-cols-1 md:grid-cols-2 lg:grid-cols-3': cols === 3,
          'grid-cols-1 md:grid-cols-2 lg:grid-cols-4': cols === 4,
          'grid-cols-1 md:grid-cols-2': cols === 2,
          'grid-cols-1': cols === 1,
        },
        `gap-${gap}`,
        className
      )}
    >
      {children}
    </div>
  );
}