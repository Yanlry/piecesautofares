import Image from "next/image";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { DirectionsButton } from "@/components/contact/DirectionsButton";
import { company } from "@/config/company";
import { toTelHref } from "@/lib/utils";

const items = [
  { key: "phone", icon: Phone, value: company.phone, href: toTelHref(company.phone) },
  { key: "email", icon: Mail, value: company.email, href: `mailto:${company.email}` },
  { key: "address", icon: MapPin, value: company.address, href: undefined },
  { key: "hours", icon: Clock, value: company.openingHours, href: undefined },
].filter((item) => item.value);

type ContactInfoCardProps = {
  showDirections?: boolean;
  showStorePhoto?: boolean;
};

export function ContactInfoCard({
  showDirections = false,
  showStorePhoto = false,
}: ContactInfoCardProps) {
  const visibleItems = showDirections
    ? items.filter((item) => item.key !== "address")
    : items;

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
    <div className="flex h-full flex-col border border-border bg-surface p-8">
      {showStorePhoto && (
        <div className="relative mb-6 aspect-[4/3] w-full overflow-hidden border border-border">
          <Image
            src="/images/magasin.jpg"
            alt="Façade du magasin Pièces Auto Fares"
            fill
            sizes="(min-width: 1024px) 24vw, 90vw"
            className="object-cover"
          />
        </div>
      )}
      <h2 className="font-heading text-xl font-semibold text-navy-900">
        Nos coordonnées
      </h2>
      <ul className="mt-5 space-y-4">
        {visibleItems.map(({ icon: Icon, value, href }) => (
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
      {showDirections && company.address && (
        <DirectionsButton address={company.address} />
      )}
    </div>
  );
}
