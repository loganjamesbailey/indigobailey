"use client";

type ButtonVariant = "primary" | "secondary" | "dahlia";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    background: "var(--warm)",
    color: "var(--dark-canvas)",
    border: "none",
  },
  secondary: {
    background: "transparent",
    color: "var(--light-primary)",
    border: "1px solid var(--dark-border)",
  },
  dahlia: {
    background: "var(--dahlia-wine)",
    color: "var(--light-primary)",
    border: "none",
  },
};

export default function Button({
  variant = "primary",
  href,
  children,
  style,
  ...props
}: ButtonProps) {
  const baseStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--space-sm)",
    padding: "var(--space-md) var(--space-2xl)",
    borderRadius: "var(--radius-petal-sm)",
    fontSize: "var(--text-sm)",
    fontFamily: "var(--font-display)",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    cursor: "pointer",
    transition: "all var(--transition-default)",
    textDecoration: "none",
    ...variantStyles[variant],
    ...style,
  };

  if (href) {
    return (
      <a href={href} style={baseStyle}>
        {children}
      </a>
    );
  }

  return (
    <button style={baseStyle} {...props}>
      {children}
    </button>
  );
}
