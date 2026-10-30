import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2 } from 'lucide-react';

const galleryItems = [
  { title: 'ВРУ для ЖК', desc: '72 модуля', color: 'from-cyan-900/50 to-blue-900/50' },
  { title: 'Щит для коттеджа', desc: '36 модулей', color: 'from-purple-900/50 to-pink-900/50' },
  { title: 'РЩ для офиса', desc: '24 линии', color: 'from-emerald-900/50 to-teal-900/50' },
  { title: 'Щит автоматики', desc: 'Управление ИС', color: 'from-amber-900/50 to-orange-900/50' },
  { title: 'Силовой щит', desc: 'Управление двигателями', color: 'from-indigo-900/50 to-blue-900/50' },
  { title: 'Щит слаботочных', desc: 'Интернет + видеонаблюдение', color: 'from-cyan-900/50 to-violet-900/50' },
];

function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="gallery" className="relative py-32 md:py-44 bg-[#030712] bg-dots-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-cyan-400 text-sm font-medium uppercase tracking-widest mb-4 block">
              Портфолио
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6">
              Наши <span className="text-gradient">работы</span>
            </h2>
            <p className="text-white/40 text-lg max-w-2xl mx-auto">
              Примеры реализованных проектов электрощитового оборудования
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
              onClick={() => setSelected(item)}
            >
              <div className={`aspect-[4/3] rounded-[24px] bg-gradient-to-br ${item.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white/30 group-hover:text-white/50 transition-colors">
                    {item.title}
                  </span>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 rounded-full glass flex items-center justify-center">
                    <Maximize2 size={18} className="text-white" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="glass-strong rounded-xl p-4">
                    <h3 className="font-bold text-white">{item.title}</h3>
                    <p className="text-sm text-white/50">{item.desc}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm"
              onClick={() => setSelected(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className={`fixed inset-0 z-[61] flex items-center justify-center p-4`}
              onClick={() => setSelected(null)}
            >
              <div
                className={`max-w-3xl w-full rounded-[32px] bg-gradient-to-br ${selected.color} glass-strong p-12 relative`}
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-3xl font-bold text-white mb-2">{selected.title}</h3>
                <p className="text-white/50">{selected.desc}</p>
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <X size={20} className="text-white" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Gallery;
