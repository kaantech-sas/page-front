import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, className = "", ...props }) => (
  <button
    className={`relative px-6 py-2 rounded-lg font-semibold bg-gradient-to-r from-[#00F0FF] to-[#D4AF37] text-black shadow-md hover-lift text-base focus:outline-none focus:ring-2 focus:ring-[#00F0FF] focus:ring-opacity-50 transition-all duration-300 ${className}`}
    {...props}
  >
    {children}
  </button>
);
