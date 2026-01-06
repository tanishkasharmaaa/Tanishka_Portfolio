import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({ children, className = '', hover = true }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -8, scale: 1.02 } : {}}
      className={`bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 shadow-xl ${className}`}
    >
      {children}
    </motion.div>
  );
}
