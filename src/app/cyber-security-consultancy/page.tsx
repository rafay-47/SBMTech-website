import Image from "next/image";
import Link from "next/link";
import AccreditationTicker from "@/components/AccreditationTicker";
import ConsultancyServiceCard from "@/components/ConsultancyServiceCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cyber Security Consultancy | SBM Tech",
  description: "Work with a trusted partner and gain access to a complete suite of cyber security consultancy capabilities to meet your organisational requirements.",
  keywords: "cyber security consultancy, security audit, risk assessment, cloud security, NCSC certified, ISO 27001, penetration testing",
};

export default function CyberSecurityConsultancy() {
  return (
    <>

      {/* Hero Section */}
      <section className="relative text-white py-24 overflow-hidden min-h-screen flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cyber-security-consultancy-banner.jpg"
            alt="Cyber Security Background"
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
              Cyber Security Consultancy
            </h1>
            <p className="text-xl mb-8 text-gray-300 leading-relaxed">
              Work with a trusted partner and gain access to a complete suite of cyber security consultancy capabilities to meet your organisational requirements.
            </p>
            <div className="flex gap-6 justify-center flex-wrap">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-xl">
                Speak to our Experts
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-[#241940] px-8 py-4 rounded-full font-semibold transition-all">
                View Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Helping You Stay Ahead Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-cyan-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-blue-100/40 to-indigo-100/40 rounded-full blur-2xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-full text-sm font-semibold text-cyan-700 mb-4">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  Proactive Threat Management
                </div>
                <h2 className="text-5xl lg:text-6xl font-bold text-[#241940] leading-tight">
                  Helping You Stay <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Ahead</span> of the Latest Threats
                </h2>
              </div>
              <div className="text-lg text-gray-600 space-y-6 leading-relaxed">
                <p className="text-xl text-gray-700">
                  Our cyber security consultancy services cover on-premise, cloud and operational technology environments and can be leveraged to support transformation programmes or meet specific industry requirements, such as UK Government where an NCSC-certified company is required.
                </p>
                <p>
                  We ensure our approach is flexible and can be adapted as your requirements evolve, developing a security aware culture where organisational needs and objectives are balanced against a clear understanding and appreciation of applicable and emerging cyber threats.
                </p>
              </div>
              {/* <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-xl">
                  Get Assessment
                </button>
                <button className="border-2 border-gray-300 hover:border-cyan-500 text-gray-700 hover:text-cyan-600 px-8 py-4 rounded-xl font-semibold transition-all">
                  View Case Studies
                </button>
              </div> */}
            </div>
            <div className="relative">
              <div className="relative group">
                <Image 
                  src="/images/business-image.jpg" 
                  alt="Cyber Security Professionals Working Together" 
                  width={600}
                  height={400}
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


      {/* Accreditation Ticker */}
      {/* <AccreditationTicker /> */}

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        
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
              Our <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Cyber Security</span> Consultancy Services
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our cyber security consultancy services combine a comprehensive set of methodologies and expertise across various technical areas, including the ability to implement positive cyber security change.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
            <ConsultancyServiceCard
              title="Cyber Security Audit"
              description="Leverage deep cyber security, technical and compliance expertise to validate the effectiveness of your cyber security programme."
              href="/cyber-security/audit"
            />
            
            <ConsultancyServiceCard
              title="Cyber Security Architecture"
              description="Enhance the security, financial performance, and long-term growth of your organisation by improving your cyber security architecture."
              href="/cyber-security-architecture"
            />
            
            <ConsultancyServiceCard
              title="Cloud Security Posture Management"
              description="Secure your organisation's cloud environments and safeguard users, devices, and data."
              href="/cloud-security-posture-management"
            />
            
            <ConsultancyServiceCard
              title="Information Security Office as a Service (ISOS)"
              description="Gain access to a complete set of cyber security services instantly with SBM Tech's ISOS service."
              href="/information-security-officer-as-a-service"
            />
            
            <ConsultancyServiceCard
              title="NCSC Assured Services"
              description="Partner with a cyber security services company that have been reviewed and assured by one of the world's leading cyber security bodies, the UK's National Cyber Security Centre."
              href="/ncsc-assured-services"
            />
            
            <ConsultancyServiceCard
              title="Risk Assessment"
              description="Identify the top threats and vulnerabilities facing your organisation and work with SBM Tech to make informed, cost-effective decisions on how to address them."
              href="/cyber-security-risk-assessments"
            />
            
            <ConsultancyServiceCard
              title="Risk Management"
              description="Mitigate risk and ensure compliance against relevant standards and guidelines by establishing a comprehensive risk management program."
              href="/cyber-security-risk-management"
            />
            
            <ConsultancyServiceCard
              title="Operational Technology Services"
              description="Secure your operational technology environments with specialized cyber security services designed for industrial control systems."
              href="/operational-technology"
            />
            
            <ConsultancyServiceCard
              title="Endpoint Security Posture Assessment"
              description="Evaluate and strengthen the security posture of your endpoint devices to protect against advanced threats and vulnerabilities."
              href="/endpoint-security-posture-assessment"
            />
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-[#241940] to-[#2d1b69] rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Strengthen Your Security Posture?</h3>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Let our certified experts assess your current security landscape and develop a tailored strategy to protect your organization.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-xl">
                Speak to our Experts
              </button>
              {/* <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-[#241940] px-8 py-4 rounded-xl font-semibold transition-all">
                Download Security Guide
              </button> */}
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
              The <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Benefits</span> of our Cyber Security Consultancy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Partner with industry-leading experts to strengthen your security posture and achieve comprehensive protection.
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
                <h3 className="text-2xl font-bold text-[#241940] mb-6 group-hover:text-cyan-700 transition-colors duration-300">Highly Accredited Consulting Services</h3>
                <p className="text-gray-600 leading-relaxed">
                  We are one of the most accredited companies for delivering cyber security frameworks and are accredited by industry bodies and regulators such as the NCSC, CREST, IASME.
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
                <h3 className="text-2xl font-bold text-[#241940] mb-6 group-hover:text-cyan-700 transition-colors duration-300">Effective Risk Assessment and Management</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our cyber security risk assessment and management services enable clients to make informed decisions and to effectively understand the risks they face.
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
                <h3 className="text-2xl font-bold text-[#241940] mb-6 group-hover:text-cyan-700 transition-colors duration-300">Improve Your Cyber Security Architecture</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our enterprise experience of designing and implementing cyber security architectures across vast technological environments enables security to be built into the design of a solution.
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
                <h3 className="text-2xl font-bold text-[#241940] mb-6 group-hover:text-cyan-700 transition-colors duration-300">Gain Cloud and Zero Trust Expertise</h3>
                <p className="text-gray-600 leading-relaxed">
                  We have strong expertise in architecting across Microsoft Azure, Google Cloud Platform and Amazon Web Services, including the implementation of Zero Trust models.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#241940] mb-6">
                The Importance of Conducting a Cyber Security Consultancy
              </h2>
              <div className="space-y-6 text-lg">
                <div>
                  <h4 className="text-xl font-semibold text-[#241940] mb-2">
                    Challenges in Accessing Cyber Security Expertise:
                  </h4>
                  <p className="text-gray-600">
                    Our clients often face challenges in accessing the right expertise to meet their objectives and legal requirements. This can limit their ability to meaningfully direct their cyber security strategy and build the necessary range of cyber capabilities.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-[#241940] mb-2">
                    Augmenting Cyber Security Teams with SBM Tech Consultants:
                  </h4>
                  <p className="text-gray-600">
                    There are occasions where clients also require additional cyber security capabilities to complement their existing teams. This can be to increase resourcing levels for a specific project or to support with BAU activities.
                  </p>
                </div>
              </div>
            </div>
            {/* Left Content - Team Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8">
                <div className="relative h-80 bg-gradient-to-br from-[#241940] to-[#2d1b69] rounded-xl overflow-hidden">
                  <Image 
                    src="/images/team-image.jpg" 
                    alt="Cyber Security Team" 
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
                    src="/images/business-image.jpg" 
                    alt="How it Works" 
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
                  Many cyber security consultancy engagements focus on the implementation of industry control frameworks, international standards and specific programme requirements. Instead, we develop tailored approaches to help meet each of our client's unique requirements.
                </p>
                <p>
                  We work with every client to develop a tailored solution that ensures our client's business outcomes are considered at all stages of the engagement, and that our services recognise and support their business objectives. Across our consulting teams, we have extensive expertise in cloud, critical infrastructure, operational technology, cyber threat intelligence and incident response.
                </p>
              </div>
              <button className="bg-gradient-to-r from-[#241940] to-[#2d1b69] hover:from-[#2d1b69] hover:to-[#241940] text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-xl">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Speak to us Section */}
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
                Speak to our Trusted Team
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Embark on a journey to increase your cyber resilience, improve your cybersecurity posture, and 
                reduce your cyber security risk with our comprehensive Security Advisory services.
              </p>
              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-xl">
                Speak to us
              </button>
            </div>

            {/* Right Content - Professional Image */}
            <div className="relative h-full min-h-[500px]">
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <Image 
                  src="/images/businessImage.png" 
                  alt="Professional Business Consultation" 
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

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#241940] mb-6">
              Engaging with SBM Tech
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              By taking an adaptive, customer first approach, we provide trusted services that deliver outcome focused results.
            </p>
          </div>

          <div className="relative">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Process Steps */}
              {[
                {
                  title: "Understand",
                  description: "We listen and learn about your business challenges, goals and ambitions, strategic drivers and culture.",
                  icon: "M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L9 7V9C9 10.1 9.9 11 11 11V16L7 20V22H17V20L13 16V11C14.1 11 15 10.1 15 9H21Z"
                },
                {
                  title: "Assess",
                  description: "We assess your current risk position relative to your needs and goals, and develop a roadmap for optimising your cyber-security.",
                  icon: "M9 11H7V9H9V11ZM13 11H11V9H13V11ZM17 11H15V9H17V11ZM19 4H18V2H16V4H8V2H6V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V9H19V20Z"
                },
                {
                  title: "Design",
                  description: "We design solutions, processes and strategies that allow you to achieve the desired state of security and effectiveness.",
                  icon: "M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17M2 12L12 17L22 12"
                },
                {
                  title: "Implement",
                  description: "We draw on our experience and expertise to implement the agreed technical solutions, governance, compliance frameworks and migration processes.",
                  icon: "M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                },
                {
                  title: "Manage",
                  description: "We operate as an extension of your own cyber security team, delivering tangible, value-added cyber security on a 24/7 basis.",
                  icon: "M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"
                },
                {
                  title: "Optimise",
                  description: "We use our agile yet focused methodology to evolve and optimise your solution over time, to maximise value.",
                  icon: "M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
                }
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#241940] to-[#2d1b69] rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d={step.icon}/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-[#241940] mb-4">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  
                  {/* Arrows between steps */}
                  {index < 5 && (
                    <>
                      {/* Horizontal arrow for steps 0→1 and 1→2 (first row) */}
                      {(index === 0 || index === 1) && (
                        <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                          <svg className="w-8 h-8 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                          </svg>
                        </div>
                      )}
                      
                      {/* Diagonal arrow from Design to Implement (2→3) */}
                      {index === 2 && (
                        <div className="hidden lg:block absolute -bottom-4 -left-4 transform z-10">
                          <svg className="w-8 h-8 text-cyan-500 transform rotate-135" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                          </svg>
                        </div>
                      )}
                      
                      {/* Horizontal arrow for steps 3→4 and 4→5 (second row) */}
                      {(index === 3 || index === 4) && (
                        <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                          <svg className="w-8 h-8 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                          </svg>
                        </div>
                      )}
                      
                      {/* Vertical arrows for mobile/tablet layouts */}
                      <div className="lg:hidden flex justify-center mt-4 mb-4">
                        <svg className="w-6 h-6 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                        </svg>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
              Cyber Security <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Consultancy</span> FAQs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get answers to common questions about our cyber security consultancy services and approach.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                question: "How Can Cyber Security Consultancy Help My Business?",
                answer: "There are many ways in which cyber security consultancy services can help your business. By conducting a comprehensive assessment of your business's current security posture, they can identify any weaknesses and potential vulnerabilities. They can then provide cyber security services and a bespoke security strategy that includes the implementation of appropriate security controls. This should provide you with the peace of mind that your business, critical systems and data are protected from cyber attacks."
              },
              {
                question: "Do I Need to Have Cyber Security Risk Management in My Organisation?",
                answer: "For some organisations and sectors, security risk management is a mandatory compliance requirement. E.g.) An organisation would be unable to achieve ISO 27001 without security risk management. All organisations face cyber security risks. Risk management enables organisations to define the roles and responsibilities for risk management, the methodology to follow and to track the organisations decisions and plans to treat or tolerate risks in accordance with a company risk appetite."
              },
              {
                question: "My Suppliers Are ISO Certified, Is That Enough?",
                answer: "ISO certification, such as ISO 27001 demonstrates that an organisation has implemented and achieved compliance to an international standard for an information security management system. An ISO certification demonstrates a level of maturity and compliance. Is that enough? That would depend on your organisations risk appetite, compliance requirements and the potential impact if that supplier was targeted or disrupted."
              },
              {
                question: "Do You Support Multi-Cloud Security Architecture?",
                answer: "Yes. The SBM Tech architecture and cloud security teams consist of consultants with hands on skills, knowledge and experience of multi-cloud solutions and cloud assessments. SBM Tech are vendor agnostic and provide impartial consultancy to enable clients to overcome challenges or to fulfil their business objectives."
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
                Our experts are ready to discuss your specific security requirements and answer any additional questions.
              </p>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-xl">
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-br from-[#2d1b69] via-[#241940] to-[#1e1537] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
            Ready to Enhance Your Cyber Security?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get started with our comprehensive cyber security consultancy services and protect your business from evolving threats.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-xl">
              Contact Our Experts
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-[#241940] px-8 py-4 rounded-full font-semibold transition-all">
              Download Brochure
            </button>
          </div>
        </div>
      </section> */}
    </>
  );
}