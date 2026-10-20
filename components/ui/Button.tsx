import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "text" | "whatsapp" | "on-dark" | "on-dark-outline";
type ButtonSize = "md" | "lg";

type ButtonLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  eventName?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  eventName,
  ...props
}: ButtonLinkProps) {
  const classes = `button button-${variant} button-${size} ${className}`.trim();
  const external = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

  if (external) {
    return (
      <a href={href} className={classes} data-event={eventName} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} data-event={eventName} {...props}>
      {children}
    </Link>
  );
}

type ActionButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function ActionButton({ children, variant = "secondary", size = "md", className = "", ...props }: ActionButtonProps) {
  return (
    <button className={`button button-${variant} button-${size} ${className}`.trim()} {...props}>
      {children}
    </button>
  );
}
