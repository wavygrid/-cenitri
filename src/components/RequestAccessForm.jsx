import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { PhoneInput } from './ui/phone-input';
import { HoursSlider } from './questions/HoursSlider';
import { ProspectCounter } from './questions/ProspectCounter';
import { DepthGauge } from './questions/DepthGauge';
import { CurrencyInput } from './questions/CurrencyInput';
import { BinaryToggle } from './questions/BinaryToggle';
import { validateBusinessEmail } from '../lib/email-validation';
import { cn } from '../lib/utils';

const STEPS = {
  BASIC_INFO: 'basic_info',
  QUESTIONS: 'questions',
  SUCCESS: 'success',
};

export const RequestAccessForm = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(STEPS.BASIC_INFO);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
  });

  const [questions, setQuestions] = useState({
    hours: 0,
    prospects: 0,
    depth: null,
    contractValue: 0,
    canExecute: null,
  });

  const validateBasicInfo = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.company.trim()) newErrors.company = 'Company name is required';

    const emailValidation = validateBusinessEmail(formData.email);
    if (!emailValidation.isValid) newErrors.email = emailValidation.error;

    if (!formData.phone) newErrors.phone = 'Phone number is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateQuestions = () => {
    const newErrors = {};
    if (questions.depth === null) newErrors.depth = 'Please select a depth level';
    if (questions.canExecute === null) newErrors.canExecute = 'Please select an option';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBasicInfoSubmit = (e) => {
    e.preventDefault();
    if (validateBasicInfo()) {
      setCurrentStep(STEPS.QUESTIONS);
      setErrors({});
    }
  };

  const handleQuestionsSubmit = async (e) => {
    e.preventDefault();
    if (!validateQuestions()) return;

    setIsSubmitting(true);
    try {
      const isNetlify = window.location.hostname.includes('netlify.app') || window.location.hostname !== 'localhost';

      if (isNetlify) {
        const formDataObj = {
          'form-name': 'early-access-request',
          ...formData,
          ...Object.fromEntries(Object.entries(questions).map(([k, v]) => [k, String(v)]))
        };

        const response = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formDataObj).toString(),
        });

        if (!response.ok) throw new Error('Form submission failed');
      } else {
        console.log('Form submission (local):', { ...formData, ...questions });
        await new Promise(resolve => setTimeout(resolve, 1000));
      }

      setCurrentStep(STEPS.SUCCESS);
    } catch (error) {
      console.error('Error:', error);
      setErrors({ submit: 'Submission failed. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-3xl max-h-[95vh] bg-[#0a0a0a] border border-white/10 rounded-xl shadow-2xl overflow-hidden flex flex-col">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 sm:px-8 sm:py-6 border-b border-white/10 flex-shrink-0">
          <div>
            <h2 className="text-lg sm:text-xl font-light text-white">Request Early Access</h2>
            {currentStep === STEPS.QUESTIONS && (
              <p className="text-xs text-white/40 mt-1">Step 2 of 2</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-white/5 transition-colors flex items-center justify-center text-white/60 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content - Scrollable */}
        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-8 sm:py-8">
          {currentStep === STEPS.BASIC_INFO && (
            <form onSubmit={handleBasicInfoSubmit} className="space-y-6 max-w-xl mx-auto">
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="bg-white/5 border-white/10 text-white"
                  />
                  {errors.name && <p className="text-xs text-red-400">{errors.name}</p>}
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Acme Corp"
                    className="bg-white/5 border-white/10 text-white"
                  />
                  {errors.company && <p className="text-xs text-red-400">{errors.company}</p>}
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email">Business Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@company.com"
                    className="bg-white/5 border-white/10 text-white"
                  />
                  {errors.email && <p className="text-xs text-red-400">{errors.email}</p>}
                </div>

                <div className="grid gap-2">
                  <Label>Phone Number</Label>
                  <PhoneInput
                    value={formData.phone}
                    onChange={(value) => setFormData({ ...formData, phone: value })}
                    error={errors.phone}
                  />
                </div>
              </div>

              <Button type="submit" className="w-full bg-white text-black hover:bg-white/90 h-11">
                Continue
              </Button>
            </form>
          )}

          {currentStep === STEPS.QUESTIONS && (
            <form onSubmit={handleQuestionsSubmit} className="space-y-6 max-w-2xl mx-auto">
              <Card className="bg-white/5 border-white/10">
                <CardContent className="pt-6">
                  <HoursSlider
                    value={questions.hours}
                    onChange={(value) => setQuestions({ ...questions, hours: value })}
                  />
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10">
                <CardContent className="pt-6">
                  <ProspectCounter
                    value={questions.prospects}
                    onChange={(value) => setQuestions({ ...questions, prospects: value })}
                  />
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10">
                <CardContent className="pt-6">
                  <DepthGauge
                    value={questions.depth}
                    onChange={(value) => setQuestions({ ...questions, depth: value })}
                  />
                  {errors.depth && <p className="text-xs text-red-400 mt-2">{errors.depth}</p>}
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10">
                <CardContent className="pt-6">
                  <CurrencyInput
                    value={questions.contractValue}
                    onChange={(value) => setQuestions({ ...questions, contractValue: value })}
                  />
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10">
                <CardContent className="pt-6">
                  <BinaryToggle
                    value={questions.canExecute}
                    onChange={(value) => setQuestions({ ...questions, canExecute: value })}
                  />
                  {errors.canExecute && <p className="text-xs text-red-400 mt-2">{errors.canExecute}</p>}
                </CardContent>
              </Card>

              {errors.submit && (
                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                  <p className="text-sm text-red-400">{errors.submit}</p>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => { setCurrentStep(STEPS.BASIC_INFO); setErrors({}); }}
                  className="border-white/10 text-white hover:bg-white/5"
                  disabled={isSubmitting}
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  className="bg-white text-black hover:bg-white/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </Button>
              </div>
            </form>
          )}

          {currentStep === STEPS.SUCCESS && (
            <div className="text-center py-12 max-w-md mx-auto">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-white mb-3">Request Submitted</h3>
              <p className="text-sm text-white/60 mb-8">
                Thank you for your interest. We'll review your request and get back to you within 24-48 hours.
              </p>
              <Button onClick={onClose} variant="outline" className="border-white/10 text-white hover:bg-white/5">
                Close
              </Button>
            </div>
          )}
        </div>
      </div>

      <form name="early-access-request" data-netlify="true" hidden>
        <input type="text" name="name" />
        <input type="text" name="company" />
        <input type="email" name="email" />
        <input type="tel" name="phone" />
        <input type="number" name="hours" />
        <input type="number" name="prospects" />
        <input type="number" name="depth" />
        <input type="number" name="contractValue" />
        <input type="text" name="canExecute" />
      </form>
    </div>
  );
};
