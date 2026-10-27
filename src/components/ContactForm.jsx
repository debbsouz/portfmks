import React, { useState } from 'react';

export default function ContactForm({ t }) {
  const [status, setStatus] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setStatus('');
    const form = event.currentTarget;

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });
      if (!response.ok) throw new Error('Form submission failed');
      setStatus('SUCCESS');
      form.reset();
    } catch {
      setStatus('ERROR');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} action="https://formspree.io/f/xwvapaea" method="POST">
      <div className="form-field">
        <label htmlFor="name">{t.formName}</label>
        <input type="text" id="name" name="name" autoComplete="name" required className="editorial-input" />
      </div>
      <div className="form-field">
        <label htmlFor="email">{t.formEmail}</label>
        <input type="email" id="email" name="email" autoComplete="email" required className="editorial-input" />
      </div>
      <div className="form-field">
        <label htmlFor="message">{t.formMessage}</label>
        <textarea id="message" name="message" rows="5" required className="editorial-input" />
      </div>
      <button type="submit" className="form-submit" disabled={submitting}>
        {submitting ? t.formSubmitting : t.formSubmit}
      </button>
      {status === 'SUCCESS' && <p className="form-message" role="status" aria-live="polite">{t.formSuccess}</p>}
      {status === 'ERROR' && <p className="form-message form-error" role="alert">{t.formError}</p>}
    </form>
  );
}
