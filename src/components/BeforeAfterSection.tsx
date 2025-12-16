import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, TrendingUp, Clock, Briefcase } from 'lucide-react';
import { beforeAfterCases } from '../data/mockData';
import { Card } from './ui/card';
import { Button } from './ui/button';

export const BeforeAfterSection = () => {
  const [activeCase, setActiveCase] = useState(0);
  const currentCase = beforeAfterCases[activeCase];

  return (
    <section id="cases" className="relative py-32 bg-[#0A0A0A] overflow-hidden">
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
            <div className="px-6 py-2 bg-white/5 backdrop-blur-sm border border-[#00F0FF]/30 rounded-none">
              <span className="text-[#00F0FF] font-medium">Casos de Transformación</span>
            </div>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6" style={{ letterSpacing: '-0.02em' }}>
            De lo Ordinario a lo
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#00F0FF]"> Extraordinario</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Resultados reales que desafían la lógica convencional del marketing
          </p>
        </motion.div>

        {/* Case Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {beforeAfterCases.map((caseItem, index) => (
            <Button
              key={caseItem.id}
              onClick={() => setActiveCase(index)}
              className={`px-6 py-3 rounded-none transition-all duration-400 ${activeCase === index
                  ? 'bg-[#00F0FF] text-black border-[#00F0FF]'
                  : 'bg-white/5 text-white border-white/20 hover:border-[#00F0FF]/50'
                } border-2`}
            >
              {caseItem.clientName}
            </Button>
          ))}
        </div>

        {/* Before/After Comparison */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCase}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-none overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* BEFORE */}
                <div className="p-8 lg:p-12 bg-gradient-to-br from-red-950/20 to-black border-r border-white/10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="px-4 py-1.5 bg-red-500/20 border border-red-500/50 rounded-none">
                      <span className="text-red-400 font-bold text-sm">ANTES</span>
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-red-500/50 to-transparent" />
                  </div>

                  <div className="space-y-6">
                    {Object.entries(currentCase.before).map(([key, value]) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex justify-between items-center p-4 bg-white/5 backdrop-blur-sm rounded-none border border-red-500/20"
                      >
                        <span className="text-white/70 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                        <span className="text-2xl font-bold text-red-400">{value}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 p-4 bg-red-950/30 border border-red-500/30 rounded-none">
                    <p className="text-red-400/80 text-sm">
                      Estado crítico: Marca invisible, bajo engagement, ingresos estancados
                    </p>
                  </div>
                </div>

                {/* AFTER */}
                <div className="p-8 lg:p-12 bg-gradient-to-br from-emerald-950/20 to-black">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="px-4 py-1.5 bg-[#00F0FF]/20 border border-[#00F0FF]/50 rounded-none">
                      <span className="text-[#00F0FF] font-bold text-sm">DESPUÉS</span>
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-[#00F0FF]/50 to-transparent" />
                  </div>

                  <div className="space-y-6">
                    {Object.entries(currentCase.after).map(([key, value]) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex justify-between items-center p-4 bg-white/5 backdrop-blur-sm rounded-none border border-[#00F0FF]/30"
                      >
                        <span className="text-white/70 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                        <span className="text-2xl font-bold text-[#00F0FF]">{value}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 p-4 bg-emerald-950/30 border border-[#00F0FF]/30 rounded-none">
                    <p className="text-[#00F0FF]/80 text-sm">
                      Transformación completa: Marca reconocida, comunidad activa, crecimiento exponencial
                    </p>
                  </div>
                </div>
              </div>

              {/* Growth Indicator */}
              <div className="p-8 bg-gradient-to-r from-[#D4AF37]/10 to-[#00F0FF]/10 border-t border-white/10">
                <div className="flex flex-wrap items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 flex items-center justify-center bg-[#D4AF37]/20 border-2 border-[#D4AF37] rounded-none">
                      <TrendingUp className="w-8 h-8 text-[#D4AF37]" />
                    </div>
                    <div>
                      <div className="text-5xl font-bold text-[#D4AF37] mb-1">
                        {currentCase.growth}
                      </div>
                      <div className="text-white/60">Crecimiento Total</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 text-white/70">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-[#00F0FF]" />
                      <span>{currentCase.timeline}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-[#00F0FF]" />
                      <span>{currentCase.industry}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-none">
                    <ArrowRight className="w-5 h-5 text-[#00F0FF]" />
                    <span className="text-white font-medium">{currentCase.service}</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
