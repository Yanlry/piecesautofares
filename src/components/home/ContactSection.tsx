import { Suspense } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { ContactInfoCard } from "@/components/contact/ContactInfoCard";
import { ContactForm } from "@/components/contact/ContactForm";

export function ContactSection() {
  return (
    <section className="border-t border-border py-16 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Nous contacter"
          title="Une question ? Une pièce à demander ?"
          description="Décrivez votre besoin ou les informations de votre véhicule, nous revenons vers vous rapidement."
          align="center"
          className="mx-auto"
        />
        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)]">
          <ContactInfoCard showStorePhoto />
          <Suspense fallback={<div className="border border-border bg-surface p-8" />}>
            <ContactForm />
          </Suspense>
        </div>
      </Container>
    </section>
  );
}
