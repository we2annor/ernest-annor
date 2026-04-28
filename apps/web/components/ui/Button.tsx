import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
  isLoading?: boolean;
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
    href?: never;
  };

type ButtonALink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: "a";
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonALink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-background font-semibold hover:bg-accent-hover border border-accent",
  secondary:
    "bg-pink text-white font-semibold hover:opacity-90 border border-pink",
  ghost:
    "bg-transparent text-accent hover:bg-surface border border-transparent",
  outline:
    "bg-transparent text-accent border border-accent hover:bg-accent hover:text-background",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-5 py-2 text-sm min-h-[36px]",
  md: "px-7 py-3 text-base min-h-[44px]",
  lg: "px-9 py-4 text-lg min-h-[52px]",
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed";

export function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  isLoading = false,
  as,
  ...props
}: ButtonProps) {
  const classes = [
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className,
  ].join(" ");

  if (as === "a") {
    const { href, ...anchorProps } =
      props as AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
    return (
      <a href={href} className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }
  return (
    <button
      className={classes}
      disabled={
        isLoading || (props as ButtonHTMLAttributes<HTMLButtonElement>).disabled
      }
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {isLoading ? (
        <span className='flex items-center gap-2'>
          <svg
            className='animate-spin h-4 w-4'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            aria-hidden='true'
          >
            <circle
              className='opacity-25'
              cx='12'
              cy='12'
              r='10'
              stroke='currentColor'
              strokeWidth='4'
            />
            <path
              className='opacity-75'
              fill='currentColor'
              d='M4 12a8 8 0 018-8v8z'
            />
          </svg>
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
}
