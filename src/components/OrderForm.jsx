import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Send, Zap } from 'lucide-react';
import MagneticButton from './MagneticButton';

const panelTypes = [
  'Выберите тип',
  'Вводной щит (ВРУ)',
  'Распределительный щит (РЩ)',
  'Щит учёта (ЩУ)',
  'Силовой щит',
  'Щит слаботочных систем',
  'Другое',
];

function OrderForm() {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', panelType: '', comment: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Введите имя';
    if (!formData.phone.trim()) newErrors.phone = 'Введите телефон';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleChange = (field) => (e) => {
    setFormData((p) => ({ ...p, [field]: e.target.value }));
    if (errors[field]) setErrors((p) => ({ ...p, [field]: '' }));
  };

  if (submitted) {
    return (
      <section id="order" className="relative py-32 md:py-44 bg-[#030712]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px]" />
        <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={40} className="text-green-400" />
            </div>
            <h2 className="text-3xl font-black text-gradient mb-4">Заявка отправлена!</h2>
            <p className="text-white/40 text-lg mb-8">Свяжемся в течение 15 минут</p>
            <MagneticButton className="magnetic-btn magnetic-btn-primary">
              Отправить ещё
            </MagneticButton>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="order" className="relative py-32 md:py-44 bg-[#030712]">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-cyan-400 text-sm font-medium uppercase tracking-widest mb-4 block">
              Заявка
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6">
              Заказать <span className="text-gradient">расчёт</span>
            </h2>
            <p className="text-white/40 text-lg max-w-xl mx-auto">
              Оставьте заявку — бесплатная консультация за 15 минут
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="glass-strong rounded-[32px] p-8 sm:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-white/40 mb-2">Ваше имя *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={handleChange('name')}
                    placeholder="Иван Иванов"
                    className={`w-full px-5 py-4 rounded-xl bg-white/[0.03] border ${
                      errors.name ? 'border-red-500/50' : 'border-white/[0.06]'
                    } text-white placeholder-white/20 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all`}
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm text-white/40 mb-2">Телефон *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange('phone')}
                    placeholder="+7 (___) ___-__-__"
                    className={`w-full px-5 py-4 rounded-xl bg-white/[0.03] border ${
                      errors.phone ? 'border-red-500/50' : 'border-white/[0.06]'
                    } text-white placeholder-white/20 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all`}
                  />
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-white/40 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={handleChange('email')}
                    placeholder="email@example.com"
                    className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white placeholder-white/20 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/40 mb-2">Тип щита</label>
                  <select
                    value={formData.panelType}
                    onChange={handleChange('panelType')}
                    className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all appearance-none"
                  >
                    {panelTypes.map((t) => (
                      <option key={t} value={t} className="bg-[#0a0f1e]">{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm text-white/40 mb-2">Комментарий</label>
                <textarea
                  value={formData.comment}
                  onChange={handleChange('comment')}
                  rows={4}
                  placeholder="Опишите ваш проект..."
                  className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white placeholder-white/20 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
                />
              </div>

              <MagneticButton className="magnetic-btn magnetic-btn-primary w-full text-base py-5">
                {submitting ? (
                  <>
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}>
                      <Zap size={20} />
                    </motion.div>
                    Отправка...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Отправить заявку
                  </>
                )}
              </MagneticButton>

              <p className="text-xs text-white/20 text-center">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default OrderForm;
