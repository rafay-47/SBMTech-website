import Image from "next/image";
import Link from "next/link";
import DataPrivacyServiceCard from "@/components/DataPrivacyServiceCard";
import type { Metadata } from "next";
import ProcessSection from "@/components/ProcessSection";

export const metadata: Metadata = {
  title: "Data Privacy Services | SBM Tech",
  description: "Keep pace with evolving regulatory and compliance demands and build trust in the personal data being used by your organisation with SBM Tech&apos;s data privacy services.",
  keywords: "data privacy services, GDPR compliance, ISO 27701, data protection officer, data privacy audit, GDPR gap analysis",
};

export default function DataPrivacyServices() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white py-24 overflow-hidden min-h-screen flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/data-privacy-banner.webp"
            alt="Data Privacy Services Background"
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
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent h-[4.5rem]">
              Data Privacy Services
            </h1>
            <p className="text-xl mb-8 text-gray-300 leading-relaxed">
              Keep pace with evolving regulatory and compliance demands and build trust in the personal data being used by your organisation with SBM Tech&apos;s data privacy services.
            </p>
            <div className="flex gap-6 justify-center flex-wrap">
              <Link href="/contact-us">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-xl">
                  Speak to our Experts
                </button>
              </Link>
              <Link href="/data-privacy#services">
                <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-[#241940] px-8 py-4 rounded-full font-semibold transition-all">
                  View Services
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Closing the Skills Gap Section */}
      <section className="py-24 bg-subtle-purple relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-purple-100/25 to-indigo-100/25 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-16 left-16 w-32 h-32 bg-gradient-to-br from-cyan-100/20 to-blue-100/20 rounded-full blur-2xl"></div>
          <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-gradient-to-br from-pink-100/30 to-purple-100/30 rounded-full blur-xl animate-pulse" style={{animationDelay: '1.8s'}}></div>
          
          {/* Data privacy themed floating elements */}
          <div className="absolute top-28 right-1/4 w-6 h-6 text-purple-300/40 animate-bounce" style={{animationDelay: '1s'}}>
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z"/></svg>
          </div>
          <div className="absolute bottom-36 left-1/3 w-5 h-5 text-indigo-300/35 animate-pulse" style={{animationDelay: '2s'}}>
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.1 16,12.7V16.2C16,16.8 15.4,17.3 14.8,17.3H9.2C8.6,17.3 8,16.8 8,16.2V12.7C8,12.1 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7Z"/></svg>
          </div>
          <div className="absolute top-2/3 right-1/6 w-4 h-4 text-pink-300/30 animate-bounce" style={{animationDelay: '2.8s'}}>
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          
          {/* Abstract shapes for visual interest */}
          <div className="absolute top-44 left-1/5 w-3 h-3 bg-purple-300/50 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute bottom-52 right-1/3 w-5 h-5 border border-indigo-300/40 rotate-45 animate-spin" style={{animationDuration: '18s'}}></div>
          <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-pink-300/45 rounded-full animate-bounce" style={{animationDelay: '2.2s'}}></div>
          <div className="absolute bottom-2/3 right-1/5 w-6 h-6 border border-purple-300/30 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-full text-sm font-semibold text-cyan-700 mb-4">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  Expert Support
                </div>
                <h2 className="text-5xl lg:text-6xl font-bold text-[#241940] leading-tight">
                  Closing the Data Privacy <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Skills Gap</span> with Expert Support
                </h2>
              </div>
              <div className="text-lg text-gray-enhanced space-y-6 leading-relaxed">
                <p className="text-xl text-gray-enhanced">
                  <strong>Organisations looking to improve their data privacy programmes are often limited by a lack of resource or skills in data protection.</strong>
                </p>
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-2xl p-6">
                  <h4 className="text-xl font-semibold text-[#241940] mb-3">Overcoming the Data Privacy Skills Shortage</h4>
                  <p>
                    The skills gap in data privacy is significant and often leaves organisations with barely enough manpower and expertise to maintain their existing programmes, let alone improve them to meet or exceed minimum requirements in order to use data privacy as a competitive advantage.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-2xl p-6">
                  <h4 className="text-xl font-semibold text-[#241940] mb-3">Enhancing Your Data Privacy Programme</h4>
                  <p>
                    By providing significant additional resource to support your data privacy functions and subject matter expertise related to your industry, SBM Tech can rapidly close the skill gap within your organisation.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative group">
                <Image 
                  src="/images/data-privacy-phone.jpg" 
                  alt="Data Privacy Consultation" 
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
              Comprehensive Privacy Solutions
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-[#241940] mb-6 leading-tight">
              Our <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Data Privacy</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our comprehensive data privacy services help organisations navigate regulatory requirements and build robust data protection programmes.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
            <DataPrivacyServiceCard
              title="ISO 27701 Consultancy"
              description="Implement and maintain ISO 27701 privacy information management systems to demonstrate your commitment to data protection."
              href="/iso-27701-consultancy"
            />
            
            <DataPrivacyServiceCard
              title="GDPR Gap Analysis"
              description="Identify gaps in your current data protection practices and develop a roadmap for GDPR compliance."
              href="/gdpr-gap-analysis"
            />
            
            <DataPrivacyServiceCard
              title="Data Privacy Maturity Framework"
              description="Assess and improve your organisation&apos;s data privacy maturity with our comprehensive framework approach."
              href="/data-privacy-maturity-framework"
            />
            
            <DataPrivacyServiceCard
              title="ISO 27018 Consultancy"
              description="Implement controls for protecting personally identifiable information (PII) in public cloud computing environments."
              href="/iso-27018-consultancy"
            />
            
            <DataPrivacyServiceCard
              title="Data Privacy Officer as a Service"
              description="Access expert DPO services to meet regulatory requirements and enhance your data protection programme."
              href="/dpo-as-a-service"
            />
            
            <DataPrivacyServiceCard
              title="Data Privacy Audit"
              description="Comprehensive audits to assess your data protection practices and ensure regulatory compliance."
              href="/data-privacy-audit"
            />
            
            <DataPrivacyServiceCard
              title="GDPR Data Mapping"
              description="Map your data flows and processing activities to achieve transparency and compliance with GDPR requirements."
              href="/gdpr-data-mapping"
            />
            
            <DataPrivacyServiceCard
              title="Data Privacy Consultancy"
              description="Expert guidance and support for all aspects of data privacy and protection strategy development."
              href="/data-privacy-consultancy"
            />
            
            <DataPrivacyServiceCard
              title="Microsoft Purview"
              description="Protect and manage data wherever it resides within your organisation by implementing Microsoft Purview for information protection and data loss prevention."
              href="/microsoft-purview"
            />
            
            <DataPrivacyServiceCard
              title="Cookie Consent Manager"
              description="Implement compliant cookie consent management solutions to meet regulatory requirements and user expectations."
              href="/cookie-consent-manager"
            />
            
            <DataPrivacyServiceCard
              title="Managed Data Loss Prevention"
              description="Continuous monitoring and prevention of data loss to protect sensitive information and maintain compliance."
              href="/data-privacy/managed-data-loss-prevention"
            />
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-[#241940] to-[#2d1b69] rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Strengthen Your Data Privacy Programme?</h3>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Let our certified data privacy experts assess your current practices and develop a tailored strategy to protect personal data and ensure compliance.
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

      {/* Why Data Privacy Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-cyan-100/20 to-blue-100/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-br from-purple-100/20 to-indigo-100/20 rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-full text-sm font-semibold text-cyan-700 mb-4">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Why Choose SBM Tech
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-[#241940] mb-6 leading-tight">
              Why <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Data Privacy</span> with SBM Tech?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our team of highly accredited and deeply experienced consultants will work as an extension of your organisation to build a data privacy programme that meets your specific regulatory requirements and goals.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                question: "Data Protection and Information Security Specialists",
                answer: "With a wealth of experience from across multiple sectors, our Data Protection consultants have a deep understanding of the unique challenges faced by organisations in critical national infrastructure, retail, financial services and more. Our Data Protection team has a background in delivering complex privacy programmes, and policy, process and governance activities which they can leverage to support your organisation's Data Protection goals."
              },
              {
                question: "Internationally Accredited for Data Protection",
                answer: "Our consultants also hold numerous globally recognised certifications for Data Protection, including International Association of Privacy Professionals (IAPP) CIPP/E, CIPM, CIPT, CIPP/US and Fellowship in Privacy (FIP), Practitioner Certificate in Data Protection (PDP), BCS Practitioner Certificate and ISO27701:2019 Lead Implementer and Auditor certification."
              },
              {
                question: "A Data Protection Partner",
                answer: "Beyond identifying opportunities to improve your Data Protection practices via gap analysis, SBM Tech will work with your organisation to deliver a Data Protection programme based on your specific requirements and goals. Our programmes are built in consideration of Data Protection legislation around the world and are designed to be simple in delivery and implementation while scaling to meet long term objectives."
              },
              {
                question: "An Extension of Your Team",
                answer: "SBM Tech&apos;s Data Protection consultants embed themselves within internal teams so they can work alongside them in support of existing compliance and/ or legal functions. Our teams aim to understand your organisation&apos;s individual business goals, culture and operating context, so that your Data Protection function is focused on the most prevalent activities."
              },
              {
                question: "Outcome-Focused and Tool-Agnostic",
                answer: "Our consultants are adept with using the latest technologies and tooling to enhance the maturity and automation of organisation's Data Protection programmes (including OneTrust). SBM Tech's team are flexible in the solutions they use and capable of implementing them to meet specific outcomes."
              }
            ].map((item, index) => (
              <details key={index} className="group bg-white rounded-2xl border border-gray-200 hover:border-cyan-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <summary className="px-8 py-6 cursor-pointer font-semibold text-lg text-[#241940] hover:text-cyan-600 transition-colors duration-300 flex items-center justify-between list-none">
                  <span>{item.question}</span>
                  <svg className="w-6 h-6 text-cyan-600 transform group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-8 pb-6 text-gray-600 leading-relaxed text-lg border-t border-gray-100 pt-6 mt-2">
                  {item.answer}
                </div>
              </details>
            ))}
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
              The <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Benefits</span> of our Data Privacy Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Partner with industry-leading experts to enhance your data protection practices and achieve comprehensive compliance.
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
                <h3 className="text-2xl font-bold text-[#241940] mb-6 group-hover:text-cyan-700 transition-colors duration-300">Improved Insight into Data Privacy</h3>
                <p className="text-gray-600 leading-relaxed">
                  Gain a detailed understanding of your current data protection maturity and a comprehensive view of your personal data processing landscape.
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
                <h3 className="text-2xl font-bold text-[#241940] mb-6 group-hover:text-cyan-700 transition-colors duration-300">Align with Industry Best Practice</h3>
                <p className="text-gray-600 leading-relaxed">
                  Understand the next steps necessary to achieve your target data protection maturity and meet relevant legal requirements, such as the need to appoint a data protection officer (DPO).
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
                <h3 className="text-2xl font-bold text-[#241940] mb-6 group-hover:text-cyan-700 transition-colors duration-300">Overcome Data Privacy Skills Gap</h3>
                <p className="text-gray-600 leading-relaxed">
                  Support your internal data privacy teams by augmenting their capabilities through a highly certified and deeply experienced partner.
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

      {/* Why is Data Privacy Important Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#241940] mb-6">
                Why is Data Privacy Important?
              </h2>
              <div className="space-y-6 text-lg">
                <p className="text-gray-600">
                  Organisations looking to improve their data privacy programmes are often limited by a lack of resource or skills in data protection.
                </p>
                <p className="text-gray-600">
                  The skills gap in data privacy is significant and often leaves organisations with barely enough manpower and expertise to maintain their existing programmes, let alone improve them to meet or exceed minimum requirements in order to use data privacy as a competitive advantage.
                </p>
                <p className="text-gray-600">
                  Even for those with the right skills in-house, they may lack the sector-specific experience to fully understand their data privacy requirements and drive appropriate improvements.
                </p>
                <p className="text-gray-600">
                  By providing significant additional resource to support your data privacy functions and subject matter expertise related to your industry, we can rapidly close the skill gap within your organisation.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8">
                <div className="relative h-80 bg-gradient-to-br from-[#241940] to-[#2d1b69] rounded-xl overflow-hidden">
                  <Image 
                    src="/images/data-privacy-team.jpg" 
                    alt="Data Privacy Team" 
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
                    src="/images/how-data-privacy-works.webp" 
                    alt="How Data Privacy Works" 
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
                  <strong>Our data privacy services all start with a gap assessment to identify potential vulnerabilities compliance shortfalls and develop a roadmap of improvements.</strong>
                </p>
                <p>
                  This roadmap prioritises services or activities that will deliver the most significant improvements to your organisation&apos;s data privacy in the shortest time, while also addressing the mid-to-long term developments to ensure ongoing compliance.
                </p>
                <p>
                  We will then work alongside your organisation to implement these improvements and provide any ongoing continuing support that is required.
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
              Data Privacy <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Services</span> FAQs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get answers to common questions about our data privacy services and how they can help your organisation achieve compliance.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                question: "What is Data Privacy Consultancy?",
                answer: "Data privacy consultancy is the process of providing expert advice to organisations on how to protect the privacy of their personal data. This can include advice on how to collect, store, use, and disclose data, as well as how to develop policies and procedures to ensure compliance with applicable data privacy legislation. Data privacy consultants can also help organisations to assess their data privacy risks and develop strategies to mitigate those risks."
              },
              {
                question: "What Are the Benefits of Data Privacy Consultancy?",
                answer: "Data privacy consultancy can help organisations to develop and implement policies and procedures to protect the privacy of their customers&apos; or employees&apos; data. In addition, data privacy consultants can help create and maintain compliance with data privacy laws and regulations."
              },
              {
                question: "How Important Is Data Privacy?",
                answer: "Data Privacy is today considered an essential part of supporting the digital economy and is increasingly receiving high levels of media attention. In the UK, the key pieces of legislation governing data protection are the UK General Data Protection Regulation (Regulation (EU) (2016/679) and the Data Protection Act 2018. Data privacy is considered a fundamental human right, and data protection legislation exists to protect that right. Data privacy is important because in order for individuals to be willing to engage with organisations, they have to have confidence that their personal data will be handled with care."
              },
              {
                question: "Do We Need a Data Protection Officer?",
                answer: "Whether you need a Data Protection Officer (DPO) depends on several factors including the nature and scale of your data processing activities. Under GDPR, a DPO is mandatory for public authorities, organisations whose core activities involve regular and systematic monitoring of data subjects on a large scale, or organisations whose core activities involve large-scale processing of special categories of data or criminal conviction data. Our experts can help assess whether your organisation requires a DPO."
              },
              {
                question: "Do We Need a Record of Processing Activities?",
                answer: "Under GDPR, most organisations are required to maintain a Record of Processing Activities (RoPA). This document records details about how personal data is processed, including purposes, categories of data subjects, types of personal data, recipients, retention periods, and security measures. Small enterprises with fewer than 250 employees may be exempt unless their processing is likely to result in a risk to data subjects&apos; rights and freedoms, involves special categories of data, or is not occasional."
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
                Our data privacy experts are ready to discuss your specific requirements and answer any additional questions.
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
                Speak to our Data Privacy Experts
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Enhance your organisation&apos;s data protection practices and ensure compliance with evolving regulatory requirements through our comprehensive data privacy services.
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
                  alt="Data Privacy Services Consultation" 
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
