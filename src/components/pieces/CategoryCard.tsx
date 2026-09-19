import Link from "next/link";
import Image from "next/image";
import type { Category } from "@/types/category";
import { CategoryIconGlyph } from "@/components/pieces/category-icon";
import { cn } from "@/lib/utils";

export function CategoryCard({
  category,
  href,
  variant = "compact",
}: {
  category: Category;
  /**
   * When the shop exists, pass `/boutique/${category.slug}` to turn this
   * card into a real link without changing its markup or callers.
   */
  href?: string;
  variant?: "compact" | "detailed";
}) {
  const content = (
    <>
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-navy-900">
        {category.image ? (
          <Image
            src={category.image}
            alt={category.name}
            fill
            sizes="(min-width: 1024px) 20vw, (min-width: 640px) 45vw, 90vw"
            className="object-cover"
          />
        ) : null}
        <div className="absolute bottom-0 left-0 flex h-10 w-10 items-center justify-center bg-navy-900 text-gold-300">
          <CategoryIconGlyph icon={category.icon} size={18} aria-hidden />
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-heading text-lg font-semibold text-navy-900">
          {category.name}
        </h3>
        <p className="mt-1 text-sm text-ink-muted">
          {variant === "detailed" ? category.description : category.shortDescription}
        </p>
      </div>
    </>
  );

  const classes = cn(
    "block h-full border border-border bg-surface",
    href && "transition-colors hover:border-navy-900"
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return <div className={classes}>{content}</div>;
}
