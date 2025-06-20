'use client';

import { useState } from 'react';
import Link from 'next/link';
import ServicesDropdown from './ServicesDropdown';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="relative z-50">
      {/* Top Bar */}
      <div className="bg-[#1a1329] text-white text-sm py-2 border-b border-purple-800/30">
        <div className="container mx-auto px-4 flex justify-end items-center space-x-6">
          <Link href="/24x7-incident-response" className="flex items-center space-x-2 hover:text-cyan-300 transition-colors group">
            <svg className="w-4 h-4 text-yellow-400 group-hover:text-yellow-300 transition-colors" fill="currentColor" viewBox="0 0 16 15">
              <path d="M0.84375 13L8 0.5L8.84375 2.03125L15.125 13L16 14.5H0L0.84375 13ZM13.4062 13L8 3.53125L2.5625 13H13.4062ZM7.25 6H8.75V9.5H7.25V6ZM8.75 12H7.25V10.5H8.75V12Z"/>
            </svg>
            <span className="font-medium">24/7 Incident Response</span>
          </Link>
          
          <div className="relative">
            <button className="flex items-center space-x-1 px-3 py-1 rounded border border-gray-600 hover:border-gray-500 transition-colors">
              <span className="font-medium">US</span>
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 8 4">
                <path d="M0 4H8L4 0L0 4Z"/>
              </svg>
            </button>
          </div>
          
          <Link href="tel:+443303110940" className="flex items-center space-x-2 hover:text-cyan-300 transition-colors group">
            <svg className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300 transition-colors" fill="currentColor" viewBox="0 0 16 17">
              <path d="M0 1.5L4.5 0.5L7 5L4.375 7.09375C5.5 9.25 7.25 11 9.40625 12.125L11.5 9.5L16 12L15 16.5H14C6.25 16.5 0 10.25 0 2.5V1.5Z"/>
            </svg>
            <span className="font-medium">+44 (0)3303 110 940</span>
          </Link>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-gradient-to-r from-[#2d1b69] via-[#241940] to-[#1e1537] shadow-xl relative z-40">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 top-0 w-96 h-full">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10 overflow-visible">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <span className="text-3xl font-extrabold bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:via-cyan-100 group-hover:to-white transition-all duration-300">
                    SBM
                  </span>
                  <span className="text-3xl font-extrabold text-cyan-400 group-hover:text-white transition-colors duration-300 ml-2">
                    Tech
                  </span>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></div>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {/* Services Dropdown */}
              <div className="relative group">
                <button 
                  className="flex items-center space-x-2 px-4 py-2 text-white hover:text-cyan-300 transition-colors font-medium"
                  onMouseEnter={() => setActiveDropdown('services')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span>Services</span>
                  <svg className="w-4 h-4 transform group-hover:rotate-180 transition-transform text-cyan-400" fill="currentColor" viewBox="0 0 8 4">
                    <path d="M0 4H8L4 0L0 4Z"/>
                  </svg>
                </button>
                
                <ServicesDropdown 
                  isOpen={activeDropdown === 'services'}
                  onMouseEnter={() => setActiveDropdown('services')}
                  onMouseLeave={() => setActiveDropdown(null)}
                />
              </div>

              {/* Other Navigation Items */}
              <Link href="/why-sbm-tech" className="px-4 py-2 text-white hover:text-cyan-300 transition-colors font-medium">
                Why SBM Tech?
              </Link>
              
              <Link href="/industries" className="px-4 py-2 text-white hover:text-cyan-300 transition-colors font-medium">
                Industries
              </Link>
              
              <Link href="/insights" className="px-4 py-2 text-white hover:text-cyan-300 transition-colors font-medium">
                Insights
              </Link>
              
              <Link href="/webinars-events" className="px-4 py-2 text-white hover:text-cyan-300 transition-colors font-medium">
                Webinars & Events
              </Link>

              {/* Contact Button */}
              <Link href="/contact-us" className="ml-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg">
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
                <Link href="/services" className="block text-white hover:text-cyan-300 py-2 font-medium">Services</Link>
                <Link href="/why-sbm-tech" className="block text-white hover:text-cyan-300 py-2 font-medium">Why SBM Tech?</Link>
                <Link href="/industries" className="block text-white hover:text-cyan-300 py-2 font-medium">Industries</Link>
                <Link href="/insights" className="block text-white hover:text-cyan-300 py-2 font-medium">Insights</Link>
                <Link href="/webinars-events" className="block text-white hover:text-cyan-300 py-2 font-medium">Webinars & Events</Link>
                <Link href="/contact-us" className="block bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-full text-center font-medium">
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

