import Image from "next/image";
import Link from "next/link";
import PenetrationTestingServiceCard from "@/components/PenetrationTestingServiceCard";
import type { Metadata } from "next";
import ProcessSection from "@/components/ProcessSection";

export const metadata: Metadata = {
  title: "Penetration Testing Services | SBM Tech",
  description: "Assess the security of your organisation's network from an internal and external perspective by completing a penetration test with SBM Tech's highly certified and experienced offensive security experts.",
  keywords: "penetration testing, pen testing, security testing, vulnerability assessment, ethical hacking, red team, CREST certified",
};

export default function PenetrationTestingServices() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white py-24 overflow-hidden min-h-screen flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/penetration-testing-banner.webp"
            alt="Penetration Testing Services Background"
            fill
            className="object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2d1b69]/80 via-[#241940]/70 to-[#1e1537]/80"></div>
        </div>

        {/* Floating Security Icons */}
        <div className="absolute inset-0 overflow-hidden z-20">
          <div className="absolute top-20 left-10 w-8 h-8 text-cyan-400/50 animate-pulse">
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z"/></svg>
          </div>
          <div className="absolute top-40 right-20 w-6 h-6 text-purple-400/50 animate-bounce" style={{animationDelay: '1s'}}>
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.1 16,12.7V16.2C16,16.8 15.4,17.3 14.8,17.3H9.2C8.6,17.3 8,16.8 8,16.2V12.7C8,12.1 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7Z"/></svg>
          </div>
          <div className="absolute bottom-20 left-1/4 w-7 h-7 text-blue-400/50 animate-pulse" style={{animationDelay: '2s'}}>
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M21 16.5C21 16.88 20.79 17.21 20.47 17.38L12.57 21.82C12.41 21.94 12.21 22 12 22S11.59 21.94 11.43 21.82L3.53 17.38C3.21 17.21 3 16.88 3 16.5V7.5C3 7.12 3.21 6.79 3.53 6.62L11.43 2.18C11.59 2.06 11.79 2 12 2S12.41 2.06 12.57 2.18L20.47 6.62C20.79 6.79 21 7.12 21 7.5V16.5Z"/></svg>
          </div>
          <div className="absolute top-60 left-1/2 w-5 h-5 text-green-400/50 animate-pulse" style={{animationDelay: '3s'}}>
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg>
          </div>
          <div className="absolute bottom-40 right-1/4 w-6 h-6 text-indigo-400/50 animate-bounce" style={{animationDelay: '4s'}}>
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17M2 12L12 17L22 12"/></svg>
          </div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-30 w-full">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent leading-tight">
              Penetration Testing Services
            </h1>
            <p className="text-xl mb-8 text-gray-300 leading-relaxed">
              Assess the security of your organisation&apos;s network from an internal and external perspective by completing a penetration test with SBM Tech&apos;s highly certified and experienced offensive security experts.
            </p>
            <div className="flex gap-6 justify-center flex-wrap">
              <Link href="/contact-us">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-xl">
                  Speak to our Experts
                </button>
              </Link>
              <Link href="/penetration-testing#services">
                <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-[#241940] px-8 py-4 rounded-full font-semibold transition-all">
                  View Services
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testing and Securing Your Most Critical Assets Section */}
      <section className="py-24 bg-subtle-cyan relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-cyan-100/25 to-blue-100/25 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-purple-100/20 to-indigo-100/20 rounded-full blur-2xl"></div>
          <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-gradient-to-br from-teal-100/30 to-green-100/30 rounded-full blur-xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
          
          {/* Penetration testing themed floating elements */}
          <div className="absolute top-32 left-1/4 w-6 h-6 text-cyan-300/40 animate-bounce" style={{animationDelay: '1s'}}>
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z"/></svg>
          </div>
          <div className="absolute bottom-32 right-1/3 w-5 h-5 text-blue-300/35 animate-pulse" style={{animationDelay: '2s'}}>
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M23.12 9.91L20.15 7.82L21.23 4.54L17.96 5.6L15.86 2.63L12.97 4.86L10.07 2.63L7.97 5.6L4.7 4.54L5.78 7.82L2.81 9.91L5.04 12.8L2.81 15.69L5.78 17.78L4.7 21.06L7.97 20L10.07 22.97L12.97 20.74L15.86 22.97L17.96 20L21.23 21.06L20.15 17.78L23.12 15.69L20.89 12.8L23.12 9.91Z"/></svg>
          </div>
          <div className="absolute top-2/3 left-1/6 w-4 h-4 text-purple-300/30 animate-bounce" style={{animationDelay: '2.5s'}}>
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M21 16.5C21 16.88 20.79 17.21 20.47 17.38L12.57 21.82C12.41 21.94 12.21 22 12 22S11.59 21.94 11.43 21.82L3.53 17.38C3.21 17.21 3 16.88 3 16.5V7.5C3 7.12 3.21 6.79 3.53 6.62L11.43 2.18C11.59 2.06 11.79 2 12 2S12.41 2.06 12.57 2.18L20.47 6.62C20.79 6.79 21 7.12 21 7.5V16.5Z"/></svg>
          </div>
          
          {/* Abstract geometric shapes for visual texture */}
          <div className="absolute top-40 right-1/6 w-3 h-3 bg-cyan-300/50 rounded-full animate-pulse" style={{animationDelay: '1.8s'}}></div>
          <div className="absolute bottom-48 left-1/3 w-5 h-5 border border-blue-300/40 rotate-45 animate-spin" style={{animationDuration: '16s'}}></div>
          <div className="absolute top-1/4 right-1/5 w-2 h-2 bg-purple-300/45 rounded-full animate-bounce" style={{animationDelay: '2.2s'}}></div>
          <div className="absolute bottom-60 left-1/5 w-4 h-4 border border-cyan-300/35 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
          
          {/* Additional floating elements for depth */}
          <div className="absolute top-56 right-2/3 w-1.5 h-1.5 bg-blue-300/40 rounded-full animate-pulse" style={{animationDelay: '2.8s'}}></div>
          <div className="absolute bottom-72 right-1/4 w-2.5 h-2.5 bg-indigo-300/30 rounded-full animate-bounce" style={{animationDelay: '1.2s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-full text-sm font-semibold text-cyan-700 mb-4">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  Advanced Security Testing
                </div>
                <h2 className="text-5xl lg:text-6xl font-bold text-[#241940] leading-tight">
                  Testing and Securing Your Most <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Critical Assets</span>
                </h2>
              </div>
              <div className="text-lg text-gray-600 space-y-6 leading-relaxed">
                <p className="text-xl text-gray-700">
                  Our penetration testing services help Critical National Infrastructure (CNI) organisations identify, test and secure their most critical IT and OT systems.
                </p>
                <p>
                  All our engagements are tailored to provide a realistic simulation of how bad actors may target your organisation, while considering any specialist systems or equipment you may use.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative group">
                <Image 
                  src="/images/penetration-testing-team.jpg" 
                  alt="Penetration Testing Team" 
                  width={800}
                  height={600}
                  className="rounded-3xl shadow-2xl group-hover:shadow-3xl transition-shadow duration-500" 
                />
                {/* Enhanced Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-2xl rotate-12 group-hover:rotate-[18deg] transition-transform duration-500"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-purple-400/30 to-indigo-500/30 rounded-2xl rotate-[-12deg] group-hover:rotate-[-18deg] transition-transform duration-500"></div>
                {/* Modern Grid Pattern */}
                <div className="absolute -top-10 -left-10 text-gray-200/40">
                  <svg width="120" height="120" viewBox="0 0 120 120" fill="currentColor">
                    <defs>
                      <pattern id="modernGrid" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                        <circle cx="3" cy="3" r="2" fill="currentColor"/>
                      </pattern>
                    </defs>
                    <rect width="120" height="120" fill="url(#modernGrid)"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-cyan-100/20 to-blue-100/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-br from-purple-100/20 to-indigo-100/20 rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-full text-sm font-semibold text-cyan-700 mb-4">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Comprehensive Testing Solutions
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-[#241940] mb-6 leading-tight">
              Our <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Penetration Testing</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We listen to our clients and seek to understand the unique business drivers and objectives of the organisation and the individuals within them. This allows us to develop the most appropriate approach, framework and team which culminates in an outcome driven approach that goes beyond just delivering the framework and builds a trusted relationship.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <PenetrationTestingServiceCard
              title="Wireless Penetration Testing"
              description="Assess the security of your wireless networks and identify vulnerabilities in WiFi infrastructure, configurations, and protocols."
              href="/wireless-penetration-testing"
            />
            
            <PenetrationTestingServiceCard
              title="Red Team Assessment"
              description="Simulate real-world advanced persistent threats to test your organisation's detection and response capabilities comprehensively."
              href="/red-team-assessment"
            />
            
            <PenetrationTestingServiceCard
              title="Open Source Intelligence"
              description="Gather and analyse publicly available information to understand your organisation's external threat exposure and attack surface."
              href="/open-source-intelligence-osint"
            />
            
            <PenetrationTestingServiceCard
              title="Phishing Assessments"
              description="Test your employees' security awareness and your organisation's susceptibility to social engineering attacks through targeted phishing campaigns."
              href="/phishing-assessments"
            />
            
            <PenetrationTestingServiceCard
              title="Social Engineering Testing"
              description="Evaluate your organisation's human security controls through professional social engineering techniques and scenarios."
              href="/social-engineering-testing"
            />
            
            <PenetrationTestingServiceCard
              title="Mobile Application Penetration Testing"
              description="Secure your mobile applications by identifying vulnerabilities in iOS and Android applications across all layers of the technology stack."
              href="/mobile-application-penetration-testing"
            />
            
            <PenetrationTestingServiceCard
              title="Web Application Testing"
              description="Identify security vulnerabilities in your web applications, APIs, and web services to prevent data breaches and attacks."
              href="/web-application-testing"
            />
            
            <PenetrationTestingServiceCard
              title="Infrastructure Penetration Testing"
              description="Test your network infrastructure, servers, and systems to identify vulnerabilities that could be exploited by attackers."
              href="/infrastructure-penetration-testing"
            />
            
            <PenetrationTestingServiceCard
              title="Cloud Infrastructure Assessments"
              description="Evaluate the security posture of your cloud environments across AWS, Azure, and Google Cloud Platform configurations."
              href="/cloud-infrastructure-assessments"
            />
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-[#241940] to-[#2d1b69] rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Test Your Security Defenses?</h3>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Let our certified penetration testing experts identify vulnerabilities before attackers do, and strengthen your security posture.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact-us">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-xl">
                  Speak to our Experts
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-cyan-100/30 to-blue-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-purple-100/20 to-indigo-100/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20 space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-full text-sm font-semibold text-cyan-700 mb-4">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              Key Advantages
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-[#241940] mb-6 leading-tight">
              The <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Benefits</span> of our Cyber Security Frameworks
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Partner with industry-leading penetration testing experts to identify vulnerabilities and strengthen your security posture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group relative">
              <div className="h-full bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 p-8 text-center border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-[#241940] to-[#2d1b69] rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#241940] mb-6 group-hover:text-cyan-700 transition-colors duration-300">A Complete Evaluation of Your Infrastructure</h3>
                <p className="text-gray-600 leading-relaxed">
                  The assessment provides a true validation of your current defensive practices and guidance on improving detection and response capabilities.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="h-full bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 p-8 text-center border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-[#2d1b69] to-[#1e1537] rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 16.5C21 16.88 20.79 17.21 20.47 17.38L12.57 21.82C12.41 21.94 12.21 22 12 22S11.59 21.94 11.43 21.82L3.53 17.38C3.21 17.21 3 16.88 3 16.5V7.5C3 7.12 3.21 6.79 3.53 6.62L11.43 2.18C11.59 2.06 11.79 2 12 2S12.41 2.06 12.57 2.18L20.47 6.62C20.79 6.79 21 7.12 21 7.5V16.5Z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#241940] mb-6 group-hover:text-cyan-700 transition-colors duration-300">A Modular, Tailored Approach</h3>
                <p className="text-gray-600 leading-relaxed">
                  SBM Tech doesn&apos;t have a one-size-fits-all approach to testing, and will customise the engagement dependent on your specific objectives (e.g. active directory assessment, password reviews, firewall reviews, device reviews).
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="h-full bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 p-8 text-center border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-[#1e1537] to-[#241940] rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#241940] mb-6 group-hover:text-cyan-700 transition-colors duration-300">Targeted and Prioritised Remediation Actions</h3>
                <p className="text-gray-600 leading-relaxed">
                  Increase your defensive capabilities simply and at pace with the guidance of our penetration testing experts.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="h-full bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 p-8 text-center border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-[#241940] to-[#1e1537] rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.1 16,12.7V16.2C16,16.8 15.4,17.3 14.8,17.3H9.2C8.6,17.3 8,16.8 8,16.2V12.7C8,12.1 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7Z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#241940] mb-6 group-hover:text-cyan-700 transition-colors duration-300">Improve Your Security Investment</h3>
                <p className="text-gray-600 leading-relaxed">
                  Validate your current software configuration and work with SBM Tech to optimise your configuration and streamline maintenance for the highest level of protection and best return on investment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Challenges Addressed Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#241940] mb-6">
                Key Challenges Addressed
              </h2>
              <div className="space-y-6 text-lg">
                <p className="text-xl text-gray-700">
                  Organisations that don&apos;t regularly perform penetration testing often face challenges in protecting sensitive data and systems, maintaining compliance and customer trust, and reducing the risk of a successful cyber attack.
                </p>
                <p className="text-gray-600">
                  Penetration testing – or pen testing – helps organisations identify vulnerabilities that could be exploited by an attacker to access sensitive data, such as customer information or financial records. These vulnerabilities can also result in financial losses for an organisation, either through direct financial theft or through the costs of responding to and recovering from a successful cyber attack.
                </p>
                <p className="text-gray-600">
                  Pen testing can help organisations identify and address vulnerabilities before an attacker can exploit them, thereby reducing risk and securing their business. This also supports compliance through helping an organisation meet regulatory requirements by relevant industry bodies.
                </p>
              </div>
            </div>
            {/* Right Content - Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8">
                <div className="relative h-80 bg-gradient-to-br from-[#241940] to-[#2d1b69] rounded-xl overflow-hidden">
                  <Image 
                    src="/images/key-challenges.jpg" 
                    alt="Penetration Testing Challenges" 
                    fill
                    className="object-cover" 
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8">
                <div className="relative h-80 bg-gradient-to-br from-[#241940] to-[#2d1b69] rounded-xl overflow-hidden">
                  <Image 
                    src="/images/securing.avif" 
                    alt="How Penetration Testing Works" 
                    fill
                    className="object-cover" 
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#241940] mb-6">How it Works</h2>
              <div className="space-y-4 text-lg text-gray-600 mb-8 leading-relaxed">
                <p>
                  SBM Tech&apos;s approach to penetration testing incorporates advanced remote testing solutions.
                </p>
                <p>
                  As a result, there&apos;s no need for SBM Tech personnel to be on-site unless specifically requested or desired by the customer, which can reduce potential overheads for the client as there is no requirement for dedicated space and support for on-site personnel.
                </p>
                <p>
                  Our penetration testing team consists of ex-sysadmins, developers, network engineers and system architects who bring years of experience developing and securing environments.
                </p>
                <p>
                  This ensures our assessment considers all aspects of your organisation&apos;s infrastructure, incorporates lesser-known attacks and vulnerabilities, and considers business-impact of a potential breach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* Penetration Testing Process Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-cyan-100/20 to-blue-100/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-purple-100/20 to-indigo-100/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-full text-sm font-semibold text-cyan-700 mb-4">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Our Methodology
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-[#241940] leading-tight">
              Penetration Testing <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              All our engagements are tailored to support the specific requirements and objectives of your organisation. This generally aligns with the following process:
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                title: "Scoping",
                content: "To initiate the project, SBM Tech will work with key stakeholders in your organisation to understand your needs. During this phase, our consultants will establish the scope and timescale of the engagement, contact any of your third parties and key contacts, and ensure all legal aspects are covered."
              },
              {
                title: "Assessment",
                content: "Once the scope is agreed, we will conduct the assessment while following industry recognised practices such as the Council of Registered Ethical Security Testers (CREST) and Open Source Intelligence (OSINT). If SBM Tech identify any critical issues, we will inform you immediately. The assessment phase can be completed on your premises or remotely, dependent on your requirements and the technical components and environment being assessed. Our tests are open and transparent and you are able to watch our findings in real time on our secure portal."
              },
              {
                title: "Reporting",
                content: "Once the test has concluded, SBM Tech will compile all collated evidence from the test and develop a report which includes full details of the assessment, the findings and specific remedial guidance to address the findings. Our reports are written in easy-to-understand language that can be used by both executive and/ or technical audiences. We can also provide redacted content relevant to your clients (if requested)."
              },
              {
                title: "Implementation",
                content: "SBM Tech will subsequently work with your organisation to remediate any vulnerabilities or issues identified. Our consultants will recommend and implement vulnerability management solutions, which can support you with ongoing identification, risk quantification and remediation of vulnerabilities. We are vendor neutral as an organisation but have a vast level of experience in many industry and open-source products to suit individual client requirements. We also have a team of engineers that can support remedial if additional resource or expertise is required."
              },
              {
                title: "Management",
                content: "Following implementation, SBM Tech has a suite of additional services to identify threats and vulnerabilities on a continuous basis. For example, providing recurring penetration tests on a regular basis or our vulnerability management service."
              }
            ].map((item, index) => (
              <details key={index} className="group bg-white rounded-2xl border border-gray-200 hover:border-cyan-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <summary className="px-8 py-6 cursor-pointer font-semibold text-lg text-[#241940] hover:text-cyan-600 transition-colors duration-300 flex items-center justify-between list-none">
                  <span>{item.title}</span>
                  <svg className="w-6 h-6 text-cyan-600 transform group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-8 pb-6 text-gray-600 leading-relaxed text-lg border-t border-gray-100 pt-6 mt-2">
                  {item.content}
                </div>
              </details>
            ))}
          </div>
          
          {/* Additional CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex flex-col items-center space-y-4 bg-gradient-to-r from-gray-50 to-cyan-50 rounded-2xl p-8 border border-cyan-100">
              <h3 className="text-2xl font-bold text-[#241940]">Still Have Questions?</h3>
              <p className="text-gray-600 text-center max-w-md">
                Our managed security experts are ready to discuss your specific requirements and answer any additional questions.
              </p>
              <Link href="/contact-us">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-xl">
                  Contact Our Team
                </button>
              </Link>
            </div>
          </div>
        </div>
        
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#2d1b69] via-[#241940] to-[#1e1537] text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute right-0 top-0 w-full h-full">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <pattern id="speakGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#speakGrid)" />
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
                Speak to our Penetration Testing Team
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Identify vulnerabilities before attackers do. Our certified penetration testing experts will help you strengthen your security posture and protect your critical assets.
              </p>
              <Link href="/contact-us">
                <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-xl">
                  Speak to us
                </button>
              </Link>
            </div>

            {/* Right Content - Professional Image */}
            <div className="relative h-full min-h-[500px]">
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <Image 
                  src="/images/businessImage.png" 
                  alt="Penetration Testing Consultation" 
                  fill
                  className="object-cover"
                />
                {/* Additional subtle overlay for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#241940]/30 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
