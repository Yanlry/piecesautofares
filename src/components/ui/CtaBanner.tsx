import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CtaBanner({
  title,
  description,
  buttonLabel = "Contactez-nous",
  href = "/contact",
}: {
  title: string;
  description?: string;
  buttonLabel?: string;
  href?: string;
}) {
  return (
    <section className="border-t border-border bg-surface-muted py-14">
      <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <h2 className="font-heading text-2xl font-semibold text-navy-900">{title}</h2>
          {description && <p className="mt-2 text-ink-muted">{description}</p>}
        </div>
        <Button href={href} variant="secondary" className="shrink-0">
          {buttonLabel}
        </Button>
      </Container>
    </section>
  );
}
