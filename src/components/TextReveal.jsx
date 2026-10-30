import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

function TextReveal({ text, className = '', as: Tag = 'h2' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const controls = useAnimation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (isInView) {
      setMounted(true);
      controls.start('visible');
    }
  }, [isInView, controls]);

  const words = text.split(' ');

  return (
    <Tag
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block mr-[0.3em]">
          {word.split('').map((letter, j) => (
            <motion.span
              key={`${i}-${j}`}
              className="inline-block"
              variants={{
                hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: 'blur(0px)',
                  transition: {
                    delay: i * 0.05 + j * 0.015,
                    duration: 0.4,
                    ease: [0.215, 0.61, 0.355, 1],
                  },
                },
              }}
            >
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
    </Tag>
  );
}

export default TextReveal;
