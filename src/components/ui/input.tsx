import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...props }, ref) => (
    <input
      ref={ref}
      className={`w-full px-4 py-2 rounded-lg bg-black/60 border border-[#00F0FF] text-white placeholder:text-white/60 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#00F0FF] focus:outline-none transition-all duration-300 ${className}`}
      {...props}
    />
  )
);
Input.displayName = "Input";
