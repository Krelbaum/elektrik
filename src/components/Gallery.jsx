import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Maximize2 } from 'lucide-react';
import GlassCard from './ui/GlassCard';
import SectionTitle from './ui/SectionTitle';
import ScrollReveal from './ui/ScrollReveal';

const galleryItems = [
  {
    title: 'ВРУ для жилого комплекса',
    description: 'Вводно-распределительный щит на 72 модуля',
    color: 'from-blue-900/40 to-cyan-900/40',
    placeholder: 'ВРУ-72',
  },
  {
    title: 'Щит для частного дома',
    description: 'Комплектный щит с учётом и защитой',
    color: 'from-purple-900/40 to-pink-900/40',
    placeholder: 'ЩЧ-36',
  },
  {
    title: 'РЩ для офиса',
    description: 'Распределительный щит на 24 линии',
    color: 'from-emerald-900/40 to-teal-900/40',
    placeholder: 'РЩ-24',
  },
  {
    title: 'Щит автоматики',
    description: 'Щит управления инженерными системами',
    color: 'from-orange-900/40 to-red-900/40',
    placeholder: 'ЩА-48',
  },
  {
    title: 'Силовой щит',
    description: 'Щит управления двигателями и насосами',
    color: 'from-indigo-900/40 to-blue-900/40',
    placeholder: 'ЩУ-60',
  },
  {
    title: 'Щит слаботочных систем',
    description: 'Интеграция интернета и видеонаблюдения',
    color: 'from-cyan-900/40 to-blue-900/40',
    placeholder: 'ЩС-32',
  },
];

function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="gallery" className="relative py-24 md:py-32 bg-background-deep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Наши работы"
          subtitle="Примеры реализованных проектов электрощитового оборудования"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {galleryItems.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <GlassCard
                hover={false}
                className="cursor-pointer group overflow-hidden p-0"
                sx={{ padding: 0 }}
              >
                <div
                  className={`relative aspect-video bg-gradient-to-br ${item.color} flex items-center justify-center overflow-hidden`}
                  onClick={() => setSelected(item)}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <span className="relative text-2xl font-bold text-white/60 group-hover:text-white/80 transition-colors">
                    {item.placeholder}
                  </span>

                  <div className="absolute inset-0 bg-electric/0 group-hover:bg-electric/5 transition-colors" />

                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-10 h-10 rounded-full glass flex items-center justify-center">
                      <Maximize2 size={18} className="text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-text-secondary">{item.description}</p>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelected(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-3xl w-full glass-strong rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`aspect-video bg-gradient-to-br ${selected.color} flex items-center justify-center`}
            >
              <span className="text-4xl font-bold text-white/60">{selected.placeholder}</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{selected.title}</h3>
              <p className="text-text-secondary">{selected.description}</p>
            </div>
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <X size={20} className="text-white" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

export default Gallery;
