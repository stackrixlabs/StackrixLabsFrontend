// ─────────────────────────────────────────────
// MODEL
// Responsible for: data shape and API communication only.
// No UI, no state — just types and the fetch call.
// ─────────────────────────────────────────────

export type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  websiteType: string;
  budget: string;
  timeline: string;
  message: string;
  agreement: boolean;
};

export type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

export const INITIAL_FORM: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  websiteType: '',
  budget: '',
  timeline: '',
  message: '',
  agreement: false,
};

// The only job of this function is to send data to the backend.
// It knows nothing about React state or the UI.
export async function submitContactForm(form: FormState): Promise<void> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || 'Something went wrong.');
  }
}