// ─────────────────────────────────────────────
// VIEWMODEL
// Responsible for: state management, validation, and
// calling the Model. Exposes clean data + handlers to the View.
// The View never directly touches the Model — it only talks to the ViewModel.
// ─────────────────────────────────────────────

import { useState, type ChangeEvent, type FormEvent } from 'react';
import {
  FormState,
  SubmitStatus,
  INITIAL_FORM,
  submitContactForm,
} from './contactModel';

export function useContactViewModel() {
  // ── State ──────────────────────────────────
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  // ── Derived state (computed values) ────────
  const isLoading = status === 'loading';
  const isSuccess = status === 'success';
  const isError = status === 'error';

  // ── Handlers ───────────────────────────────

  // Handles any input, textarea, select, or checkbox change
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> | {
      target: {
        checked?: boolean;
        name?: string;
        type?: string;
        value: unknown;
      };
    }
  ) => {
    const { name, value, type } = e.target;
    if (!name) return;

    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? Boolean(e.target.checked) : String(value ?? ''),
    }));
  };

  // Validates form before calling the Model's submit function
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    // Validation lives here in the ViewModel, not in the View
    if (!form.agreement) {
      setErrorMsg('Please agree to the terms before submitting.');
      setStatus('error');
      return;
    }

    try {
      // ViewModel calls the Model — View never does this directly
      await submitContactForm(form);
      setStatus('success');
      setForm(INITIAL_FORM);
    } catch (err: any) {
      setStatus('error');
      setErrorMsg(err.message || 'Failed to send message. Please try again.');
    }
  };

  // ── Expose to View ─────────────────────────
  // The View only sees what the ViewModel decides to expose.
  // No raw setState, no fetch logic — just clean data and handlers.
  return {
    form,
    isLoading,
    isSuccess,
    isError,
    errorMsg,
    handleChange,
    handleSubmit,
  };
}
