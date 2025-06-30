'use client';

import { useState } from 'react';

interface Review {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  initial: string;
}

const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    position: "CISO",
    company: "TechCorp Industries",
    content: "SBM Tech's cybersecurity expertise transformed our security posture. Their comprehensive approach to threat detection and response has been invaluable. The team's dedication to staying ahead of emerging threats gives us confidence in our digital infrastructure.",
    rating: 5,
    initial: "S"
  },
  {
    id: 2,
    name: "David Chen",
    position: "IT Director", 
    company: "Financial Solutions Ltd",
    content: "Working with SBM Tech has been exceptional. Their managed security services provide 24/7 protection that our internal team couldn't match. The incident response times are impressive, and their expertise in compliance frameworks saved us months of work.",
    rating: 5,
    initial: "D"
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    position: "Security Manager",
    company: "Healthcare Systems",
    content: "The penetration testing services from SBM Tech revealed critical vulnerabilities we hadn't identified. Their detailed reports and remediation guidance helped us strengthen our defenses significantly. Highly recommend their security assessment services.",
    rating: 5,
    initial: "M"
  },
  {
    id: 4,
    name: "James Thompson",
    position: "CEO",
    company: "Manufacturing Plus",
    content: "SBM Tech's data privacy consulting helped us achieve GDPR compliance efficiently. Their team understood our business needs while ensuring regulatory requirements were met. The comprehensive policy framework they developed is outstanding.",
    rating: 5,
    initial: "J"
  },
  {
    id: 5,
    name: "Lisa Wang",
    position: "CTO",
    company: "E-commerce Hub",
    content: "The security training programs from SBM Tech significantly improved our team's cybersecurity awareness. Their experts made complex security concepts accessible, and the ongoing support has been fantastic. Our security incidents have dropped dramatically.",
    rating: 5,
    initial: "L"
  },
  {
    id: 6,
    name: "Robert Garcia",
    position: "Operations Director",
    company: "Energy Solutions",
    content: "SBM Tech's cloud security assessment identified numerous risks in our AWS environment. Their remediation plan was thorough and actionable. The ongoing monitoring services provide peace of mind that our critical infrastructure is protected.",
    rating: 5,
    initial: "R"
  }
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewsPerPage = 3;

  const nextReviews = () => {
    setCurrentIndex((prev) => 
      prev + reviewsPerPage >= REVIEWS.length ? 0 : prev + reviewsPerPage
    );
  };

  const prevReviews = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, REVIEWS.length - reviewsPerPage) : Math.max(0, prev - reviewsPerPage)
    );
  };

  const visibleReviews = REVIEWS.slice(currentIndex, currentIndex + reviewsPerPage);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#2d1b69] via-[#241940] to-[#1e1537] text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-cyan-100/10 to-blue-100/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-purple-100/10 to-indigo-100/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-br from-teal-100/10 to-blue-100/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Security Icons */}
        <div className="absolute top-32 right-16 w-6 h-6 text-cyan-300/20 animate-bounce" style={{animationDelay: '1s'}}>
          <svg fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z"/>
          </svg>
        </div>
        <div className="absolute bottom-32 left-20 w-5 h-5 text-blue-300/20 animate-pulse" style={{animationDelay: '3s'}}>
          <svg fill="currentColor" viewBox="0 0 24 24">
            <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.1 16,12.7V16.2C16,16.8 15.4,17.3 14.8,17.3H9.2C8.6,17.3 8,16.8 8,16.2V12.7C8,12.1 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7Z"/>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-4">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent leading-tight">
              We&apos;re Committed To Your Success
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              With the growing need for robust cybersecurity solutions, we&apos;re here to keep your business secure and ahead of potential threats. Focus on your business; we&apos;ll handle the cybersecurity.
            </p>
            {/* <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-xl">
              Hear From Our Customers
            </button> */}
          </div>

          {/* Right Content - Reviews */}
          <div className="lg:col-span-8 relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevReviews}
              className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all"
              disabled={currentIndex === 0}
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextReviews}
              className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all"
              disabled={currentIndex + reviewsPerPage >= REVIEWS.length}
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Reviews Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {visibleReviews.map((review, index) => (
                <div
                  key={review.id}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300 border border-white/20"
                >
                  {/* User Avatar */}
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {review.initial}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{review.name}</h4>
                      <p className="text-gray-300 text-sm">{review.position}</p>
                      <p className="text-cyan-300 text-sm">{review.company}</p>
                    </div>
                  </div>

                  {/* Review Content */}
                  <p className="text-gray-200 mb-4 leading-relaxed line-clamp-4">
                    {review.content}
                  </p>

                  {/* Star Rating */}
                  <div className="flex items-center">
                    {renderStars(review.rating)}
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.ceil(REVIEWS.length / reviewsPerPage) }, (_, dotIndex) => (
                <button
                  key={dotIndex}
                  onClick={() => setCurrentIndex(dotIndex * reviewsPerPage)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    Math.floor(currentIndex / reviewsPerPage) === dotIndex
                      ? 'bg-cyan-400'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 