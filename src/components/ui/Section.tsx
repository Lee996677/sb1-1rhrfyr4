import { ReactNode } from 'react';
import { classNames } from '../../utils/classNames';
import Container from './Container';

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

export default function Section({ children, className, containerClassName }: SectionProps) {
  return (
    <section className={classNames('py-24', className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}