import { motion } from 'framer-motion';

export const KaantechLogo = ({ className = "" }: { className?: string }) => {
  return (
    <motion.div
      className={`kaantech-logo ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <svg width="180" height="50" viewBox="0 0 180 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Symbolic Background - Triangle with Circle */}
        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <path d="M25 5 L40 35 L10 35 Z" stroke="#D4AF37" strokeWidth="1" fill="none" />
          <circle cx="25" cy="25" r="8" stroke="#00F0FF" strokeWidth="1" fill="none" />
          <circle cx="25" cy="25" r="3" fill="#D4AF37" />
        </motion.g>

        {/* KAANTECH Text */}
        <motion.text
          x="50"
          y="32"
          fontFamily="KodeMono, monospace"
          fontSize="24"
          fontWeight="600"
          fill="#FFFFFF"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          KAANTECH
        </motion.text>

        {/* SAS Subtitle */}
        <motion.text
          x="52"
          y="42"
          fontFamily="KodeMono, monospace"
          fontSize="8"
          fontWeight="400"
          fill="#00F0FF"
          letterSpacing="3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          S A S
        </motion.text>

        {/* Decorative Line */}
        <motion.line
          x1="50"
          y1="18"
          x2="160"
          y2="18"
          stroke="#D4AF37"
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        />
      </svg>
    </motion.div>
  );
};