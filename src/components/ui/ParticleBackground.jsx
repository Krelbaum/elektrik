import { motion } from 'framer-motion';

const shapes = [
  { size: 300, color: 'rgba(0, 212, 255, 0.05)', top: '10%', left: '5%', duration: 8 },
  { size: 200, color: 'rgba(0, 240, 255, 0.04)', top: '60%', left: '70%', duration: 10 },
  { size: 150, color: 'rgba(0, 102, 255, 0.06)', top: '30%', left: '80%', duration: 12 },
  { size: 100, color: 'rgba(0, 255, 136, 0.04)', top: '80%', left: '20%', duration: 9 },
  { size: 250, color: 'rgba(0, 212, 255, 0.03)', top: '50%', left: '30%', duration: 11 },
];

function ParticleBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: shape.size,
            height: shape.size,
            background: shape.color,
            top: shape.top,
            left: shape.left,
            filter: 'blur(40px)',
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

export default ParticleBackground;
