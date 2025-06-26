'use client';

import { useState } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  jobTitle: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    companyName: '',
    jobTitle: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          companyName: '',
          jobTitle: '',
          message: ''
        });
      } else {
        const errorData = await response.json();
        setSubmitStatus('error');
        setErrorMessage(errorData.error || 'Failed to send message');
      }
    } catch {
      setSubmitStatus('error');
      setErrorMessage('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 lg:p-12 hover-lift">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-[#241940] mb-4">Request a Consultation</h3>
                  <p className="text-gray-enhanced text-lg">
          Fill out the form below and we&apos;ll get back to you within 24 hours.
        </p>
      </div>
      
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-2xl text-green-700">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            Thank you! Your message has been sent successfully. We&apos;ll get back to you within 24 hours.
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl text-red-700">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
            </svg>
            {errorMessage}
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* First Name and Last Name Row */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
              First Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-500"
              placeholder="Enter your first name"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
              Last Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-500"
              placeholder="Enter your last name"
            />
          </div>
        </div>

        {/* Email and Phone Number Row */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-500"
              placeholder="Enter your email address"
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-500"
              placeholder="Enter your phone number"
            />
          </div>
        </div>

        {/* Company Name and Job Title Row */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="companyName" className="block text-sm font-semibold text-gray-700 mb-2">
              Company name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-500"
              placeholder="Enter your company name"
            />
          </div>
          <div>
            <label htmlFor="jobTitle" className="block text-sm font-semibold text-gray-700 mb-2">
              Job Title<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-500"
              placeholder="Enter your job title"
            />
          </div>
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
            How can we help?<span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors bg-gray-50 focus:bg-white resize-none text-gray-900 placeholder-gray-500"
            placeholder="Tell us about your cyber security requirements..."
          ></textarea>
        </div>

        {/* reCAPTCHA Placeholder */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-2 p-4 border border-gray-300 rounded-xl bg-gray-50">
            <input
              type="checkbox"
              id="recaptcha"
              required
              className="w-5 h-5 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500"
            />
            <label htmlFor="recaptcha" className="text-sm text-gray-700">
              I&apos;m not a robot
            </label>
            <div className="text-xs text-gray-500 ml-auto">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4 px-8 rounded-xl font-semibold text-white transition-all duration-300 transform ${
              isSubmitting
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 hover:scale-[1.02] active:scale-[0.98]'
            } shadow-xl hover:shadow-2xl`}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <svg className="w-5 h-5 mr-2 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                </svg>
                Submitting...
              </div>
            ) : (
              'Submit'
            )}
          </button>
        </div>
      </form>

      {/* Contact Information */}
      <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-cyan-50 border border-cyan-200 rounded-2xl">
        <p className="text-center text-gray-600">
          Having trouble with the form? Contact us directly at{" "}
          <a href="mailto:support.sbmtech@sbmtechpro.com" className="text-cyan-600 hover:text-cyan-700 font-semibold">
          support.sbmtech@sbmtechpro.com
          </a>
          {" "}or call{" "}
          <a href="tel:+18444383422" className="text-cyan-600 hover:text-cyan-700 font-semibold">
          +1 (844) 438-3422
          </a>
        </p>
      </div>
    </div>
  );
} 