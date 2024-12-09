type ClassValue = string | boolean | undefined | { [key: string]: boolean };

export function classNames(...classes: ClassValue[]): string {
  return classes
    .filter(Boolean)
    .map(cls => {
      if (typeof cls === 'object') {
        return Object.entries(cls)
          .filter(([_, value]) => Boolean(value))
          .map(([className]) => className)
          .join(' ');
      }
      return cls;
    })
    .join(' ');
}