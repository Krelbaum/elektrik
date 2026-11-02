import { motion } from 'framer-motion';
import { LogoFull } from './Logo';
import { ElectricIcon, ShieldIcon, PanelIcon, CircuitIcon, BoltIcon, CableIcon } from './ElectricIcons';

function Footer() {
  const links = [
    { label: 'Услуги', href: '#services' },
    { label: 'Типы щитов', href: '#panel-types' },
    { label: 'Преимущества', href: '#advantages' },
    { label: 'Галерея', href: '#gallery' },
    { label: 'Контакты', href: '#contacts' },
  ];

  const icons = [ElectricIcon, ShieldIcon, PanelIcon, CircuitIcon, BoltIcon, CableIcon];

  return (
    <footer className="relative bg-[#020408] border-t border-white/[0.04] overflow-hidden">
      {/* Neon line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
      
      {/* Background neon accents */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/3 rounded-full blur-[100px]" />
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-purple-500/3 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <LogoFull size="lg" />
            <p className="text-white/25 text-sm leading-relaxed mt-4">
              Проектирование и изготовление электрощитового оборудования на заказ.
              Работаем с 2014 года. Доставка по всей России.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Навигация</h4>
            <nav className="flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/25 hover:text-cyan-400 transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Контакты</h4>
            <div className="space-y-3 text-sm text-white/25">
              <a href="tel:+73831234567" className="block hover:text-cyan-400 transition-colors">
                +7 (383) 123-45-67
              </a>
              <a href="mailto:info@nsk-elektrik.ru" className="block hover:text-cyan-400 transition-colors">
                info@nsk-elektrik.ru
              </a>
              <p>г. Новосибирск, ул. Промышленная, 15</p>
            </div>
          </div>
        </div>

        {/* Decorative icons row */}
        <div className="mt-12 pt-8 border-t border-white/[0.04] flex items-center justify-between">
          <div className="flex items-center gap-4">
            {icons.map((Icon, i) => (
              <motion.div
                key={i}
                className="w-8 h-8 rounded-lg glass flex items-center justify-center"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Icon size={16} className="text-cyan-400/60" />
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-white/15">
            © {new Date().getFullYear()} Электрощиты НСК. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
