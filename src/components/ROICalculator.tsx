import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, Sparkles } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

export const ROICalculator = () => {
  const [investment, setInvestment] = useState(220000);
  const [currentRevenue, setCurrentRevenue] = useState(5000000);
  const [showResults, setShowResults] = useState(false);

  const calculateROI = () => {
    // Conservative growth multipliers based on KAANTECH's methodology
    const growthMultiplier = 3.2; // 320% average growth
    const projectedRevenue = currentRevenue * growthMultiplier;
    const revenueIncrease = projectedRevenue - currentRevenue;
    const roi = ((revenueIncrease - investment) / investment) * 100;
    const monthlyGrowth = revenueIncrease / 12;

    return {
      projectedRevenue,
      revenueIncrease,
      roi: Math.round(roi),
      monthlyGrowth,
      breakEvenMonths: Math.ceil(investment / monthlyGrowth)
    };
  };

  const handleCalculate = () => {
    setShowResults(true);
  };

  const results = calculateROI();

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1736678595826-2d3e0b94638c)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'screen'
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="bg-black/70 backdrop-blur-xl border-2 border-[#D4AF37]/40 rounded-none p-8 lg:p-12 shadow-lg">
            {/* Header */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, type: 'spring' }}
                className="inline-flex items-center justify-center w-20 h-20 bg-[#D4AF37]/20 border-2 border-[#D4AF37] rounded-none mb-6"
              >
                <Calculator className="w-10 h-10 text-[#D4AF37]" />
              </motion.div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Calculadora Mística de ROI
              </h2>
              <p className="text-xl text-white/85">
                Descubre tu potencial oculto de crecimiento
              </p>
            </div>

            {/* Calculator Form */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Input Fields */}
              <div className="space-y-6">
                <div>
                  <Label htmlFor="investment" className="text-white mb-2 block text-lg font-semibold">
                    Inversión Mensual (COP)
                  </Label>
                  <Input
                    id="investment"
                    type="number"
                    value={investment}
                    onChange={(e) => setInvestment(Number(e.target.value))}
                    className="bg-white/10 border-white/30 text-white text-xl py-6 rounded-none focus:border-[#00F0FF] focus:ring-2 focus:ring-[#00F0FF]/50"
                  />
                </div>
                <div>
                  <Label htmlFor="revenue" className="text-white mb-2 block text-lg font-semibold">
                    Ingresos Mensuales Actuales (COP)
                  </Label>
                  <Input
                    id="revenue"
                    type="number"
                    value={currentRevenue}
                    onChange={(e) => setCurrentRevenue(Number(e.target.value))}
                    className="bg-white/10 border-white/30 text-white text-xl py-6 rounded-none focus:border-[#00F0FF] focus:ring-2 focus:ring-[#00F0FF]/50"
                  />
                </div>
                <Button
                  onClick={handleCalculate}
                  className="w-full bg-[#D4AF37] text-black hover:bg-[#00F0FF] font-bold py-6 text-lg rounded-none transition-all duration-400 group"
                >
                  <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform duration-500" />
                  Revelar Potencial
                </Button>
              </div>

              {/* Results */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: showResults ? 1 : 0.3, scale: showResults ? 1 : 0.95 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <div className="bg-white/10 backdrop-blur-sm border-2 border-[#00F0FF]/50 p-6 rounded-none shadow-glow-cyan">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-[#00F0FF]" />
                    <span className="text-white/85 text-sm font-medium">ROI Proyectado (12 meses)</span>
                  </div>
                  <div className="text-5xl font-bold text-[#00F0FF] drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]">
                    {results.roi.toLocaleString()}%
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm border-2 border-[#D4AF37]/50 p-6 rounded-none shadow-glow-gold">
                  <span className="text-white/85 text-sm block mb-2 font-medium">Aumento de Ingresos</span>
                  <div className="text-3xl font-bold text-[#D4AF37] drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">
                    ${(results.revenueIncrease / 1000000).toFixed(1)}M
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 p-6 rounded-none">
                  <span className="text-white/85 text-sm block mb-2 font-medium">Punto de Equilibrio</span>
                  <div className="text-2xl font-bold text-white">
                    {results.breakEvenMonths} meses
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Disclaimer */}
            <p className="text-center text-white/70 text-sm font-medium">
              * Cálculos basados en promedios de 456 proyectos transformados. Resultados reales pueden variar según industria y compromiso.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
