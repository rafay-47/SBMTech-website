import Image from "next/image";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import CyberSecurityNews from "@/components/CyberSecurityNews";
import Reviews from "@/components/Reviews";
import AccreditationTicker from "@/components/AccreditationTicker";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white py-24 overflow-hidden min-h-screen flex items-center bg-pattern-dots">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/banner.webm" type="video/webm" />
          </video>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2d1b69]/80 via-[#241940]/70 to-[#1e1537]/80"></div>
          
          {/* Subtle dot pattern overlay */}
          <div className="absolute inset-0 bg-pattern-dots opacity-30"></div>
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
        </div>

        <div className="container mx-auto px-4 text-center relative z-30 w-full">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent leading-tight">
              Secure Your Digital Future with SBM Tech
            </h1>
            <p className="text-xl mb-8 text-gray-300 leading-relaxed">
              Leading cybersecurity consultancy providing comprehensive security solutions, 
              managed services, and expert guidance to protect your business from evolving threats.
            </p>
            <div className="flex gap-6 justify-center flex-wrap">
              <Link href="/contact-us">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-xl">
                  Get Security Assessment
                </button>
              </Link>
              <Link href="/services">
                <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-[#241940] px-8 py-4 rounded-full font-semibold transition-all">
                  Explore Services
                </button>
              </Link>
              
            </div>
          </div>
        </div>
      </section>

      {/* Accreditation Ticker Section */}
      <AccreditationTicker />

      {/* Protecting Essential Industries Section */}
      <section className="py-16 bg-subtle-gray relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-20 w-24 h-24 bg-gradient-to-br from-cyan-100/30 to-blue-100/30 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-100/20 to-indigo-100/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-green-100/25 to-teal-100/25 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
          
          {/* Geometric shapes */}
          <div className="absolute top-20 left-1/3 w-8 h-8 border border-cyan-200/30 rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
          <div className="absolute bottom-40 right-1/3 w-6 h-6 border border-purple-200/25 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#241940] mb-4">Protecting Essential Industries</h2>
            <p className="text-xl text-gray-enhanced max-w-4xl mx-auto">
              SBM Tech is the trusted cyber security partner for operators of essential services. We provide 
              end-to-end cyber security capabilities that help our clients overcome their security challenges, 
              allowing them to operate safely and securely.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <ServiceCard
              title="Cyber Security Consultancy"
              description="Our services cover on-premise, cloud and operational technology environments and can be leveraged to support transformation programmes or meet specific industry requirements."
              icon="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z"
              color="blue"
              popularServices={[
                { title: "Microsoft Cloud Security Services", href: "/microsoft-cloud-security-services" },
                { title: "Cyber Security Services", href: "/cyber-security" },
                { title: "Risk Assessment", href: "/cyber-security-risk-assessments" }
              ]}
              viewMoreHref="/cyber-security-consultancy"
            />
            
            <ServiceCard
              title="Managed Security"
              description="Secure your organisation 24/7 with the industry-leading expertise, methodologies, and cyber threat intelligence capabilities of a managed security services provider."
              icon="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"
              color="green"
              popularServices={[
                { title: "Managed Detection & Response", href: "/managed-detection-response" },
                { title: "Security Operations Centre", href: "/security-operations-centre" },
                { title: "Digital Forensics & Incident Response", href: "/digital-forensics-and-incident-response" }
              ]}
              viewMoreHref="/managed-security-services"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <ServiceCard
              title="Penetration Testing"
              description="Assess the security of your organisation's network from an internal and external perspective by completing a penetration test with SBM Tech's highly certified and experienced offensive security experts."
              icon="M21 16.5C21 16.88 20.79 17.21 20.47 17.38L12.57 21.82C12.41 21.94 12.21 22 12 22S11.59 21.94 11.43 21.82L3.53 17.38C3.21 17.21 3 16.88 3 16.5V7.5C3 7.12 3.21 6.79 3.53 6.62L11.43 2.18C11.59 2.06 11.79 2 12 2S12.41 2.06 12.57 2.18L20.47 6.62C20.79 6.79 21 7.12 21 7.5V16.5Z"
              color="red"
              popularServices={[
                { title: "Red Team Assessment", href: "/red-team-assessment" },
                { title: "Phishing Assessments", href: "/phishing-assessments" },
                { title: "Social Engineering Testing", href: "/social-engineering-testing" }
              ]}
              viewMoreHref="/penetration-testing"
            />
            
            <ServiceCard
              title="Data Privacy"
              description="Keep pace with evolving regulatory and compliance demands and build trust in the personal data being used by your organisation with SBM Tech's data privacy services."
              icon="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.1 16,12.7V16.2C16,16.8 15.4,17.3 14.8,17.3H9.2C8.6,17.3 8,16.8 8,16.2V12.7C8,12.1 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7Z"
              color="purple"
              popularServices={[
                { title: "GDPR Gap Analysis", href: "/gdpr-gap-analysis" },
                { title: "Data Privacy Maturity Framework", href: "/data-privacy-maturity-framework" },
                { title: "ISO 27701 Consultancy", href: "/iso-27701-consultancy" }
              ]}
              viewMoreHref="/data-privacy"
            />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-gradient-to-br from-[#2d1b69] via-[#241940] to-[#1e1537] text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute right-0 top-0 w-full h-full">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <pattern id="aboutGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#aboutGrid)" />
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
                End to End Consultancy and Managed Security Services
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We offer end-to-end consultancy and managed security services that optimize the 
                effectiveness of the Microsoft security portfolio, and drive maximum return from your 
                investment.
              </p>
              <Link href="/about-us">
                <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-xl">
                  More About Us
                </button>
              </Link>
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
                {/* Left Fade Overlay */}
                {/* <div className="absolute inset-0 bg-gradient-to-r from-[#2d1b69] via-[#2d1b69]/80 via-[#2d1b69]/40 to-transparent rounded-2xl"></div> */}
                {/* Additional subtle overlay for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#241940]/30 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Speak to us Section */}
      <section className="py-20 bg-subtle-blue relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-28 h-28 bg-gradient-to-br from-blue-100/25 to-cyan-100/25 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-20 h-20 bg-gradient-to-br from-indigo-100/30 to-purple-100/30 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-gradient-to-br from-teal-100/20 to-blue-100/20 rounded-full blur-xl"></div>
          
          {/* Floating icons */}
          <div className="absolute top-32 right-10 w-6 h-6 text-cyan-300/40 animate-bounce" style={{animationDelay: '1.5s'}}>
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z"/></svg>
          </div>
          <div className="absolute bottom-32 left-16 w-5 h-5 text-blue-300/35 animate-pulse" style={{animationDelay: '3s'}}>
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.1 16,12.7V16.2C16,16.8 15.4,17.3 14.8,17.3H9.2C8.6,17.3 8,16.8 8,16.2V12.7C8,12.1 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7Z"/></svg>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content - Team Image Placeholder */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8">
                                <div className="relative h-80 bg-gradient-to-br from-[#241940] to-[#2d1b69] rounded-xl overflow-hidden">
                  <Image 
                    src="/images/team-image.png" 
                    alt="Professional Team Image" 
                    fill
                    className="object-cover" 
                  />
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#241940] mb-6">
                Speak to our Trusted Team
              </h2>
              <p className="text-xl text-gray-enhanced mb-8 leading-relaxed">
                Embark on a journey to increase your cyber resilience, improve your cybersecurity posture, and 
                reduce your cyber security risk with our comprehensive Security Advisory services.
              </p>
              <Link href="/contact-us">
                <button className="bg-gradient-to-r from-[#241940] to-[#2d1b69] hover:from-[#2d1b69] hover:to-[#241940] text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-xl">
                  Speak to us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <Reviews />

      {/* Cybersecurity News Section */}
      <CyberSecurityNews />
    </>
  );
}