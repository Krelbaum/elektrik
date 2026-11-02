import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { LogoFull } from './Logo';
import MagneticButton from './MagneticButton';

const navLinks = [
  { label: 'Услуги', href: '#services' },
  { label: 'Типы щитов', href: '#panel-types' },
  { label: 'Преимущества', href: '#advantages' },
  { label: 'Галерея', href: '#gallery' },
  { label: 'Контакты', href: '#contacts' },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(totalHeight > 0 ? window.scrollY / totalHeight : 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500"
        style={{ width: `${scrollProgress * 100}%` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 glass-strong'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#" className="group">
            <LogoFull size="md" />
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.05 }}
                className="relative px-4 py-2 text-sm text-white/60 hover:text-white transition-colors group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:w-3/4 transition-all duration-300" />
              </motion.a>
            ))}
          </nav>

          <div className="hidden md:block">
            <MagneticButton className="magnetic-btn magnetic-btn-primary text-sm px-6 py-3">
              Заказать расчёт
            </MagneticButton>
          </div>

          <button
            className="md:hidden text-white p-2 interactive"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-[#030712]/90 backdrop-blur-xl"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-72 glass-strong p-8"
            >
              <div className="flex items-center justify-between mb-12">
                <span className="font-bold text-lg">Меню</span>
                <button onClick={() => setMobileOpen(false)} className="interactive">
                  <X size={24} className="text-white/60" />
                </button>
              </div>
              <nav className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    onClick={() => setMobileOpen(false)}
                    className="text-white/80 hover:text-cyan-400 transition-colors text-xl interactive"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <MagneticButton className="magnetic-btn magnetic-btn-primary w-full mt-4 text-sm">
                  Заказать расчёт
                </MagneticButton>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
