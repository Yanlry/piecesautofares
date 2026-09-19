import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, Phone } from "lucide-react";
import { categories, getCategoryBySlug } from "@/data/categories";
import { getPartOptions } from "@/data/part-options";
import { PageHeader } from "@/components/ui/PageHeader";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { company } from "@/config/company";
import { toTelHref } from "@/lib/utils";
import { siteUrl } from "@/lib/seo";

export function generateStaticParams() {
  return categories.map((category) => ({ categorie: category.slug }));
}

const categoryTitles: Record<string, string> = {
  freinage: "Pièces de freinage",
  moteur: "Pièces moteur",
  filtration: "Filtres automobiles",
  "huiles-liquides": "Huiles et liquides auto",
  suspension: "Pièces de suspension",
  direction: "Pièces de direction",
  "batterie-accessoires": "Batteries et accessoires auto",
  eclairage: "Éclairage automobile",
  carrosserie: "Pièces de carrosserie",
  echappement: "Pièces d'échappement",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categorie: string }>;
}): Promise<Metadata> {
  const { categorie } = await params;
  const category = getCategoryBySlug(categorie);

  if (!category) {
    return { title: "Famille de pièces" };
  }

  return {
    title: categoryTitles[category.slug] ?? category.name,
    description: `${category.description} Pièces Auto Fares, à Faches-Thumesnil près de Lille, vous accompagne pour trouver la bonne référence.`,
    alternates: {
      canonical: `/pieces/${category.slug}`,
    },
  };
}

export default async function CategoriePage({
  params,
}: {
  params: Promise<{ categorie: string }>;
}) {
  const { categorie } = await params;
  const category = getCategoryBySlug(categorie);

  if (!category) {
    notFound();
  }

  const options = getPartOptions(category.id);
  const otherCategories = categories.filter((item) => item.id !== category.id);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Nos pièces", item: `${siteUrl}/pieces` },
      {
        "@type": "ListItem",
        position: 3,
        name: category.name,
        item: `${siteUrl}/pieces/${category.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PageHeader
        eyebrow="Nos pièces"
        title={category.name}
        description={category.description}
      />

      <nav aria-label="Fil d'Ariane" className="border-b border-border bg-surface">
        <Container className="py-3">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-ink-muted">
            <li>
              <Link href="/" className="hover:text-navy-900">
                Accueil
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/pieces" className="hover:text-navy-900">
                Nos pièces
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-navy-900" aria-current="page">
              {category.name}
            </li>
          </ol>
        </Container>
      </nav>

      <section className="py-16 lg:py-20">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
          {category.image && (
            <div className="relative aspect-[4/3] w-full border border-border lg:aspect-auto lg:h-full">
              <Image
                src={category.image}
                alt={category.imageAlt}
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
          )}

          <div>
            <h2 className="font-heading text-2xl font-semibold text-navy-900">
            Nous vous aidons à trouver la bonne référence
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              {category.intro}
            </p>

            {options.length > 0 && (
              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {options.map((option) => (
                  <li key={option}>
                    <Link
                      href={`/contact?piece=${encodeURIComponent(`${category.name} — ${option}`)}`}
                      className="flex items-center justify-between gap-3 border border-border bg-surface px-4 py-3 text-sm font-medium text-navy-900 transition-colors hover:border-navy-900"
                    >
                      {option}
                      <ArrowRight size={16} className="shrink-0 text-gold-600" aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-border pt-8">
              <p className="text-sm text-ink-muted">
                Vous ne trouvez pas votre pièce dans cette liste ?
              </p>
              {company.phone ? (
                <Button href={toTelHref(company.phone)} variant="primary">
                  <Phone size={16} aria-hidden />
                  Appelez-nous
                </Button>
              ) : (
                <Button href="/contact" variant="primary">
                  Faire une demande
                </Button>
              )}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-surface-muted py-12">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
            Autres familles de pièces
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {otherCategories.map((item) => (
              <Link
                key={item.id}
                href={`/pieces/${item.slug}`}
                className="border border-border bg-surface px-3 py-1.5 text-sm text-navy-900 transition-colors hover:border-navy-900"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Vous ne trouvez pas votre pièce ?"
        description="Contactez-nous en nous précisant votre véhicule, nous vous aiderons à identifier la référence adaptée."
      />
    </>
  );
}
