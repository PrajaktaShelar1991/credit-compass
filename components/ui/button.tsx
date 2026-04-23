"use client";

import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({
  variant = "primary",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex cursor-pointer items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19A48E]/40 disabled:cursor-not-allowed disabled:opacity-60";

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-[#19A48E] to-[#7FDCCF] text-white shadow-lg shadow-emerald-100 hover:-translate-y-0.5 hover:shadow-xl",
    secondary:
      "border border-[#19A48E]/35 bg-white text-[#127a69] shadow-sm hover:border-[#19A48E]/55 hover:bg-[#19A48E]/10",
    ghost: "text-slate-600 hover:bg-emerald-50",
  };

  return <button type={type} className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props} />;
}
