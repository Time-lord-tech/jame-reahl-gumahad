import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';
import Marquee from '../components/sections/Marquee';
import Services from '../components/sections/Services';
import Projects from '../components/sections/Projects';
import Process from '../components/sections/Process';
import Testimonials from '../components/sections/Testimonials';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Hero />
      <Marquee />
      <Services />
      <Projects />
      <Process />
      <Testimonials />
    </motion.div>
  );
}
