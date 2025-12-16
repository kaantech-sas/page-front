import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, className = "", ...props }) => (
  <div
    className={`glass-card border-glow rounded-xl p-6 shadow-lg bg-black/60 ${className}`}
    {...props}
  >
    {children}
  </div>
);
