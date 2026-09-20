export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export function toTelHref(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function toMapsDirectionsHref(destination: string): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;
}

export function toGeoDirectionsHref(destination: string): string {
  return `geo:0,0?q=${encodeURIComponent(destination)}`;
}

export function toWazeDirectionsHref(destination: string): string {
  return `https://waze.com/ul?q=${encodeURIComponent(destination)}&navigate=yes`;
}

export function toAppleMapsDirectionsHref(destination: string): string {
  return `https://maps.apple.com/?daddr=${encodeURIComponent(destination)}`;
}
