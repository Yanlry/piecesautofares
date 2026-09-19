"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { company } from "@/config/company";
import { cn, toTelHref } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/pieces", label: "Nos pièces" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isSolid = isScrolled || isOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        isSolid ? "border-navy-950/60 bg-navy-900" : "border-transparent bg-transparent"
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <Logo priority />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigation principale">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium uppercase tracking-wide text-white/80 transition-colors hover:text-gold-300",
                  isActive && "text-gold-300"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {company.phone && (
            <Button href={toTelHref(company.phone)} variant="outline-light">
              <Phone size={16} aria-hidden />
              Appeler
            </Button>
          )}
          <Button href="/contact" variant="primary">
            Demander une pièce
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-sm p-2 text-white lg:hidden"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </Container>

      {isOpen && (
        <div className="border-t border-white/10 bg-navy-900 lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-sm px-2 py-3 text-sm font-medium uppercase tracking-wide text-white/85 hover:bg-white/5 hover:text-gold-300"
              >
                {link.label}
              </Link>
            ))}
            {company.phone && (
              <Button href={toTelHref(company.phone)} variant="outline-light" className="mt-3 w-full">
                <Phone size={16} aria-hidden />
                Appeler
              </Button>
            )}
            <Button href="/contact" variant="primary" className="mt-3 w-full">
              Demander une pièce
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
