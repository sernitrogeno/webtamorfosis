import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "brand" | "neutral" | "warm" | "before" | "after";

const tones: Record<Tone, string> = {
  brand:
    "bg-brand-50 text-brand-700 border-brand-100 dark:bg-brand-500/10 dark:text-brand-200 dark:border-brand-500/20",
  neutral:
    "bg-black/[0.04] text-muted border-transparent dark:bg-white/5 dark:text-muted",
  warm: "bg-warm-500/10 text-warm-600 border-warm-500/20",
  before:
    "bg-slate-100 text-slate-500 border-slate-200 dark:bg-white/5 dark:text-slate-300 dark:border-white/10",
  after:
    "bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/20",
};

interface BadgeProps {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  icon?: ReactNode;
}

export function Badge({ children, tone = "brand", className, icon }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold",
        tones[tone],
        className
      )}
    >
      {icon}
      {children}
    </span>
  );
}
