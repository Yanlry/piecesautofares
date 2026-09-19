import { company } from "@/config/company";
import { siteUrl } from "@/lib/seo";

export function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoPartsStore",
    "@id": `${siteUrl}/#organization`,
    name: company.name,
    url: siteUrl,
    telephone: company.phone || undefined,
    address: {
      "@type": "PostalAddress",
      streetAddress: "107 Rue du Faubourg d'Arras",
      postalCode: "59155",
      addressLocality: "Faches-Thumesnil",
      addressCountry: "FR",
    },
    areaServed: [
      { "@type": "City", name: "Lille" },
      { "@type": "AdministrativeArea", name: "Hauts-de-France" },
      { "@type": "Country", name: "France" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "10:00",
        closes: "13:00",
      },
    ],
  };
}
