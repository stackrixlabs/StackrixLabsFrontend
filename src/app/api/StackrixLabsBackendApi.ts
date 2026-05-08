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

/**
 * Submits the contact form data to the backend API.
 * @param form - The contact form data to submit. The ViewModel is responsible for validating this before calling the Model.
 */
export async function SendEmailAsync(form: FormState): Promise<void> {
  const res = await fetch(`http://localhost:8080/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || 'Something went wrong.');
  }
}