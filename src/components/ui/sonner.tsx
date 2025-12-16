import React from "react";

export const Toaster: React.FC = () => (
  <div className="fixed bottom-6 right-6 z-50">
    {/* Aquí iría la lógica de notificaciones, puedes integrar una librería real si lo deseas */}
    <div className="glass-card border-glow px-6 py-4 rounded-lg text-white animate-glow shadow-lg">
      <span>Notificación de ejemplo ✨</span>
    </div>
  </div>
);
