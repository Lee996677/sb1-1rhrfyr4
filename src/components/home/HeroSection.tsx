import { motion } from 'framer-motion';
import Button from '../ui/Button';
import Container from '../ui/Container';

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-light to-accent-purple min-h-[90vh] flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl -top-48 -left-48 animate-float" />
        <div className="absolute w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl -bottom-48 -right-48 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Accelerate Innovation with{' '}
              <span className="text-accent-yellow">Ethical, Practical AI</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto"
          >
            Transform your business with AI solutions that deliver real results while maintaining the highest ethical standards.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              href="/contact"
              size="lg"
              variant="primary"
              className="bg-accent-yellow hover:bg-accent-yellow/90 text-primary"
            >
              Get Started Today
            </Button>
            <Button
              href="/documaster"
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Discover DocuMaster AI
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 text-sm text-gray-300"
          >
            Shortlisted for The Spectator Economic Innovator of the Year Awards 2024
          </motion.div>
        </div>
      </Container>
    </div>
  );
}