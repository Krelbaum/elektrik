import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, Send, Zap } from 'lucide-react';
import { TextField, MenuItem, Button as MuiButton, Typography } from '@mui/material';
import GlassCard from './ui/GlassCard';
import SectionTitle from './ui/SectionTitle';
import ScrollReveal from './ui/ScrollReveal';

const panelTypes = [
  'Выберите тип',
  'Вводной щит (ВРУ)',
  'Распределительный щит (РЩ)',
  'Щит учёта (ЩУ)',
  'Силовой щит',
  'Щит слаботочных систем',
  'Щит автоматики',
  'Другое',
];

function OrderForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    panelType: '',
    comment: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Введите ваше имя';
    if (!formData.phone.trim()) newErrors.phone = 'Введите номер телефона';
    else if (!/^[+\d\s()-]{7,20}$/.test(formData.phone)) newErrors.phone = 'Некорректный номер';
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Некорректный email';
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
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  if (submitted) {
    return (
      <section id="order" className="relative py-24 md:py-32 bg-background-primary bg-grid">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            <div className="w-20 h-20 rounded-full bg-accent-green/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={40} className="text-accent-green" />
            </div>
            <Typography variant="h3" className="text-gradient mb-4" sx={{ fontSize: '2rem' }}>
              Заявка отправлена!
            </Typography>
            <Typography variant="h6" className="text-text-secondary mb-8">
              Мы свяжемся с вами в течение 15 минут для уточнения деталей
            </Typography>
            <MuiButton
              variant="contained"
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: '', phone: '', email: '', panelType: '', comment: '' });
              }}
              className="!bg-gradient-electric !text-background-deep"
            >
              Отправить ещё
            </MuiButton>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="order" className="relative py-24 md:py-32 bg-background-primary bg-grid">
      <div className="absolute inset-0 bg-gradient-radial from-electric/5 via-transparent to-transparent" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Заказать расчёт электрощита"
          subtitle="Оставьте заявку и мы свяжемся с вами в течение 15 минут для бесплатной консультации"
        />

        <ScrollReveal delay={0.2}>
          <GlassCard className="mt-12 max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <TextField
                  fullWidth
                  label="Ваше имя *"
                  value={formData.name}
                  onChange={handleChange('name')}
                  error={!!errors.name}
                  helperText={errors.name}
                  placeholder="Иван Иванов"
                  InputLabelProps={{ className: '!text-text-secondary' }}
                />
                <TextField
                  fullWidth
                  label="Телефон *"
                  value={formData.phone}
                  onChange={handleChange('phone')}
                  error={!!errors.phone}
                  helperText={errors.phone}
                  placeholder="+7 (___) ___-__-__"
                  InputLabelProps={{ className: '!text-text-secondary' }}
                />
              </div>

              <TextField
                fullWidth
                label="Email (необязательно)"
                value={formData.email}
                onChange={handleChange('email')}
                error={!!errors.email}
                helperText={errors.email}
                placeholder="email@example.com"
                InputLabelProps={{ className: '!text-text-secondary' }}
              />

              <TextField
                fullWidth
                select
                label="Тип электрощита"
                value={formData.panelType}
                onChange={handleChange('panelType')}
                InputLabelProps={{ className: '!text-text-secondary' }}
              >
                {panelTypes.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                fullWidth
                multiline
                rows={4}
                label="Комментарий (необязательно)"
                value={formData.comment}
                onChange={handleChange('comment')}
                placeholder="Опишите ваш проект или задайте вопрос..."
                InputLabelProps={{ className: '!text-text-secondary' }}
              />

              <motion.button
                type="submit"
                disabled={submitting}
                whileHover={{ scale: submitting ? 1 : 1.02 }}
                whileTap={{ scale: submitting ? 1 : 0.98 }}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-electric text-background-deep font-bold rounded-xl shadow-electric-lg hover:shadow-electric transition-shadow disabled:opacity-50 text-lg"
              >
                {submitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    >
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
              </motion.button>

              <p className="text-xs text-text-muted text-center">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </form>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default OrderForm;
