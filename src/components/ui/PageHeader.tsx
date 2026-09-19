import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-navy-950/60 bg-navy-900 pb-14 pt-32 text-white lg:pb-16 lg:pt-40">
      <Image
        src="/images/banniere.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-navy-950/25" aria-hidden />

      <Container className="relative">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-300">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 font-heading text-3xl font-semibold sm:text-4xl">{title}</h1>
        {description && (
          <p className="mt-4 max-w-2xl text-white/70">{description}</p>
        )}
      </Container>
    </section>
  );
}
