import { ReactNode } from 'react';
import { classNames } from '../../utils/classNames';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={classNames('mx-auto max-w-7xl px-6 lg:px-8', className)}>
      {children}
    </div>
  );
}