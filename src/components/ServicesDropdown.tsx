'use client';

import { useState } from 'react';
import Link from 'next/link';

interface ServiceCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  color: string;
  services: {
    title: string;
    href: string;
  }[];
}

const serviceCategories: ServiceCategory[] = [
  {
    id: 'cyber-security-consultancy',
    title: 'Cyber Security Consultancy',
    icon: 'M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z',
    description: 'Our services cover on-premise, cloud and operational technology environments and can be leveraged to support transformation programmes or meet specific industry requirements.',
    color: 'blue',
    services: [
      { title: 'Cyber Security Audit', href: '/cyber-security-audit' },
      { title: 'Cyber Security Architecture', href: '/cyber-security-architecture' },
      { title: 'Cloud Security Posture Management', href: '/cloud-security-posture-management' },
      { title: 'Information Security Office as a Service (ISOS)', href: '/information-security-officer-as-a-service' },
      { title: 'NCSC Assured Services', href: '/ncsc-assured-services' },
      { title: 'Risk Assessment', href: '/cyber-security-risk-assessments' },
      { title: 'Risk Management', href: '/cyber-security-risk-management' },
      { title: 'Operational Technology Services', href: '/operational-technology' },
      { title: 'Endpoint Security Posture Assessment', href: '/endpoint-security-posture-assessment' }
    ]
  },
  {
    id: 'managed-security-services',
    title: 'Managed Security',
    icon: 'M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z',
    description: 'Secure your organisation 24/7 with the industry-leading expertise, methodologies, and cyber threat intelligence capabilities of a managed security services provider.',
    color: 'green',
    services: [
      { title: 'Managed Detection & Response', href: '/managed-detection-response' },
      { title: 'Vulnerability Management Services', href: '/vulnerability-management-services' },
      { title: 'Security Operations Centre', href: '/security-operations-centre' },
      { title: 'Cyber Threat Intelligence', href: '/cyber-threat-intelligence' },
      { title: 'SBM Defend', href: '/sbm-defend' },
      { title: 'Security Information and Event Management (SIEM)', href: '/managed-siem' },
      { title: 'Digital Forensics & Incident Response', href: '/digital-forensics-and-incident-response' }
    ]
  },
  {
    id: 'data-privacy',
    title: 'Data Privacy',
    icon: 'M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.1 16,12.7V16.2C16,16.8 15.4,17.3 14.8,17.3H9.2C8.6,17.3 8,16.8 8,16.2V12.7C8,12.1 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7Z',
    description: 'Keep pace with evolving regulatory and compliance demands and build trust in the personal data being used by your organisation.',
    color: 'purple',
    services: [
      { title: 'ISO 27701 Consultancy', href: '/iso-27701-consultancy' },
      { title: 'GDPR Gap Analysis', href: '/gdpr-gap-analysis' },
      { title: 'Data Privacy Maturity Framework', href: '/data-privacy-maturity-framework' },
      { title: 'ISO 27018 Consultancy', href: '/iso-27018-consultancy' },
      { title: 'Data Privacy Officer as a Service', href: '/dpo-as-a-service' },
      { title: 'Data Privacy Audit', href: '/data-privacy-audit' },
      { title: 'GDPR Data Mapping', href: '/gdpr-data-mapping' },
      { title: 'Data Privacy Consultancy', href: '/data-privacy-consultancy' },
      { title: 'Microsoft Purview', href: '/microsoft-purview' },
      { title: 'Cookie Consent Manager', href: '/cookie-consent-manager' },
      { title: 'Managed Data Loss Prevention', href: '/managed-data-loss-prevention' }
    ]
  },
  {
    id: 'penetration-testing',
    title: 'Penetration Testing',
    icon: 'M21 16.5C21 16.88 20.79 17.21 20.47 17.38L12.57 21.82C12.41 21.94 12.21 22 12 22S11.59 21.94 11.43 21.82L3.53 17.38C3.21 17.21 3 16.88 3 16.5V7.5C3 7.12 3.21 6.79 3.53 6.62L11.43 2.18C11.59 2.06 11.79 2 12 2S12.41 2.06 12.57 2.18L20.47 6.62C20.79 6.79 21 7.12 21 7.5V16.5Z',
    description: 'Assess security from internal and external perspectives with our highly certified offensive security experts.',
    color: 'red',
    services: [
      { title: 'Wireless Penetration Testing', href: '/wireless-penetration-testing' },
      { title: 'Red Team Assessment', href: '/red-team-assessment' },
      { title: 'Open Source Intelligence', href: '/open-source-intelligence-osint' },
      { title: 'Phishing Assessments', href: '/phishing-assessments' },
      { title: 'Social Engineering Testing', href: '/social-engineering-testing' },
      { title: 'Mobile Application Penetration Testing', href: '/mobile-application-penetration-testing' },
      { title: 'Web Application Testing', href: '/web-application-testing' },
      { title: 'Infrastructure Penetration Testing', href: '/infrastructure-penetration-testing' },
      { title: 'Cloud Infrastructure Assessments', href: '/cloud-infrastructure-assessments' }
    ]
  }
];

const getColorClasses = (color: string) => {
  const colorMap = {
    blue: {
      bg: 'from-[#241940] to-[#2d1b69]',
      border: 'border-l-[#2d1b69]',
      text: 'text-[#241940]'
    },
    green: {
      bg: 'from-[#2d1b69] to-[#1e1537]',
      border: 'border-l-[#1e1537]',
      text: 'text-[#2d1b69]'
    },
    purple: {
      bg: 'from-[#1e1537] to-[#241940]',
      border: 'border-l-[#241940]',
      text: 'text-[#1e1537]'
    },
    red: {
      bg: 'from-[#241940] to-[#1e1537]',
      border: 'border-l-[#1e1537]',
      text: 'text-[#241940]'
    }
  };
  return colorMap[color as keyof typeof colorMap] || colorMap.blue;
};

interface ServicesDropdownProps {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onLinkClick?: () => void;
}

export default function ServicesDropdown({ isOpen, onMouseEnter, onMouseLeave, onLinkClick }: ServicesDropdownProps) {
  const [activeCategory, setActiveCategory] = useState<string>('cyber-security-consultancy');

  if (!isOpen) return null;

  const activeCategoryData = serviceCategories.find(cat => cat.id === activeCategory);

  const handleLinkClick = () => {
    if (onLinkClick) {
      onLinkClick();
    }
  };

  return (
    <div 
      className="absolute top-full left-0 transform -translate-x-1/2 mt-1 w-[800px] bg-gradient-to-br from-[#2d1b69] via-[#241940] to-[#1e1537] rounded-xl shadow-2xl z-[9999] border border-cyan-400/30"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex">
        {/* Left Sidebar - Categories */}
        <div className="w-80 bg-gradient-to-br from-[#241940]/80 to-[#2d1b69]/80 rounded-l-xl p-6 border-r border-cyan-400/20">
          <div className="space-y-2">
            {serviceCategories.map((category) => {
              const colorClasses = getColorClasses(category.color);
              const isActive = activeCategory === category.id;
              
              return (
                <div
                  key={category.id}
                  className={`group cursor-pointer transition-all duration-200 ${
                    isActive ? `bg-[#2d1b69]/60 shadow-sm border-l-4 ${colorClasses.border}` : 'hover:bg-[#2d1b69]/40 border-l-4 border-transparent hover:border-l-cyan-400/50'
                  } rounded-lg`}
                  onMouseEnter={() => setActiveCategory(category.id)}
                >
                  <div className="flex items-center space-x-3 p-4">
                    <div className={`w-10 h-10 bg-gradient-to-br ${colorClasses.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d={category.icon} />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-semibold text-white transition-colors ${isActive ? 'text-cyan-300' : 'group-hover:text-cyan-200'}`}>
                        {category.title}
                      </h3>
                    </div>
                    <svg 
                      className={`w-4 h-4 text-gray-300 transition-colors ${isActive ? 'text-cyan-300' : 'group-hover:text-cyan-200'}`} 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Panel - Services */}
        <div className="flex-1 p-8">
          {activeCategoryData && (
            <div>
              {/* Overview */}
              <div className="mb-6">
                <Link 
                  href={`/${activeCategoryData.id}`} 
                  className="inline-flex items-center text-xl font-bold text-white hover:text-cyan-300 transition-colors mb-3 group"
                  onClick={handleLinkClick}
                >
                  <span>{activeCategoryData.title} Overview</span>
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                  </svg>
                </Link>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {activeCategoryData.description}
                </p>
              </div>

              <hr className="mb-6 border-cyan-400/20" />

              {/* Services Grid */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                {activeCategoryData.services.map((service, index) => (
                  <div key={index} className="group">
                    <Link 
                      href={service.href}
                      className="block py-2 px-3 rounded-lg hover:bg-[#2d1b69]/30 transition-colors"
                      onClick={handleLinkClick}
                    >
                      <span className="text-sm text-gray-300 group-hover:text-white group-hover:font-medium transition-all">
                        {service.title}
                      </span>
                    </Link>
                  </div>
                ))}
              </div>

              {/* Footer Link */}
              <div className="mt-8 pt-6 border-t border-cyan-400/20">
                <Link 
                  href="/services" 
                  className="inline-flex items-center text-white hover:text-cyan-300 font-medium transition-colors group"
                  onClick={handleLinkClick}
                >
                  <span>Overview of all Services</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                  </svg>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 