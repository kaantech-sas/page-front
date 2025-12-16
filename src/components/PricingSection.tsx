
import { motion } from 'framer-motion';
import { Check, Sparkles, Crown, Zap } from 'lucide-react';
import { pricingPlans } from '../data/mockData';
import { Card } from './ui/card';
import { Button } from './ui/button';

const tierIcons = {
  'BÁSICO': Zap,
  'PROFESIONAL': Sparkles,
  'ELITE': Crown
};

export const PricingSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="relative py-32 bg-[#0A0A0A] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 1px, transparent 1px, transparent 7.6923%),
              repeating-linear-gradient(-90deg, #fff, #fff 1px, transparent 1px, transparent 7.6923%)
            `,
            backgroundSize: '100% 100%'
          }}
        />
      </div>

      {/* Mystical Background Pattern */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-5"
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
      >
        <img
          src="https://images.unsplash.com/photo-1619879310659-01e83a8e9d6b"
          alt="Mystical Pattern"
          className="w-full h-full object-contain"
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-6">
            <div className="px-6 py-2 bg-white/5 backdrop-blur-sm border border-[#D4AF37]/30 rounded-none">
              <span className="text-[#D4AF37] font-medium">Planes de Inversión</span>
            </div>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6" style={{ letterSpacing: '-0.02em' }}>
            Elige Tu Nivel de
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#00F0FF]"> Ascensión</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Tres caminos hacia la manifestación de tu imperio digital
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => {
            const TierIcon = tierIcons[plan.tier as keyof typeof tierIcons];
            const isRecommended = plan.recommended;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -15, scale: 1.02 }}
                className="relative"
              >
                {/* Recommended Badge */}
                {isRecommended && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
                  >
                    <div className="px-6 py-2 bg-[#00F0FF] text-black font-bold text-sm rounded-none flex items-center gap-2 shadow-lg shadow-[#00F0FF]/50">
                      <Sparkles className="w-4 h-4" />
                      RECOMENDADO
                    </div>
                  </motion.div>
                )}

                <Card
                  className={`h-full bg-black/60 backdrop-blur-xl rounded-none p-8 transition-all duration-400 relative overflow-hidden group ${isRecommended
                    ? 'border-2 border-[#00F0FF]'
                    : 'border border-white/10 hover:border-white/30'
                    }`}
                >
                  {/* Glow Effect */}
                  <div
                    className={"absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-400 blur-2xl"}
                    style={{ backgroundColor: plan.color }}
                  />

                  {/* Content */}
                  <div className="relative z-10 space-y-6">
                    {/* Icon & Tier */}
                    <div className="flex items-center justify-between">
                      <div
                        className="w-16 h-16 flex items-center justify-center border-2 rounded-none"
                        style={{ borderColor: plan.color }}
                      >
                        <TierIcon className="w-8 h-8" style={{ color: plan.color }} />
                      </div>
                      <div
                        className="px-3 py-1 border rounded-none"
                        style={{ borderColor: plan.color, color: plan.color }}
                      >
                        <span className="text-xs font-bold">{plan.tier}</span>
                      </div>
                    </div>

                    {/* Plan Name */}
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-white/60 text-sm">{plan.description}</p>
                    </div>

                    {/* Price */}
                    <div className="py-6 border-y border-white/10">
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-bold text-white">
                          ${(plan.price / 1000).toFixed(0)}K
                        </span>
                        <span className="text-white/60">COP/mes</span>
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-4">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check
                            className="w-5 h-5 flex-shrink-0 mt-0.5"
                            style={{ color: plan.color }}
                          />
                          <span className="text-white/80 text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Button
                      onClick={scrollToContact}
                      className={`w-full py-6 text-lg font-bold rounded-none transition-all duration-400 mt-8 ${isRecommended
                        ? 'bg-[#00F0FF] text-black hover:bg-white'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                        }`}
                    >
                      Iniciar Transformación
                    </Button>
                  </div>

                  {/* Decorative Corner */}
                  <div
                    className="absolute -bottom-12 -right-12 w-48 h-48 opacity-10 blur-2xl"
                    style={{ backgroundColor: plan.color }}
                  />
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-white/60 text-lg mb-4">
            Todos los planes incluyen garantía de satisfacción 100% durante 30 días
          </p>
          <p className="text-white/50 text-sm">
            🌙 Opción de pago anual disponible con 2 meses gratis | Sin contratos de permanencia
          </p>
        </motion.div>
      </div>
    </section>
  );
};
