import { motion } from 'framer-motion';
import Contact from '../components/sections/Contact';

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      style={{ paddingTop: '100px', minHeight: '100vh' }}
    >
      <Contact />
    </motion.div>
  );
}
