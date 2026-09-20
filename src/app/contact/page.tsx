import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactInfoCard } from "@/components/contact/ContactInfoCard";
import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Pièces Auto Fares à Faches-Thumesnil (Lille) pour toute demande de pièce automobile, en magasin ou par téléphone.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Contactez-nous"
        description="Une question, une pièce à rechercher ? Écrivez-nous en précisant votre véhicule."
      />
      <section className="py-16 lg:py-20">
        <Container className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)]">
          <div className="space-y-6">
            <div className="relative aspect-[4/3] w-full border border-border">
              <Image
                src="/images/magasin.jpg"
                alt="Façade du magasin Pièces Auto Fares"
                fill
                sizes="(min-width: 1024px) 30vw, 90vw"
                className="object-cover"
              />
            </div>
            <ContactInfoCard showDirections />
          </div>
          <Suspense fallback={<div className="border border-border bg-surface p-8" />}>
            <ContactForm />
          </Suspense>
        </Container>
      </section>
    </>
  );
}
