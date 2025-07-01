'use client';

import SecurityPlanCalculator from '@/components/SecurityPlanCalculator';
import Link from 'next/link';
import Image from 'next/image';

export default function BuildAPlan() {
  return (
    <>
      {/* Hero Section with Video Background */}
      <section className="relative text-white py-24 overflow-hidden min-h-screen flex items-center bg-pattern-dots">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/build-a-plan-banner.avif"
            alt="About SBM Tech Background"
            fill
            className="object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2d1b69]/80 via-[#241940]/70 to-[#1e1537]/80"></div>
        
          {/* Subtle dot pattern overlay */}
          <div className="absolute inset-0 bg-pattern-dots opacity-30"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-30 w-full">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent leading-tight">
              Build Your Security Plan
            </h1>
            <p className="text-xl mb-8 text-gray-300 leading-relaxed">
              Create a customized cybersecurity solution tailored to your business needs. 
              Get real-time pricing and expert recommendations with our interactive calculator.
            </p>
            <div className="flex gap-6 justify-center flex-wrap">
              <button 
                onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-xl"
              >
                Start Building Your Plan
              </button>
              <Link href="/contact-us">
                <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-[#241940] px-8 py-4 rounded-full font-semibold transition-all">
                  Talk to Expert
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-16 bg-subtle-gray relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-20 w-24 h-24 bg-gradient-to-br from-cyan-100/30 to-blue-100/30 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-100/20 to-indigo-100/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-green-100/25 to-teal-100/25 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#241940] mb-4">Security Plan Calculator</h2>
            <p className="text-xl text-gray-enhanced max-w-4xl mx-auto">
              Select the services that match your organization&apos;s needs and get instant pricing for your custom cybersecurity solution.
            </p>
          </div>

          <SecurityPlanCalculator />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#2d1b69] via-[#241940] to-[#1e1537] text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute right-0 top-0 w-full h-full">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <pattern id="ctaGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#ctaGrid)" />
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Get expert guidance on implementing your cybersecurity plan. Our specialists will help you 
            customize the solution to fit your specific requirements and budget.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <Link href="/contact-us">
              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-xl">
                Schedule Consultation
              </button>
            </Link>
            <Link href="/services">
              <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-[#241940] px-8 py-4 rounded-lg font-semibold transition-all">
                Explore All Services
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
