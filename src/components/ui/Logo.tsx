import Image from "next/image";
import Link from "next/link";
import { company } from "@/config/company";
import { cn } from "@/lib/utils";

export function Logo({
  size = 44,
  textClassName = "text-lg sm:text-xl",
}: {
  size?: number;
  textClassName?: string;
}) {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label={`${company.name} - Accueil`}>
      <Image
        src="/images/logo.png"
        alt={`Logo ${company.name}`}
        width={size}
        height={size}
        style={{ width: size, height: size }}
        className="rounded-sm"
        priority
      />
      <span
        className={cn(
          "font-heading font-semibold uppercase tracking-wide text-white",
          textClassName
        )}
      >
        {company.name}
      </span>
    </Link>
  );
}
