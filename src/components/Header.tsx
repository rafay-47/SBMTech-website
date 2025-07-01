'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ServicesDropdown from './ServicesDropdown';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsMobileServicesOpen(false); // Close services dropdown when mobile menu toggles
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  const closeDesktopDropdown = () => {
    setActiveDropdown(null);
  };

  const toggleMobileServices = () => {
    setIsMobileServicesOpen(!isMobileServicesOpen);
  };

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      {/* Top Bar */}
      <div className="text-white text-sm py-2 border-b border-white/10" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.8)'}}>
        <div className="container mx-auto px-4 flex justify-end items-center space-x-6">
          <svg className="w-4 h-4 text-yellow-400 group-hover:text-yellow-300 transition-colors drop-shadow-lg" fill="currentColor" viewBox="0 0 16 15">
            <path d="M0.84375 13L8 0.5L8.84375 2.03125L15.125 13L16 14.5H0L0.84375 13ZM13.4062 13L8 3.53125L2.5625 13H13.4062ZM7.25 6H8.75V9.5H7.25V6ZM8.75 12H7.25V10.5H8.75V12Z"/>
          </svg>
          <span className="font-medium">24/7 Incident Response</span>
          
          <div className="relative">
            <button className="flex items-center space-x-1 px-3 py-1 rounded border border-white/30 hover:border-white/50 transition-colors backdrop-blur-sm bg-black/20">
              <span className="font-medium">US</span>
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 8 4">
                <path d="M0 4H8L4 0L0 4Z"/>
              </svg>
            </button>
          </div>
          
          <Link href="tel:+18444383422	" className="flex items-center space-x-2 hover:text-cyan-300 transition-colors group">
            <svg className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300 transition-colors drop-shadow-lg" fill="currentColor" viewBox="0 0 16 17">
              <path d="M0 1.5L4.5 0.5L7 5L4.375 7.09375C5.5 9.25 7.25 11 9.40625 12.125L11.5 9.5L16 12L15 16.5H14C6.25 16.5 0 10.25 0 2.5V1.5Z"/>
            </svg>
            <span className="font-medium">+1 (844) 438-3422</span>
          </Link>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="absolute w-full z-40">

        <div className="container mx-auto px-4 relative z-10 overflow-visible" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.8)'}}>
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center group" onClick={closeMobileMenu}>
              <div className="relative drop-shadow-lg">
                <Image 
                  src="/images/company-logo.ico" 
                  alt="SBM Tech Logo" 
                  width={120} 
                  height={40}
                  className="transition-all duration-300 group-hover:scale-105"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {/* Services Dropdown */}
              <div className="relative group">
                <button 
                  className="flex items-center space-x-2 px-4 py-2 text-white hover:text-cyan-300 transition-colors font-medium focus-enhanced"
                  onMouseEnter={() => setActiveDropdown('services')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span>Services</span>
                  <svg className="w-4 h-4 transform group-hover:rotate-180 transition-transform text-cyan-400 drop-shadow-lg" fill="currentColor" viewBox="0 0 8 4">
                    <path d="M0 4H8L4 0L0 4Z"/>
                  </svg>
                </button>
                
                <ServicesDropdown 
                  isOpen={activeDropdown === 'services'}
                  onMouseEnter={() => setActiveDropdown('services')}
                  onMouseLeave={() => setActiveDropdown(null)}
                  onLinkClick={closeDesktopDropdown}
                />
              </div>

              {/* Other Navigation Items */}
              <Link href="/about-us" className="px-4 py-2 text-white hover:text-cyan-300 transition-colors font-medium focus-enhanced">
                Why SBM Tech?
              </Link>
              
              <Link href="/build-a-plan" className="relative ml-2 mr-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 py-2 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg backdrop-blur-sm border border-purple-400/20 group">
                <span className="relative z-10 flex items-center">
                  Build a Plan
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-indigo-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur-sm"></div>
              </Link>
              
              {/* <Link href="/industries" className="px-4 py-2 text-white hover:text-cyan-300 transition-colors font-medium">
                Industries
              </Link>
              
              <Link href="/insights" className="px-4 py-2 text-white hover:text-cyan-300 transition-colors font-medium">
                Insights
              </Link>
              
              <Link href="/webinars-events" className="px-4 py-2 text-white hover:text-cyan-300 transition-colors font-medium">
                Webinars & Events
              </Link> */}

              {/* Contact Button */}
              <Link href="/contact-us" className="ml-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg backdrop-blur-sm">
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden flex flex-col space-y-1 p-2"
              onClick={toggleMobileMenu}
            >
              <span className={`block w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-[#1a1329] rounded-lg mb-4 border border-purple-800/30">
              <div className="px-4 py-6 space-y-4">
                {/* Mobile Services Dropdown */}
                <div>
                  <button 
                    onClick={toggleMobileServices}
                    className="flex items-center justify-between w-full text-white hover:text-cyan-300 py-2 font-medium text-left"
                  >
                    <span>Services</span>
                    <svg 
                      className={`w-4 h-4 transform transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} 
                      fill="currentColor" 
                      viewBox="0 0 8 4"
                    >
                      <path d="M0 4H8L4 0L0 4Z"/>
                    </svg>
                  </button>
                  
                  {isMobileServicesOpen && (
                    <div className="mt-2 pl-4 space-y-2">
                      <Link href="/cyber-security-consultancy" onClick={closeMobileMenu} className="block text-gray-300 hover:text-cyan-300 py-1 text-sm">
                        Cyber Security Consultancy
                      </Link>
                      <Link href="/managed-security-services" onClick={closeMobileMenu} className="block text-gray-300 hover:text-cyan-300 py-1 text-sm">
                        Managed Security Services
                      </Link>
                      <Link href="/data-privacy" onClick={closeMobileMenu} className="block text-gray-300 hover:text-cyan-300 py-1 text-sm">
                        Data Privacy
                      </Link>
                      <Link href="/penetration-testing" onClick={closeMobileMenu} className="block text-gray-300 hover:text-cyan-300 py-1 text-sm">
                        Penetration Testing
                      </Link>
                      <Link href="/software-development" onClick={closeMobileMenu} className="block text-gray-300 hover:text-cyan-300 py-1 text-sm">
                        Software Development
                      </Link>
                      <Link href="/services" onClick={closeMobileMenu} className="block text-cyan-400 hover:text-cyan-300 py-1 text-sm font-medium">
                        All Services →
                      </Link>
                    </div>
                  )}
                </div>
                
                <Link href="/about-us" onClick={closeMobileMenu} className="block text-white hover:text-cyan-300 py-2 font-medium">
                  Why SBM Tech?
                </Link>
                <Link href="/build-a-plan" onClick={closeMobileMenu} className="block bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-4 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg border border-purple-400/20 my-2">
                  <div className="flex items-center justify-center">
                    Build a Plan
                  </div>
                </Link>
                {/* <Link href="/industries" onClick={closeMobileMenu} className="block text-white hover:text-cyan-300 py-2 font-medium">Industries</Link>
                <Link href="/insights" onClick={closeMobileMenu} className="block text-white hover:text-cyan-300 py-2 font-medium">Insights</Link>
                <Link href="/webinars-events" onClick={closeMobileMenu} className="block text-white hover:text-cyan-300 py-2 font-medium">Webinars & Events</Link> */}
                <Link href="/contact-us" onClick={closeMobileMenu} className="block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-full text-center font-medium">
                  Contact Us
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

