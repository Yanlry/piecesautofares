import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="pb-24 pt-40">
      <Container className="max-w-xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">
          Erreur 404
        </p>
        <h1 className="mt-4 font-heading text-3xl font-semibold text-navy-900">
          Page introuvable
        </h1>
        <p className="mt-4 text-ink-muted">
          La page que vous recherchez n&apos;existe pas ou plus.
        </p>
        <Button href="/" variant="primary" className="mt-8">
          Retour à l&apos;accueil
        </Button>
      </Container>
    </section>
  );
}
