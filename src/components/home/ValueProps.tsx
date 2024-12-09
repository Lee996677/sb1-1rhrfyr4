import { RocketLaunchIcon, ChartBarIcon, DocumentTextIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const features = [
  {
    name: 'Faster Time-to-Market',
    description: 'Launch your products faster with our streamlined development process.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Data-Driven Validation',
    description: 'Make informed decisions with comprehensive analytics and insights.',
    icon: ChartBarIcon,
  },
  {
    name: 'Automated Documentation',
    description: 'Keep your documentation always up-to-date with AI-powered automation.',
    icon: DocumentTextIcon,
  },
  {
    name: 'Ethical AI Innovation',
    description: 'Build trust with responsible AI development and transparent practices.',
    icon: ShieldCheckIcon,
  },
];

export default function ValueProps() {
  return (
    <div className="bg-neutral-light py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-secondary">Why Choose Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Everything you need to accelerate your innovation
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                className="flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-primary">
                  <feature.icon className="h-5 w-5 flex-none text-secondary" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}