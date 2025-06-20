import Image from "next/image";
import ServiceCard from "@/components/ServiceCard";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#2d1b69] via-[#241940] to-[#1e1537] text-white py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 top-0 w-full h-full">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <pattern id="heroGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#heroGrid)" />
            </svg>
          </div>
        </div>
        
        {/* Floating Security Icons */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-8 h-8 text-cyan-400/30 animate-pulse">
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z"/></svg>
          </div>
          <div className="absolute top-40 right-20 w-6 h-6 text-purple-400/30 animate-bounce" style={{animationDelay: '1s'}}>
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.1 16,12.7V16.2C16,16.8 15.4,17.3 14.8,17.3H9.2C8.6,17.3 8,16.8 8,16.2V12.7C8,12.1 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7Z"/></svg>
          </div>
          <div className="absolute bottom-20 left-1/4 w-7 h-7 text-blue-400/30 animate-pulse" style={{animationDelay: '2s'}}>
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M21 16.5C21 16.88 20.79 17.21 20.47 17.38L12.57 21.82C12.41 21.94 12.21 22 12 22S11.59 21.94 11.43 21.82L3.53 17.38C3.21 17.21 3 16.88 3 16.5V7.5C3 7.12 3.21 6.79 3.53 6.62L11.43 2.18C11.59 2.06 11.79 2 12 2S12.41 2.06 12.57 2.18L20.47 6.62C20.79 6.79 21 7.12 21 7.5V16.5Z"/></svg>
          </div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
              Secure Your Digital Future with SBM Tech
            </h1>
            <p className="text-xl mb-8 text-gray-300 leading-relaxed">
              Leading cybersecurity consultancy providing comprehensive security solutions, 
              managed services, and expert guidance to protect your business from evolving threats.
            </p>
            <div className="flex gap-6 justify-center flex-wrap">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-xl">
                Get Security Assessment
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-[#241940] px-8 py-4 rounded-full font-semibold transition-all">
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Protecting Essential Industries Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#241940] mb-4">Protecting Essential Industries</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
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
              viewMoreHref="/managed-security"
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
              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-xl">
                More About Us
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content - Team Image Placeholder */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8">
                                <div className="relative h-80 bg-gradient-to-br from-[#241940] to-[#2d1b69] rounded-xl overflow-hidden">
                  <Image 
                    src="/images/team-image.jpg" 
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
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Embark on a journey to increase your cyber resilience, improve your cybersecurity posture, and 
                reduce your cyber security risk with our comprehensive Security Advisory services.
              </p>
              <button className="bg-gradient-to-r from-[#241940] to-[#2d1b69] hover:from-[#2d1b69] hover:to-[#241940] text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-xl">
                Speak to us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#2d1b69] via-[#241940] to-[#1e1537] text-white py-16">
        <div className="container mx-auto px-4">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            {/* Services Column */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-cyan-400">Services</h3>
              <ul className="space-y-3">
                <li><a href="/cyber-security-consultancy" className="text-gray-300 hover:text-white transition-colors">Cybersecurity Consultancy</a></li>
                <li><a href="/managed-security" className="text-gray-300 hover:text-white transition-colors">Managed Security</a></li>
                <li><a href="/data-privacy" className="text-gray-300 hover:text-white transition-colors">Data Privacy</a></li>
                <li><a href="/penetration-testing" className="text-gray-300 hover:text-white transition-colors">Penetration Testing</a></li>
              </ul>
            </div>

            {/* About Us Column */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-cyan-400">About Us</h3>
              <ul className="space-y-3">
                <li><a href="/services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
                <li><a href="/why-sbmtech" className="text-gray-300 hover:text-white transition-colors">Why SBM Tech</a></li>
                {/* <li><a href="/insights" className="text-gray-300 hover:text-white transition-colors">Insights</a></li>
                <li><a href="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</a></li> */}
              </ul>
            </div>

            {/* Legal Column */}
            {/* <div>
              <h3 className="text-xl font-bold mb-6 text-cyan-400">Legal</h3>
              <ul className="space-y-3">
                <li><a href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/cookie-policy" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="/terms-of-use" className="text-gray-300 hover:text-white transition-colors">Terms of use</a></li>
                <li><a href="/sitemap" className="text-gray-300 hover:text-white transition-colors">Sitemap</a></li>
              </ul>
            </div> */}

            {/* Contact Column */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-cyan-400">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/>
                  </svg>
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"/>
                  </svg>
                  <span className="text-gray-300">hello@sbmtech.com</span>
                </div>
                <div className="flex space-x-4 mt-6">
                  <a href="#" className="w-10 h-10 bg-cyan-600 hover:bg-cyan-700 rounded-full flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-cyan-600 hover:bg-cyan-700 rounded-full flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Company Logo and Info */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">
              {/* Left Side - Logo and Tagline */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">S</span>
                  </div>
                  <span className="text-2xl font-bold">SBM Tech</span>
                </div>
              </div>

              {/* Right Side - Company Info */}
              <div className="text-sm text-gray-400 max-w-2xl">
                <p className="mb-2">Copyright 2025 SBM Tech</p>
                <p className="mb-1">SBM Tech is the trading name of SBM Tech Consulting Limited, a company registered in England and Wales.</p>
                <p className="mb-1">VAT Registration No: 123456789 | Company Registration No: 11101195.</p>
                <p>Registered Office: Tech Tower, Innovation Road, London, SW1 1LX.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </>
  );
}