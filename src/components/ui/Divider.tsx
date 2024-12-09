import { classNames } from '../../utils/classNames';

interface DividerProps {
  className?: string;
  orientation?: 'horizontal' | 'vertical';
}

export default function Divider({ 
  className,
  orientation = 'horizontal' 
}: DividerProps) {
  return (
    <div
      className={classNames(
        'bg-gray-200',
        {
          'h-px w-full': orientation === 'horizontal',
          'h-full w-px': orientation === 'vertical',
        },
        className
      )}
      role="separator"
    />
  );
}