import { motion } from 'framer-motion';
import { staggerChildren } from '../utils/animation';
import HeroSection from '../components/home/HeroSection';
import ValueProps from '../components/home/ValueProps';

export default function HomePage() {
  return (
    <motion.div variants={staggerChildren} initial="initial" animate="animate">
      <HeroSection />
      <ValueProps />
    </motion.div>
  );
}