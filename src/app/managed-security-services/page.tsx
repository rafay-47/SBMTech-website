import Image from "next/image";
import Link from "next/link";
import ManagedServiceCard from "@/components/ManagedServiceCard";
import type { Metadata } from "next";
import ProcessSection from "@/components/ProcessSection";

export const metadata: Metadata = {
  title: "Managed Security Services | SBM Tech",
  description: "Secure your organisation 24/7 with the industry-leading expertise, methodologies, and cyber threat intelligence capabilities of a managed security services provider.",
  keywords: "managed security services, MSSP, SOC, 24/7 monitoring, threat detection, incident response, vulnerability management",
};

export default function ManagedSecurityServices() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white py-24 overflow-hidden min-h-screen flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/managed-security-services-banner.webp"
            alt="Managed Security Services Background"
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
              Managed Security Services
            </h1>
            <p className="text-xl mb-8 text-gray-300 leading-relaxed">
              Secure your organisation 24/7 with the industry-leading expertise, methodologies, and cyber threat intelligence capabilities of a managed security services provider.
            </p>
            <div className="flex gap-6 justify-center flex-wrap">
              <Link href="/contact-us">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-xl">
                  Speak to our Experts
                </button>
              </Link>
              <Link href="/managed-security-services#services">
                <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-[#241940] px-8 py-4 rounded-full font-semibold transition-all">
                  View Services
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Managed Security Section */}
      <section className="py-24 bg-subtle-blue relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-36 h-36 bg-gradient-to-br from-blue-100/25 to-cyan-100/25 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-16 left-16 w-28 h-28 bg-gradient-to-br from-purple-100/20 to-indigo-100/20 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/4 w-22 h-22 bg-gradient-to-br from-teal-100/30 to-green-100/30 rounded-full blur-xl animate-pulse" style={{animationDelay: '1.8s'}}></div>
          
          {/* Managed security themed floating elements */}
          <div className="absolute top-32 right-1/4 w-6 h-6 text-blue-300/40 animate-bounce" style={{animationDelay: '1s'}}>
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z"/></svg>
          </div>
          <div className="absolute bottom-32 left-1/3 w-5 h-5 text-cyan-300/35 animate-pulse" style={{animationDelay: '2s'}}>
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9l-5.91 5.74L17.18 22 12 19.27 6.82 22l1.09-7.26L2 9l6.91-1.74L12 2z"/></svg>
          </div>
          <div className="absolute top-2/3 right-1/6 w-4 h-4 text-indigo-300/30 animate-bounce" style={{animationDelay: '2.5s'}}>
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"/></svg>
          </div>
          
          {/* Abstract shapes for depth */}
          <div className="absolute top-44 left-1/5 w-3 h-3 bg-blue-300/50 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute bottom-52 right-1/3 w-5 h-5 border border-cyan-300/40 rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
          <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-indigo-300/45 rounded-full animate-bounce" style={{animationDelay: '2.2s'}}></div>
          <div className="absolute bottom-2/3 right-1/5 w-6 h-6 border border-blue-300/30 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-full text-sm font-semibold text-cyan-700 mb-4">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  Comprehensive Protection
                </div>
                <h2 className="text-5xl lg:text-6xl font-bold text-[#241940] leading-tight">
                  What is <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Managed Security</span>?
                </h2>
              </div>
              <div className="text-lg text-gray-600 space-y-6 leading-relaxed">
                <p className="text-xl text-gray-700">
                  Managed security services (MSS) support you with a comprehensive solution to address and navigate the ever-evolving landscape of cyber security threats facing your organisation.
                </p>
                <p>
                  Our expert managed security service providers (MSSPs) take on the complexities of security operations like monitoring systems for suspicious activity, managing security tools and conducting regular security assessments.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative group">
                <Image 
                  src="/images/managed-security.jpg" 
                  alt="Managed Security Services" 
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

      {/* Securing Your Organisation End-to-End Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-cyan-100/20 to-blue-100/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-br from-purple-100/20 to-indigo-100/20 rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative group">
                <Image 
                  src="/images/securing.avif" 
                  alt="Security Operations Team" 
                  width={800}
                  height={600}
                  className="rounded-3xl shadow-2xl group-hover:shadow-3xl transition-shadow duration-500" 
                />
                {/* Enhanced Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-2xl rotate-12 group-hover:rotate-[18deg] transition-transform duration-500"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-purple-400/30 to-indigo-500/30 rounded-2xl rotate-[-12deg] group-hover:rotate-[-18deg] transition-transform duration-500"></div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-full text-sm font-semibold text-cyan-700 mb-4">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  24/7 Protection
                </div>
                <h2 className="text-5xl lg:text-6xl font-bold text-[#241940] leading-tight">
                  Securing Your Organisation <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">End-to-End</span>
                </h2>
              </div>
              <div className="text-lg text-gray-600 space-y-6 leading-relaxed">
                <p className="text-xl text-gray-700">
                  Our managed security services are trusted by the world&apos;s leading Critical National Infrastructure (CNI) organisations to defend them against threats. Delivered from our 24/7 Security Operations Centre (SOC), our services help them enhance their defensive capabilities and stay ahead of the latest threats.
                </p>
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-2xl p-6">
                  <h4 className="text-xl font-semibold text-[#241940] mb-3">What is an MSS Provider?</h4>
                  <p>
                    Managed security services (MSS) provide you with a comprehensive solution to address cyber threats. With our MSS, you can rest assured knowing that your network is constantly monitored for any potential threats, vulnerabilities, or attacks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
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
              Comprehensive Security Solutions
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-[#241940] mb-6 leading-tight">
              Our <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Managed Security</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our comprehensive managed security services provide 24/7 protection with expert monitoring, threat detection, and incident response capabilities.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
            <ManagedServiceCard
              title="Managed Detection & Response"
              description="Secure your organisation&apos;s cloud environments and safeguard users, devices, and data."
              href="/managed-detection-response"
            />
            
            <ManagedServiceCard
              title="Vulnerability Management Services"
              description="Gain a thorough, comprehensive understanding of your organisation&apos;s overall security posture, with detailed predictions of where an attack is most likely to take place."
              href="/vulnerability-management-services"
            />
            
            <ManagedServiceCard
              title="Security Operations Centre"
              description="Scale your organisation&apos;s security operations with the threat detection, cyber intelligence, and incident response capabilities of a hybrid or fully managed SOC."
              href="/security-operations-centre"
            />
            
            <ManagedServiceCard
              title="Cyber Threat Intelligence"
              description="Enhance your defensive security capabilities through the use of detailed, strategic threat intelligence about potential cyber attacks."
              href="/cyber-threat-intelligence"
            />
            
            <ManagedServiceCard
              title="Cybiquity Defend"
              description="SBM Tech&apos;s unified, threat-informed defence platform. Gain better threat visibility and increase defence capabilities within your managed security service."
              href="/cybiquity-defend"
            />
            
            <ManagedServiceCard
              title="Security Information and Event Management (SIEM)"
              description="Harness industry leading technology to identify security threats across environments of any size and complexity."
              href="/managed-siem"
            />
            
            <ManagedServiceCard
              title="Digital Forensics & Incident Response"
              description="Investigate, remediate, and contain cyber security incidents to minimise the potential impact of a breach on your organisation."
              href="/digital-forensics-and-incident-response"
            />
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-[#241940] to-[#2d1b69] rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Enhance Your Security Operations?</h3>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Let our 24/7 SOC team monitor, detect, and respond to threats in your environment while you focus on your business.
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
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
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
              The <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Benefits</span> of our Managed Security Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Partner with industry-leading experts to enhance your security operations and achieve comprehensive protection.
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
                <h3 className="text-2xl font-bold text-[#241940] mb-6 group-hover:text-cyan-700 transition-colors duration-300">Instant Response Capabilities</h3>
                <p className="text-gray-600 leading-relaxed">
                  Detect, respond and protect your organisations from cyber security threats in your environment quickly and effectively.
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
                <h3 className="text-2xl font-bold text-[#241940] mb-6 group-hover:text-cyan-700 transition-colors duration-300">Trusted Security Experts</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our team has extensive experience working with organisations in highly regulated sectors and hold dozens of certifications from leading industry bodies.
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
                <h3 className="text-2xl font-bold text-[#241940] mb-6 group-hover:text-cyan-700 transition-colors duration-300">Reduce the Burden on Your Security Team</h3>
                <p className="text-gray-600 leading-relaxed">
                  Allow your in-house IT or security teams to focus on other initiatives, while our SOC team drive your security operations.
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
                <h3 className="text-2xl font-bold text-[#241940] mb-6 group-hover:text-cyan-700 transition-colors duration-300">Improved ROI</h3>
                <p className="text-gray-600 leading-relaxed">
                  We&apos;ll review and consolidate your tools and technology so you can derive more value from your existing security investment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* FAQs Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-cyan-100/20 to-blue-100/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-purple-100/20 to-indigo-100/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-full text-sm font-semibold text-cyan-700 mb-4">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Frequently Asked Questions
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-[#241940] leading-tight">
              Managed Security <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Services</span> FAQs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get answers to common questions about our managed security services and how they can protect your organisation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                question: "What Are MSS?",
                answer: "Managed security services (MSS) provide you with a comprehensive solution to address your cybersecurity threats. As an expert MSSP, we understand the complexities and challenges that businesses face in managing their own security operations. That's why we offer tailored services to help you navigate the ever-evolving landscape of cyber threats. With our managed security services, you can rest assured knowing that your network security is constantly monitored for any potential vulnerabilities or attacks."
              },
              {
                question: "Why Use SBM Tech&apos;s Managed Security Service?",
                answer: "Outsourcing not only saves you valuable time but also adds an extra layer of protection for your organisation. By leveraging our service, you can focus on what matters most – growing your business – while leaving the intricate task of protecting your information assets in capable hands, including firewall management and data loss prevention."
              },
              {
                question: "Why Partner with an MSSP?",
                answer: "Partnering with an MSSP offers an efficient and cost-effective solution to maintaining and strengthening your cyber presence. MSSPs can provide you with necessary expertise, advanced technologies, and enhanced detection and response capabilities where you may have an internal skills or resource gap, such as intrusion detection systems and vulnerability management. MSSPs will take on responsibilities for your in-house teams, enabling them to focus on more important business initiatives."
              },
              {
                question: "How Do Managed Security Services Differ From Traditional Security Measures?",
                answer: "The main difference between MSS and traditional security measures from most providers is that, with managed security services, your security systems are continuously monitored. A team of expert analysts will be watching your networks 24/7; always on-call for support and guidance. This means any security issues can be quickly identified, investigated, and responded to before extensive damage occurs ensuring effective incident response."
              },
              {
                question: "How Does Threat Intelligence Enhance MSS?",
                answer: "Up-to-date threat intelligence is an essential feature of proactive defence strategies, allowing you to anticipate and understand the biggest risks to your organisation and sector. It supports steps in incident response, threat hunting, and aids informed decision making, so you can take the right actions ahead of threats."
              },
              {
                question: "What Are the Benefits of Co-managed SIEM?",
                answer: "Co-managed SIEM hosts many benefits, including optimised threat detection and reduced alert fatigue. Once in place, you have access to a comprehensive overview of your whole security, IT and OT landscape, and real-time analysis of user behaviour and network activity. Based on this insight and expert advice from the MSSP, you can easily analyse security events, reduce mean time to despond (MTTD), and refine your response processes by prioritising the most relevant and urgent security alerts."
              },
              {
                question: "How Do MSS Help With Compliance Requirements?",
                answer: "MSSPs offer a wide range of expert cyber professionals, including those that oversee compliance management and regulatory functions in your organisation. These can help you implement the required security controls and procedures, ensuring they are regularly reviewed and update when necessary, to ensure you remain compliant with all the relevant laws and regulations."
              }
            ].map((faq, index) => (
              <details key={index} className="group bg-white rounded-2xl border border-gray-200 hover:border-cyan-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <summary className="px-8 py-6 cursor-pointer font-semibold text-lg text-[#241940] hover:text-cyan-600 transition-colors duration-300 flex items-center justify-between list-none">
                  <span>{faq.question}</span>
                  <svg className="w-6 h-6 text-cyan-600 transform group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-8 pb-6 text-gray-600 leading-relaxed text-lg border-t border-gray-100 pt-6 mt-2">
                  {faq.answer}
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
                Speak to our Managed Security Team
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Enhance your organisation&apos;s security posture with 24/7 monitoring, threat detection, and incident response capabilities from our expert SOC team.
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
                  alt="Managed Security Services Consultation" 
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
