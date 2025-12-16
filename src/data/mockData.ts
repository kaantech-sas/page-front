// Mock data for KAANTECH SAS mystical-technological website

export const heroData = {
  title: "Transforma Tu Marca en un Símbolo de Poder Digital",
  subtitle: "Tecnologías AR/VR + Estrategias Ancestrales de Persuasión = Crecimiento Exponencial",
  ctaText: "Desbloquear Auditoría Gratuita"
};

export const services = [
  {
    id: 1,
    title: "Realidad Aumentada (AR)",
    description: "Mapeo 3D de espacios que trasciende la percepción física",
    icon: "Box",
    color: "#00F0FF",
    features: [
      "Menús AR interactivos para restaurantes",
      "Visualización de productos en 3D",
      "Experiencias inmersivas para retail",
      "Mapeo arquitectónico holográfico"
    ],
    image: "https://images.unsplash.com/photo-1695185381786-548b877edfa6"
  },
  {
    id: 2,
    title: "Realidad Virtual (VR)",
    description: "Tours virtuales que abren puertas a nuevas dimensiones comerciales",
    icon: "Glasses",
    color: "#9D4EDD",
    features: [
      "Tours 360° de hoteles y propiedades",
      "Experiencias inmersivas de marca",
      "Eventos virtuales y showrooms",
      "Capacitación empresarial en VR"
    ],
    image: "https://images.unsplash.com/photo-1758273239313-6c703d089dd4"
  },
  {
    id: 3,
    title: "Cobertura de Eventos",
    description: "Capturamos la esencia energética de cada momento",
    icon: "Camera",
    color: "#D4AF37",
    features: [
      "Fotografía profesional con drones",
      "Video cinematográfico 4K",
      "Transmisión en vivo multiplataforma",
      "Edición con efectos místicos"
    ],
    image: "https://images.unsplash.com/photo-1745848038063-bbb6fc8c8867"
  },
  {
    id: 4,
    title: "Marketing Digital Estratégico",
    description: "Conectamos tu marca con la consciencia colectiva digital",
    icon: "Network",
    color: "#10B981",
    features: [
      "Estrategias de crecimiento orgánico",
      "Campañas publicitarias con IA",
      "Análisis de datos y neuromarketing",
      "Gestión de redes sociales"
    ],
    image: "https://images.pexels.com/photos/8471782/pexels-photo-8471782.jpeg"
  },
  {
    id: 5,
    title: "Branding & Storytelling",
    description: "Narrativas que despiertan arquetipos y mueven masas",
    icon: "Feather",
    color: "#FF6B35",
    features: [
      "Identidad de marca con diseño simbólico profundo",
      "Historias que conectan emocionalmente",
      "Diseño gráfico con significado oculto",
      "Estrategia de contenido consciente"
    ],
    image: "https://images.unsplash.com/photo-1698050557357-f77c446d8e4d"
  }
];

export const pricingPlans = [
  {
    id: 1,
    name: "Despertar Digital",
    price: 120000,
    tier: "BÁSICO",
    description: "Para negocios que comienzan su transformación",
    color: "#8B7355",
    features: [
      "1 experiencia AR básica (menú o producto)",
      "Gestión de 2 redes sociales",
      "Cobertura fotográfica básica (50 fotos editadas)",
      "Diseño de logo con simbología estratégica",
      "1 campaña publicitaria al mes",
      "Reportes mensuales de analytics"
    ],
    recommended: false
  },
  {
    id: 2,
    name: "Manifestación Profesional",
    price: 220000,
    tier: "PROFESIONAL",
    description: "El equilibrio perfecto entre inversión y resultados",
    color: "#C0C0C0",
    features: [
      "2 experiencias AR avanzadas + 1 tour VR 360°",
      "Gestión completa de 4 redes sociales",
      "Cobertura evento completo (foto + video 4K)",
      "Branding completo + manual de marca",
      "3 campañas publicitarias optimizadas con IA",
      "Estrategia de contenido mensual (30 posts)",
      "Dashboard analytics en tiempo real",
      "Soporte prioritario"
    ],
    recommended: true
  },
  {
    id: 3,
    name: "Ascensión Elite",
    price: 550000,
    tier: "ELITE",
    description: "Para marcas que buscan dominar su industria",
    color: "#D4AF37",
    features: [
      "Experiencias AR/VR ilimitadas + mapeo 3D completo",
      "Gestión multicanal completa (todas las plataformas)",
      "Cobertura profesional con drones + transmisión en vivo",
      "Rebranding completo + storytelling profundo",
      "Campañas publicitarias ilimitadas con neuromarketing",
      "Estrategia de contenido premium (100+ posts/mes)",
      "Desarrollo de chatbot IA personalizado",
      "Consultoría estratégica semanal",
      "Acceso a eventos exclusivos de networking"
    ],
    recommended: false
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Carlos Mendoza",
    role: "CEO, Restaurante Místico Sabor",
    content: "El menú AR que crearon transformó completamente la experiencia de nuestros clientes. Las ventas aumentaron 127% en 3 meses. Es magia tecnológica real.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    growth: "+127%"
  },
  {
    id: 2,
    name: "Ana Rodríguez",
    role: "Directora, Hotel Vista Celestial",
    content: "El tour VR 360° nos permitió vender habitaciones antes de que los clientes lleguen. Reducimos cancelaciones en 85% y aumentamos reservas premium.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    growth: "+240%"
  },
  {
    id: 3,
    name: "Miguel Torres",
    role: "Founder, Marca Consciente Co.",
    content: "Su enfoque de branding con simbolismo estratégico conectó profundamente con nuestra audiencia. Crecimos de 0 a 50K seguidores en 6 meses.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    growth: "+850%"
  }
];

export const beforeAfterCases = [
  {
    id: 1,
    clientName: "Restaurante La Esquina",
    industry: "Gastronomía",
    before: {
      followers: 850,
      engagement: "1.2%",
      revenue: "$2M/año"
    },
    after: {
      followers: 12400,
      engagement: "8.7%",
      revenue: "$5.2M/año"
    },
    growth: "+160%",
    timeline: "6 meses",
    service: "AR + Marketing Digital"
  },
  {
    id: 2,
    clientName: "Hotel Boutique Origen",
    industry: "Turismo",
    before: {
      followers: 2100,
      occupancy: "45%",
      avgNightly: "$180"
    },
    after: {
      followers: 18900,
      occupancy: "92%",
      avgNightly: "$340"
    },
    growth: "+204%",
    timeline: "8 meses",
    service: "VR Tours + Branding"
  },
  {
    id: 3,
    clientName: "Marca Esencial",
    industry: "Wellness",
    before: {
      followers: 450,
      salesMonth: "23 unidades",
      webTraffic: "1.2K/mes"
    },
    after: {
      followers: 34200,
      salesMonth: "847 unidades",
      webTraffic: "45K/mes"
    },
    growth: "+3,585%",
    timeline: "12 meses",
    service: "Estrategia Completa"
  }
];

export const stats = [
  { label: "Proyectos Manifestados", value: 500, suffix: "+" },
  { label: "Tasa de Transformación", value: 95, suffix: "%" },
  { label: "Promedio de Crecimiento", value: 10, suffix: "X" },
  { label: "Clientes Satisfechos", value: 456, suffix: "+" }
];

export const faqData = [
  {
    question: "¿Qué hace única a KAANTECH SAS?",
    answer: "Combinamos tecnologías de vanguardia (AR/VR) con principios de neuromarketing y diseño basado en geometría sagrada. No solo creamos campañas, creamos experiencias transformadoras que conectan a nivel consciente e inconsciente con tu audiencia."
  },
  {
    question: "¿Cuánto tiempo toma ver resultados?",
    answer: "Los resultados iniciales son visibles en las primeras 2-4 semanas. El crecimiento exponencial generalmente se manifiesta entre los 3-6 meses, dependiendo del plan elegido y la industria."
  },
  {
    question: "¿Necesito conocimientos técnicos para trabajar con ustedes?",
    answer: "Absolutamente no. Nos encargamos de todo el proceso técnico. Tu única responsabilidad es compartir tu visión y aprobar los resultados. El resto es nuestra magia."
  },
  {
    question: "¿Las experiencias AR/VR funcionan en cualquier dispositivo?",
    answer: "Sí. Desarrollamos experiencias optimizadas para smartphones iOS/Android, tablets y headsets VR. La mayoría de nuestras soluciones AR funcionan directamente desde el navegador web sin apps adicionales."
  },
  {
    question: "¿Ofrecen garantía de resultados?",
    answer: "Ofrecemos garantía de satisfacción 100%. Si en los primeros 30 días no ves mejoras mensurables en tus métricas clave, trabajamos sin costo adicional hasta lograrlo o devolvemos tu inversión."
  }
];