import { motion } from 'framer-motion';
import { Typography } from '@mui/material';

function SectionTitle({ title, subtitle, align = 'center' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className={`text-${align}`}
    >
      <Typography
        variant="h2"
        className="text-gradient mb-4"
        sx={{
          fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
          fontWeight: 800,
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="h6"
          className="text-text-secondary max-w-2xl mx-auto"
          sx={{ fontSize: { xs: '0.95rem', md: '1.1rem' } }}
        >
          {subtitle}
        </Typography>
      )}
      <motion.div
        className="h-1 w-24 bg-gradient-electric rounded-full mx-auto mt-6"
        initial={{ width: 0 }}
        whileInView={{ width: 96 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </motion.div>
  );
}

export default SectionTitle;
