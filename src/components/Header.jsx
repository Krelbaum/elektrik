import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Button, Drawer, Box, Typography } from '@mui/material';

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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-strong py-3 shadow-lg shadow-electric/5' : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            <Typography variant="h6" className="font-bold">
              Электрощиты <span className="text-gradient">НСК</span>
            </Typography>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-text-secondary hover:text-electric transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <Button
              variant="contained"
              href="#order"
              className="!bg-gradient-electric !text-background-deep hover:!opacity-90 shadow-electric"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Заказать расчёт
            </Button>
          </nav>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </motion.header>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          className: '!bg-background-primary !w-72 !border-l border-white/10',
        }}
      >
        <Box className="p-6">
          <div className="flex items-center justify-between mb-8">
            <span className="text-xl font-bold">Меню</span>
            <button onClick={() => setMobileOpen(false)}>
              <X size={24} className="text-text-secondary" />
            </button>
          </div>
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-text-secondary hover:text-electric transition-colors py-2 text-lg"
              >
                {link.label}
              </a>
            ))}
            <Button
              variant="contained"
              href="#order"
              className="!bg-gradient-electric !text-background-deep mt-4"
              onClick={(e) => {
                e.preventDefault();
                setMobileOpen(false);
                document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Заказать расчёт
            </Button>
          </nav>
          <div className="mt-8 pt-6 border-t border-white/10">
            <a href="tel:+73831234567" className="flex items-center gap-2 text-electric">
              <Phone size={18} />
              <span>+7 (383) 123-45-67</span>
            </a>
          </div>
        </Box>
      </Drawer>
    </>
  );
}

export default Header;
