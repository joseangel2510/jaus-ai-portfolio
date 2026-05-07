import { cn } from "@/lib/utils";

type Props = {
  index: string;
  label: string;
  className?: string;
};

/** Standardized eyebrow used at the top of every section. */
export function SectionEyebrow({ index, label, className }: Props) {
  return (
    <div className={cn("reveal flex items-center gap-3", className)}>
      <span className="h-px w-10 bg-accent-dim" />
      <span className="section-label">
        <span className="text-accent">[</span>
        <span className="font-mono">{index}</span>
        <span className="text-accent">]</span>
        <span>// {label}</span>
      </span>
    </div>
  );
}
