"use client";

import { Map, Navigation, Route, X } from "lucide-react";
import type { MouseEvent } from "react";
import { useState } from "react";
import {
  toAppleMapsDirectionsHref,
  toGeoDirectionsHref,
  toMapsDirectionsHref,
  toWazeDirectionsHref,
} from "@/lib/utils";

type DirectionsButtonProps = {
  address: string;
};

export function DirectionsButton({ address }: DirectionsButtonProps) {
  const [isChooserOpen, setIsChooserOpen] = useState(false);
  const mapsHref = toMapsDirectionsHref(address);
  const geoHref = toGeoDirectionsHref(address);
  const wazeHref = toWazeDirectionsHref(address);
  const appleMapsHref = toAppleMapsDirectionsHref(address);

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    const userAgent = window.navigator.userAgent;

    if (/Android/i.test(userAgent)) {
      event.preventDefault();
      window.location.href = geoHref;
      return;
    }

    if (/iPhone|iPad|iPod/i.test(userAgent)) {
      event.preventDefault();
      setIsChooserOpen(true);
    }
  }

  return (
    <>
      <a
        href={mapsHref}
        target="_blank"
        rel="noreferrer"
        onClick={handleClick}
        className="mt-6 inline-flex w-full items-center gap-3 rounded-sm bg-gold-500 px-4 py-3 text-left text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-600"
      >
        <Navigation size={18} className="shrink-0" aria-hidden />
        <span>
          <span className="block text-xs uppercase tracking-wide">Itinéraire</span>
          <span className="mt-1 block font-medium leading-snug normal-case tracking-normal">
            {address}
          </span>
        </span>
      </a>

      {isChooserOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end bg-navy-950/50 p-4 sm:items-center sm:justify-center"
          role="presentation"
          onClick={() => setIsChooserOpen(false)}
        >
          <div
            className="w-full max-w-sm rounded-sm bg-surface p-5 shadow-xl"
            role="dialog"
            aria-modal="true"
            aria-label="Choisir une application GPS"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-heading text-lg font-semibold text-navy-900">
                  Choisir un GPS
                </p>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                  {address}
                </p>
              </div>
              <button
                type="button"
                className="rounded-sm p-1 text-ink-muted hover:bg-surface-muted hover:text-navy-900"
                aria-label="Fermer"
                onClick={() => setIsChooserOpen(false)}
              >
                <X size={20} aria-hidden />
              </button>
            </div>

            <div className="mt-5 grid gap-3">
              <a
                href={appleMapsHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-sm border border-border px-4 py-3 text-sm font-semibold text-navy-900 hover:border-navy-900"
                onClick={() => setIsChooserOpen(false)}
              >
                <Map size={18} aria-hidden />
                Plans
              </a>
              <a
                href={mapsHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-sm border border-border px-4 py-3 text-sm font-semibold text-navy-900 hover:border-navy-900"
                onClick={() => setIsChooserOpen(false)}
              >
                <Navigation size={18} aria-hidden />
                Google Maps
              </a>
              <a
                href={wazeHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-sm border border-border px-4 py-3 text-sm font-semibold text-navy-900 hover:border-navy-900"
                onClick={() => setIsChooserOpen(false)}
              >
                <Route size={18} aria-hidden />
                Waze
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
