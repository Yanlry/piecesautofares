import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { company } from "@/config/company";
import { toTelHref } from "@/lib/utils";

const items = [
  { icon: Phone, value: company.phone, href: toTelHref(company.phone) },
  { icon: Mail, value: company.email, href: `mailto:${company.email}` },
  { icon: MapPin, value: company.address, href: undefined },
  { icon: Clock, value: company.openingHours, href: undefined },
].filter((item) => item.value);

export function ContactInfoCard() {
  if (items.length === 0) {
    return (
      <div className="border border-border bg-surface p-8">
        <h2 className="font-heading text-xl font-semibold text-navy-900">
          Nos coordonnées
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">
          Utilisez le formulaire pour nous transmettre votre demande, nous
          reviendrons vers vous rapidement.
        </p>
      </div>
    );
  }

  return (
    <div className="border border-border bg-surface p-8">
      <h2 className="font-heading text-xl font-semibold text-navy-900">
        Nos coordonnées
      </h2>
      <ul className="mt-5 space-y-4">
        {items.map(({ icon: Icon, value, href }) => (
          <li key={value} className="flex items-start gap-3 text-sm text-ink-muted">
            <Icon size={18} className="mt-0.5 shrink-0 text-gold-600" aria-hidden />
            {href ? (
              <a href={href} className="hover:text-navy-900">
                {value}
              </a>
            ) : (
              <span>{value}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
