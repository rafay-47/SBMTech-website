import Image from "next/image";
import Link from "next/link";
import SoftwareDevelopmentServiceCard from "@/components/SoftwareDevelopmentServiceCard";
import type { Metadata } from "next";
import ProcessSection from "@/components/ProcessSection";

export const metadata: Metadata = {
  title: "Software Development Services | SBM Tech",
  description: "Transform your business with custom software solutions. From web applications to mobile apps and enterprise software, SBM Tech delivers cutting-edge technology solutions tailored to your needs.",
  keywords: "software development, web development, mobile app development, custom software, enterprise applications, full-stack development, React, Node.js, cloud solutions",
};

export default function SoftwareDevelopmentServices() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white py-24 overflow-hidden min-h-screen flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/software-development-banner.webp"
            alt="Software Development Services Background"
            fill
            className="object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2d1b69]/80 via-[#241940]/70 to-[#1e1537]/80"></div>
        </div>

        {/* Floating Development Icons */}
        <div className="absolute inset-0 overflow-hidden z-20">
          <div className="absolute top-20 left-10 w-8 h-8 text-cyan-400/50 animate-pulse">
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
          </div>
          <div className="absolute top-40 right-20 w-6 h-6 text-purple-400/50 animate-bounce" style={{animationDelay: '1s'}}>
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9l-5.91 5.74L17.18 22 12 19.27 6.82 22l1.09-7.26L2 9l6.91-1.74L12 2z"/></svg>
          </div>
          <div className="absolute bottom-20 left-1/4 w-7 h-7 text-blue-400/50 animate-pulse" style={{animationDelay: '2s'}}>
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
          </div>
          <div className="absolute top-60 left-1/2 w-5 h-5 text-green-400/50 animate-pulse" style={{animationDelay: '3s'}}>
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5 1.4-1.4 3.6 3.6 9.6-9.6L20 6z"/></svg>
          </div>
          <div className="absolute bottom-40 right-1/4 w-6 h-6 text-indigo-400/50 animate-bounce" style={{animationDelay: '4s'}}>
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9l-5.91 5.74L17.18 22 12 19.27 6.82 22l1.09-7.26L2 9l6.91-1.74L12 2z"/></svg>
          </div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-30 w-full">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent leading-tight">
              Software Development Services
            </h1>
            <p className="text-xl mb-8 text-gray-300 leading-relaxed">
              Transform your business with custom software solutions. From web applications to mobile apps and enterprise software, SBM Tech delivers cutting-edge technology solutions tailored to your needs.
            </p>
            <div className="flex gap-6 justify-center flex-wrap">
              <Link href="/contact-us">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-xl">
                  Start Your Project
                </button>
              </Link>
              <Link href="/software-development#services">
                <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-[#241940] px-8 py-4 rounded-full font-semibold transition-all">
                  View Services
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Building Innovation Section */}
      <section className="py-24 bg-subtle-cyan relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-36 h-36 bg-gradient-to-br from-cyan-100/25 to-blue-100/25 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-16 left-16 w-28 h-28 bg-gradient-to-br from-purple-100/20 to-indigo-100/20 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-gradient-to-br from-teal-100/30 to-green-100/30 rounded-full blur-xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
          
          {/* Software development themed floating elements */}
          <div className="absolute top-32 left-1/4 w-6 h-6 text-cyan-300/40 animate-bounce" style={{animationDelay: '1s'}}>
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
          </div>
          <div className="absolute bottom-32 right-1/3 w-5 h-5 text-blue-300/35 animate-pulse" style={{animationDelay: '2s'}}>
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
          </div>
          <div className="absolute top-2/3 left-1/6 w-4 h-4 text-purple-300/30 animate-bounce" style={{animationDelay: '3s'}}>
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9l-5.91 5.74L17.18 22 12 19.27 6.82 22l1.09-7.26L2 9l6.91-1.74L12 2z"/></svg>
          </div>
          
          {/* Abstract geometric shapes */}
          <div className="absolute top-40 right-1/6 w-3 h-3 bg-cyan-300/50 rounded-full animate-pulse" style={{animationDelay: '2.5s'}}></div>
          <div className="absolute bottom-48 left-1/3 w-5 h-5 border border-blue-300/40 rotate-45 animate-spin" style={{animationDuration: '12s'}}></div>
          <div className="absolute top-1/4 right-1/5 w-2 h-2 bg-purple-300/45 rounded-full animate-bounce" style={{animationDelay: '1.8s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-full text-sm font-semibold text-cyan-700 mb-4">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  Innovation & Technology
                </div>
                <h2 className="text-5xl lg:text-6xl font-bold text-[#241940] leading-tight">
                  Building <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Innovation</span> Through Technology
                </h2>
              </div>
              <div className="text-lg text-gray-600 space-y-6 leading-relaxed">
                <p className="text-xl text-gray-enhanced">
                  Our software development services combine cutting-edge technology with industry best practices to deliver scalable, secure, and user-friendly solutions that drive business growth and digital transformation.
                </p>
                <p>
                  We specialise in full-stack development, cloud-native applications, and enterprise-grade solutions that meet the highest standards of performance, security, and reliability. Our agile approach ensures rapid delivery while maintaining code quality and user experience.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative group">
                <Image 
                  src="/images/pointing-monitor.jpg" 
                  alt="Software Development Team Working Together" 
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
              Comprehensive Development Solutions
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-[#241940] mb-6 leading-tight">
              Our <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Software Development</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our comprehensive software development services combine technical expertise with business acumen to deliver solutions that drive digital transformation and business growth.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
            <SoftwareDevelopmentServiceCard
              title="Web Application Development"
              description="Build responsive, scalable web applications using modern frameworks like React, Angular, and Vue.js with robust backend APIs."
              href="/web-application-development"
            />
            
            <SoftwareDevelopmentServiceCard
              title="Mobile App Development"
              description="Create native and cross-platform mobile applications for iOS and Android with seamless user experiences and performance."
              href="/mobile-app-development"
            />
            
            <SoftwareDevelopmentServiceCard
              title="Enterprise Software Solutions"
              description="Develop custom enterprise applications that streamline business processes and integrate with existing systems."
              href="/enterprise-software-solutions"
            />
            
            <SoftwareDevelopmentServiceCard
              title="Cloud-Native Development"
              description="Build cloud-first applications using microservices architecture, containerisation, and serverless technologies."
              href="/cloud-native-development"
            />
            
            <SoftwareDevelopmentServiceCard
              title="API Development & Integration"
              description="Design and develop RESTful APIs and GraphQL services for seamless system integration and data exchange."
              href="/api-development-integration"
            />
            
            <SoftwareDevelopmentServiceCard
              title="E-commerce Solutions"
              description="Create powerful e-commerce platforms with secure payment processing, inventory management, and analytics."
              href="/ecommerce-solutions"
            />
            
            <SoftwareDevelopmentServiceCard
              title="DevOps & CI/CD"
              description="Implement automated deployment pipelines, monitoring, and infrastructure as code for reliable software delivery."
              href="/devops-cicd"
            />
            
            <SoftwareDevelopmentServiceCard
              title="Software Maintenance & Support"
              description="Provide ongoing maintenance, updates, and technical support to ensure optimal performance and security."
              href="/software-maintenance-support"
            />
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-[#241940] to-[#2d1b69] rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Build Your Next Software Solution?</h3>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Let our experienced development team turn your ideas into powerful, scalable software solutions that drive business growth.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact-us">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-xl">
                  Start Your Project
                </button>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />
      
      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#241940] via-[#2d1b69] to-[#1e1537] relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
              Ready to Transform Your Business with Custom Software?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let&apos;s discuss your project requirements and explore how our software development expertise can drive your business forward.
            </p>
            <Link href="/contact-us">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-12 py-6 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-xl">
                Start Your Project Today
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
} 