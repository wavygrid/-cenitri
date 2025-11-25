import React, { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { validateBusinessEmail } from '../lib/email-validation';

export const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const emailValidation = validateBusinessEmail(email);
    if (!emailValidation.isValid) {
      setError(emailValidation.error);
      return;
    }

    setIsSubmitting(true);
    try {
      const isProduction = window.location.hostname.includes('netlify.app') ||
                          window.location.hostname.includes('centurim.com');

      if (isProduction) {
        const response = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({
            'form-name': 'early-access',
            'email': email
          }).toString(),
        });

        if (!response.ok) throw new Error('Form submission failed');
      } else {
        console.log('Form submission (local):', { email });
        await new Promise(resolve => setTimeout(resolve, 1000));
      }

      setSuccess(true);
      setEmail('');
    } catch (err) {
      console.error('Error:', err);
      setError('Submission failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="w-full max-w-2xl mx-auto text-center">
        <div className="p-4 rounded-lg bg-white/5 border border-white/10">
          <p className="text-sm text-white/90">Thank you! We'll be in touch soon.</p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      name="early-access"
      method="POST"
      data-netlify="true"
      className="w-full max-w-xl mx-auto"
    >
      <input type="hidden" name="form-name" value="early-access" />
      <div className="flex flex-col sm:flex-row gap-2.5">
        <Input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your business email"
          className="bg-white/5 border-white/20 text-white placeholder:text-white/40 h-11 text-sm flex-1 min-w-0"
          disabled={isSubmitting}
          required
        />
        <Button
          type="submit"
          className="bg-white text-black hover:bg-white/90 h-11 px-6 text-sm font-medium whitespace-nowrap"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Request Early Access'}
        </Button>
      </div>
      {error && <p className="text-xs text-red-400 mt-2 text-center sm:text-left">{error}</p>}
    </form>
  );
};
