'use client';

import { useEffect, useRef } from 'react';

export default function AccreditationTicker() {
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ticker = tickerRef.current;
    if (!ticker) return;

    let scrollAmount = 0;
    const scrollSpeed = 1;

    const scroll = () => {
      scrollAmount += scrollSpeed;
      ticker.style.transform = `translateX(-${scrollAmount}px)`;
      
      if (scrollAmount >= ticker.scrollWidth / 2) {
        scrollAmount = 0;
      }
    };

    const intervalId = setInterval(scroll, 20);
    return () => clearInterval(intervalId);
  }, []);

  const accreditations = [
    { name: "HIPAA", image: "/images/HIPAA.png" },
    { name: "ISO 27001", image: "/images/ISO-27001.png" },
    { name: "SOC 2", image: "/images/AICPA-SOC.jpg" },
    { name: "PCI DSS", image: "/images/PCI-DSS.png" },
    { name: "Cyber Security Maturity Model", image: "/images/cybersecurity-maturity-model.jpeg" },
    { name: "NIST", image: "/images/NIST.png" },
  ];

  return (
    <section className="py-12 bg-white border-t border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          <div className="w-1/4 text-gray-600 font-semibold text-lg">
            Recognised by Leading Accreditation and Awarding Bodies
          </div>
          <div className="w-px h-16 bg-gray-300 mx-8"></div>
          <div className="flex-1 overflow-hidden">
            <div
              ref={tickerRef}
              className="flex items-center space-x-12"
              style={{ width: 'calc(200% + 96px)' }}
            >
              {/* First set of logos */}
              {accreditations.map((accreditation, index) => (
                <div key={index} className="flex-shrink-0 h-16 flex items-center">
                  <div className="w-24 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <img src={accreditation.image} alt={accreditation.name} className="w-full h-full object-contain" />
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {accreditations.map((accreditation, index) => (
                <div key={`duplicate-${index}`} className="flex-shrink-0 h-16 flex items-center">
                  <div className="w-24 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <img src={accreditation.image} alt={accreditation.name} className="w-full h-full object-contain" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 