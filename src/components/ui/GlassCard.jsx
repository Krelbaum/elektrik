import { motion } from 'framer-motion';
import { Box } from '@mui/material';

function GlassCard({ children, hover = true, className = '', sx = {} }) {
  return (
    <motion.div
      {...(hover && {
        whileHover: { scale: 1.02, y: -4 },
        transition: { type: 'spring', stiffness: 300, damping: 20 },
      })}
    >
      <Box
        className={`rounded-2xl p-6 ${className}`}
        sx={{
          backdropFilter: 'blur(20px)',
          background: 'linear-gradient(145deg, rgba(20, 27, 45, 0.8), rgba(26, 35, 64, 0.6))',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          ...sx,
        }}
      >
        {children}
      </Box>
    </motion.div>
  );
}

export default GlassCard;
