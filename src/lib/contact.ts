export type ContactRequestPayload = {
  name: string;
  phone: string;
  email: string;
  vehicleBrand: string;
  vehicleModel: string;
  vehicleYear: string;
  engine: string;
  partRequested: string;
  message: string;
};

export type ContactRequestResult = {
  success: boolean;
};

// Placeholder client-side handler: no backend exists yet, this simulates a
// network round-trip so the form UX (loading/success states) can be built
// now and swapped for a real API call later without touching the form.
export async function submitContactRequest(
  payload: ContactRequestPayload
): Promise<ContactRequestResult> {
  void payload;
  await new Promise((resolve) => setTimeout(resolve, 600));
  return { success: true };
}
