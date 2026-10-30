import { Zap } from 'lucide-react';

function Footer() {
  const links = [
    { label: 'Услуги', href: '#services' },
    { label: 'Типы щитов', href: '#panel-types' },
    { label: 'Преимущества', href: '#advantages' },
    { label: 'Галерея', href: '#gallery' },
    { label: 'Контакты', href: '#contacts' },
  ];

  return (
    <footer className="relative bg-[#020408] border-t border-white/[0.04]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <Zap size={20} className="text-white" />
              </div>
              <div>
                <div className="font-bold text-lg leading-none">Электрощиты</div>
                <div className="text-[10px] text-white/30 uppercase tracking-widest">НСК</div>
              </div>
            </div>
            <p className="text-white/25 text-sm leading-relaxed">
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

        <div className="mt-12 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/15">
            © {new Date().getFullYear()} Электрощиты НСК. Все права защищены.
          </p>
          <a href="#" className="text-xs text-white/15 hover:text-cyan-400/50 transition-colors">
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
