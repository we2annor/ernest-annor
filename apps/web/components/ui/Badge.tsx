type BadgeVariant = "accent" | "pink" | "blue" | "muted";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  accent: "bg-accent/10 text-accent border border-accent/20",
  pink: "bg-pink/10 text-pink border border-pink/20",
  blue: "bg-blue/10 text-blue border border-blue/20",
  muted: "bg-surface text-text-muted border border-border",
};

export function Badge({
  children,
  variant = "accent",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center justify-center
        px-4 py-1.5 rounded-full
        text-xs font-medium tracking-wide
        ${variantStyles[variant]} 
        ${className}`}
    >
      {children}
    </span>
  );
}
