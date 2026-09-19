import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline-dark" | "outline-light";

type BaseProps = {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = BaseProps & { href: string } & Omit<
    ComponentPropsWithoutRef<typeof Link>,
    "href" | "className" | "children"
  >;

type ButtonAsButton = BaseProps &
  Omit<ComponentPropsWithoutRef<"button">, "className" | "children"> & {
    href?: undefined;
  };

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-gold-500 text-navy-950 hover:bg-gold-600",
  secondary: "bg-navy-900 text-white hover:bg-navy-800",
  "outline-dark": "border border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white",
  "outline-light": "border border-white/40 text-white hover:bg-white/10",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500";

export function Button(props: ButtonProps) {
  const { variant = "primary", className, children } = props;
  const classes = cn(baseClasses, variantClasses[variant], className);

  if ("href" in props && props.href) {
    const { href, variant: _v, className: _c, children: _ch, ...rest } = props;
    void _v;
    void _c;
    void _ch;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { variant: _v2, className: _c2, children: _ch2, ...rest } = props as ButtonAsButton;
  void _v2;
  void _c2;
  void _ch2;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
