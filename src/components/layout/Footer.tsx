import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { company } from "@/config/company";
import { toTelHref } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/pieces", label: "Nos pièces" },
  { href: "/services", label: "Services" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/politique-de-confidentialite", label: "Politique de confidentialité" },
];

export function Footer() {
  const hasContactInfo =
    company.phone || company.email || company.address || company.openingHours;

  return (
    <footer className="bg-navy-950 text-white/80">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo size={40} textClassName="text-base" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            Votre interlocuteur pour trouver les pièces automobiles adaptées à votre véhicule.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
            Navigation
          </h3>
          <ul className="space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-gold-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {hasContactInfo && (
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              {company.phone && (
                <li className="flex items-start gap-2">
                  <Phone size={16} className="mt-0.5 shrink-0 text-gold-300" aria-hidden />
                  <a href={toTelHref(company.phone)} className="hover:text-gold-300">
                    {company.phone}
                  </a>
                </li>
              )}
              {company.email && (
                <li className="flex items-start gap-2">
                  <Mail size={16} className="mt-0.5 shrink-0 text-gold-300" aria-hidden />
                  <a href={`mailto:${company.email}`} className="hover:text-gold-300">
                    {company.email}
                  </a>
                </li>
              )}
              {company.address && (
                <li className="flex items-start gap-2">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-gold-300" aria-hidden />
                  <span>{company.address}</span>
                </li>
              )}
              {company.openingHours && (
                <li className="flex items-start gap-2">
                  <Clock size={16} className="mt-0.5 shrink-0 text-gold-300" aria-hidden />
                  <span>{company.openingHours}</span>
                </li>
              )}
            </ul>
          </div>
        )}

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
            Informations
          </h3>
          <ul className="space-y-2 text-sm">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-gold-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container>
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} {company.name}. Tous droits réservés.
          </p>
        </Container>
      </div>
    </footer>
  );
}
