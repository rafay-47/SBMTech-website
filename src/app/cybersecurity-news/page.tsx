import { Metadata } from 'next';
import CyberSecurityNews from '@/components/CyberSecurityNews';

export const metadata: Metadata = {
  title: 'Cybersecurity News & CVE Updates | SBM Tech',
  description: 'Stay informed with the latest cybersecurity threats, vulnerabilities, and industry news from trusted sources around the globe. Get real-time CVE updates and security alerts.',
  keywords: 'cybersecurity news, CVE updates, security alerts, cyber threats, vulnerability updates, security news, data breaches, cyber attacks',
  openGraph: {
    title: 'Latest Cybersecurity News & CVE Updates',
    description: 'Stay informed with real-time cybersecurity news, threat intelligence, and vulnerability updates from trusted industry sources.',
    type: 'website',
  }
};

export default function CyberSecurityNewsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#2d1b69] via-[#241940] to-[#1e1537] text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-cyan-100/10 to-blue-100/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-purple-100/10 to-indigo-100/10 rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent leading-tight">
              Cybersecurity News & Intelligence
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Stay ahead of emerging threats with real-time cybersecurity news, CVE updates, and threat intelligence from trusted industry sources.
            </p>
            <div className="flex justify-center items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <span>Live Updates</span>
              </div>
              <div className="w-px h-4 bg-gray-500"></div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z"/>
                </svg>
                <span>Trusted Sources</span>
              </div>
              <div className="w-px h-4 bg-gray-500"></div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>Updated Every 5 Minutes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Content */}
      <CyberSecurityNews />

      {/* Additional Information Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#241940] mb-6">
              Why Stay Updated with Cybersecurity News?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Threat Awareness</h3>
                <p className="text-gray-600">Stay informed about emerging cyber threats and attack vectors targeting businesses like yours.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1M10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Vulnerability Updates</h3>
                <p className="text-gray-600">Get timely CVE updates and security patches to protect your systems from known vulnerabilities.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Industry Insights</h3>
                <p className="text-gray-600">Gain valuable insights into cybersecurity trends and best practices from industry experts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
