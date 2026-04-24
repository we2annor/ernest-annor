interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export function Card({
  children,
  className = "",
  hover = false,
  onClick,
}: CardProps) {
  const baseStyles = "bg-surface border border-border rounded-xl p-6";
  const hoverStyles = hover
    ? "cursor-pointer transition-all duration-300 hover:border-accent/50 hover:bg-surface-raised hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/20"
    : "";
  return (
    <div
      className={`${baseStyles} ${hoverStyles} ${className}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClick();
              }
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}
