import React, { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "early-access",
          "email": email
        })
      });

      console.log('✅ Form submitted successfully:', email);
      setSuccess(true);
      setEmail('');

      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      console.error('❌ Submission Error:', err);
      setError('Submission failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="w-full max-w-3xl mx-auto text-center">
        <div className="p-4 rounded-lg bg-white/5 border border-white/10">
          <p className="text-base text-white/90">Thank you! We'll be in touch soon.</p>
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
      className="w-full max-w-3xl mx-auto"
    >
      <input type="hidden" name="form-name" value="early-access" />
      <div className="flex flex-col md:flex-row gap-3">
        <Input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your business email"
          className="bg-white/5 border-white/20 text-white placeholder:text-white/40 h-12 text-base flex-1 min-w-0"
          disabled={isSubmitting}
          required
        />
        <Button
          type="submit"
          className="bg-white text-black hover:bg-white/90 h-12 px-12 text-base font-medium whitespace-nowrap min-w-[240px]"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Request Early Access'}
        </Button>
      </div>
      {error && <p className="text-sm text-red-400 mt-3 text-center md:text-left">{error}</p>}
    </form>
  );
};
