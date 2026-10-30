import { Zap } from 'lucide-react';
import { Typography } from '@mui/material';

function Footer() {
  const links = [
    { label: 'Услуги', href: '#services' },
    { label: 'Типы щитов', href: '#panel-types' },
    { label: 'Преимущества', href: '#advantages' },
    { label: 'Галерея', href: '#gallery' },
    { label: 'Контакты', href: '#contacts' },
  ];

  return (
    <footer className="bg-background-primary border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">⚡</span>
              <Typography variant="h6" className="font-bold">
                Электрощиты <span className="text-gradient">НСК</span>
              </Typography>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed">
              Проектирование и изготовление электрощитового оборудования на заказ.
              Работаем с 2014 года. Доставка по всей России.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Навигация</h4>
            <nav className="flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-text-secondary hover:text-electric transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Контакты</h4>
            <div className="space-y-3 text-sm text-text-secondary">
              <a href="tel:+73831234567" className="block hover:text-electric transition-colors">
                +7 (383) 123-45-67
              </a>
              <a href="mailto:info@nsk-elektrik.ru" className="block hover:text-electric transition-colors">
                info@nsk-elektrik.ru
              </a>
              <p>г. Новосибирск, ул. Промышленная, 15</p>
              <p>Пн-Пт: 9:00-18:00, Сб: 10:00-15:00</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} Электрощиты НСК. Все права защищены.
          </p>
          <a href="#" className="text-xs text-text-muted hover:text-electric transition-colors">
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
