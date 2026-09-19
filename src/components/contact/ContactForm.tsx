"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { submitContactRequest } from "@/lib/contact";

const inputClasses =
  "w-full border border-border bg-surface px-4 py-2.5 text-sm text-navy-900 placeholder:text-ink-muted/60 focus:border-navy-900 focus:outline-none";
const labelClasses = "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-muted";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const searchParams = useSearchParams();
  const prefilledPart = searchParams.get("piece") ?? "";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("submitting");
    try {
      const result = await submitContactRequest({
        name: String(data.get("name") ?? ""),
        phone: String(data.get("phone") ?? ""),
        email: String(data.get("email") ?? ""),
        vehicleBrand: String(data.get("vehicleBrand") ?? ""),
        vehicleModel: String(data.get("vehicleModel") ?? ""),
        vehicleYear: String(data.get("vehicleYear") ?? ""),
        engine: String(data.get("engine") ?? ""),
        partRequested: String(data.get("partRequested") ?? ""),
        message: String(data.get("message") ?? ""),
      });
      setStatus(result.success ? "success" : "error");
      if (result.success) {
        form.reset();
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-border bg-surface p-8">
        <h2 className="font-heading text-xl font-semibold text-navy-900">
          Demande envoyée
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">
          Merci, votre demande a bien été prise en compte. Nous reviendrons
          vers vous dès que possible.
        </p>
        <Button
          type="button"
          variant="outline-dark"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          Envoyer une nouvelle demande
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border border-border bg-surface p-8">
      <h2 className="font-heading text-xl font-semibold text-navy-900">
        Faire une demande
      </h2>
      <p className="mt-2 text-sm text-ink-muted">
        Plus vous précisez les informations de votre véhicule, plus vite nous
        pourrons identifier la bonne pièce.
      </p>

      {prefilledPart && (
        <div className="mt-5 flex items-center justify-between gap-3 border border-gold-300 bg-gold-100/40 px-4 py-2.5 text-sm text-navy-900">
          <span>
            Pièce sélectionnée : <strong>{prefilledPart}</strong>
          </span>
          <Link href="/contact" className="shrink-0 text-xs font-medium uppercase tracking-wide text-navy-900 underline underline-offset-2">
            Modifier
          </Link>
        </div>
      )}

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Nom
          </label>
          <input id="name" name="name" type="text" required className={inputClasses} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClasses}>
            Téléphone
          </label>
          <input id="phone" name="phone" type="tel" className={inputClasses} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="email" className={labelClasses}>
            Email
          </label>
          <input id="email" name="email" type="email" required className={inputClasses} />
        </div>

        <div>
          <label htmlFor="vehicleBrand" className={labelClasses}>
            Marque du véhicule
          </label>
          <input id="vehicleBrand" name="vehicleBrand" type="text" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="vehicleModel" className={labelClasses}>
            Modèle
          </label>
          <input id="vehicleModel" name="vehicleModel" type="text" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="vehicleYear" className={labelClasses}>
            Année
          </label>
          <input id="vehicleYear" name="vehicleYear" type="text" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="engine" className={labelClasses}>
            Motorisation
          </label>
          <input id="engine" name="engine" type="text" className={inputClasses} />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="partRequested" className={labelClasses}>
            Pièce recherchée
          </label>
          <input
            id="partRequested"
            name="partRequested"
            type="text"
            defaultValue={prefilledPart}
            className={inputClasses}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClasses}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className={inputClasses}
          />
        </div>
      </div>

      {status === "error" && (
        <p className="mt-4 text-sm text-red-700" role="alert">
          Une erreur est survenue, merci de réessayer.
        </p>
      )}

      <Button type="submit" variant="primary" className="mt-6" disabled={status === "submitting"}>
        {status === "submitting" ? "Envoi en cours..." : "Envoyer la demande"}
      </Button>
    </form>
  );
}
