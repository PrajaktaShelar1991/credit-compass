import type { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className = "", ...props }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-200/60 transition-all duration-200 hover:shadow-md ${className}`}
      {...props}
    />
  );
}
