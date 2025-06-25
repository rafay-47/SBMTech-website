import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import BoardMemberCard from "@/components/BoardMemberCard";

export const metadata: Metadata = {
  title: "About Us | SBM Tech",
  description: "SBM Tech is a leading cyber security services company specialising in protecting and transforming critical business functions for some of the world&apos;s most trusted organisations.",
  keywords: "about SBM Tech, cyber security company, security experts, mission, vision, values, team, leadership",
};

export default function AboutUs() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white py-24 overflow-hidden min-h-screen flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cyber-security-consultancy-banner.jpg"
            alt="About SBM Tech Background"
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
              About Us
            </h1>
            <p className="text-xl mb-8 text-gray-300 leading-relaxed">
              SBM Tech is a leading cyber security services company specialising in protecting and transforming critical business functions for some of the world&apos;s most trusted organisations.
            </p>
            <div className="flex gap-6 justify-center flex-wrap">
              <Link href="#why-choose" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-xl">
                Why Choose SBM Tech
              </Link>
              <Link href="#accreditations" className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-[#241940] px-8 py-4 rounded-full font-semibold transition-all">
                Our Accreditations & Certifications
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Building a Secure Future Together Section */}
      <section id="why-choose" className="py-24 bg-white relative overflow-hidden">
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
              Our Foundation
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-[#241940] leading-tight">
              Building a Secure <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Future Together</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our team of security experts work with clients to deliver end-to-end services that solve key business challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="group relative">
              <div className="h-full bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 p-8 text-center border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-[#241940] to-[#2d1b69] rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#241940] mb-6 group-hover:text-cyan-700 transition-colors duration-300">Expertise You Can Trust</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our specialists are highly accredited by major industry bodies and have extensive experience delivering services across Cyber Security, MSS, Penetration Testing, and Data Privacy.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="h-full bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 p-8 text-center border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-[#2d1b69] to-[#1e1537] rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#241940] mb-6 group-hover:text-cyan-700 transition-colors duration-300">Serving Clients Globally</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our headquarters is in the UK where we run a 24/7 Security Operations Centre (SOC) which has expanded into the US to further support global clients. Since being founded in 2013, SBM Tech has grown rapidly and is now one of the UK&apos;s largest independent cyber security services providers.
                </p>
              </div>
            </div>

            <div className="group relative" id="accreditations">
              <div className="h-full bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 p-8 text-center border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-[#1e1537] to-[#241940] rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.1 16,12.7V16.2C16,16.8 15.4,17.3 14.8,17.3H9.2C8.6,17.3 8,16.8 8,16.2V12.7C8,12.1 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7Z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#241940] mb-6 group-hover:text-cyan-700 transition-colors duration-300">ISO Certifications</h3>
                <p className="text-gray-600 leading-relaxed">
                  We are certified in the following ISO certifications: ISO 27001 (Information Security), ISO 27701 (Privacy), ISO 9001 (Quality), and operate to ISO 22301 (Business Continuity) standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-cyan-100/20 to-blue-100/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-br from-purple-100/20 to-indigo-100/20 rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-full text-sm font-semibold text-cyan-700 mb-4">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  Our Purpose
                </div>
                <h2 className="text-5xl lg:text-6xl font-bold text-[#241940] leading-tight">
                  Our Mission <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">and Vision</span>
                </h2>
              </div>
              
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-2xl p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#241940] to-[#2d1b69] rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#241940] mb-4">Our Mission</h3>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        To transform and protect critical business functions by delivering modern cyber security services.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-2xl p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#2d1b69] to-[#1e1537] rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#241940] mb-4">Our Vision</h3>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        To create a safe, inclusive digital world where people and organisations can thrive.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative group">
                <Image 
                  src="/images/team-image.jpg" 
                  alt="Cyber Resilience Team" 
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

      {/* Our Values Section */}
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
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              What Drives Us
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-[#241940] leading-tight">
              Our <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-semibold">
              The strength of our relationships with clients and our success as a team is built upon our values. They guide every decision we make and ensure the best outcomes for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="group relative">
              <div className="h-full bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-full h-full text-cyan-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#241940] mb-6 group-hover:text-cyan-700 transition-colors duration-300">Do the Right Thing</h3>
                <p className="text-gray-700 leading-relaxed font-semibold">
                  Always authentic, professional and<br />accountable.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="h-full bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-full h-full text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17M2 12L12 17L22 12"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#241940] mb-6 group-hover:text-purple-700 transition-colors duration-300">One Team</h3>
                <p className="text-gray-700 leading-relaxed font-semibold">
                  Always energetic, empathetic and an<br />extension of our clients&apos; teams.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="h-full bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-full h-full text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#241940] mb-6 group-hover:text-green-700 transition-colors duration-300">Above & Beyond</h3>
                <p className="text-gray-700 leading-relaxed font-semibold">
                  Always delivering an exceptional,<br />adaptable and expert service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board Members Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-cyan-100/20 to-blue-100/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-br from-purple-100/20 to-indigo-100/20 rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-full text-sm font-semibold text-cyan-700 mb-4">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Leadership Team
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-[#241940] leading-tight">
              Board <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Members</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meet the experienced leadership team driving SBM Tech&apos;s mission to protect and transform critical business functions.
            </p>
          </div>

          {/* CEO - Full Width */}
          <div className="mb-16">
            <BoardMemberCard
              name="Anthony Young"
              title="Chief Executive Officer"
              image="/images/business-image.jpg"
              bio="Anthony is Chief Executive Officer at SBM Tech and founded the company in 2013 with the aim of building a world-class cyber security company focused on high quality delivery of complex cyber programmes whilst building long-term client relationships. Anthony has a passion for business improvement combined with a strong business development background and large network of contacts built up from over 20 years working in the cyber security industry. Anthony&apos;s responsibilities within SBM Tech cover business growth and development, marketing, finance, and operations."
              isFullWidth={true}
            />
          </div>

          {/* Other Board Members - Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <BoardMemberCard
              name="Martin Riley"
              title="Chief Technology Officer"
              image="/images/team-image.jpg"
              bio="Martin joined SBM Tech in 2021 and is responsible for leading the continued growth and development of SBM Tech&apos;s managed security portfolio, comprising of cyber threat intelligence, security operations (including our managed detection and response service), and incident response capabilities. Martin has 20 years&apos; experience and a passion for inspiring, developing and delivering leading, client focused operational solutions across security, cloud, and network. Prior to joining SBM Tech, he held other C-Suite roles where he was responsible for the strategic direction and service development within several service providers."
            />

            <BoardMemberCard
              name="Ben Vaughan"
              title="Chief Commercial Officer"
              image="/images/businessImage.png"
              bio="Ben is the Chief Commercial Officer (CCO) at SBM Tech and is responsible for driving business growth by leading our Sales, Marketing and Bid teams. Ben joined SBM Tech in 2024 and brings a wealth of international experience from working with clients in CNI, defence, aerospace and enterprise across the UK, USA and Western Europe over the past 14 years. Prior to SBM Tech, Ben was the Global Marketing Director at AIRBUS Cyber Security and the Managing Director of Thales&apos; Cyber Defence Solutions business for North America. Ben brings an in-depth knowledge of key markets, with a focus on helping customers solve complex security challenges in the IT and Operational Technology (OT) space."
            />

            <BoardMemberCard
              name="Ruth Billen"
              title="Chief Financial Officer"
              image="/images/business-image.jpg"
              bio="Ruth is an experienced finance professional who has worked within privately owned and private equity backed businesses to support growth and develop the finance functions. After training with PwC in Bristol, Ruth has worked in a range of industries including managed services, across the IT and healthcare sectors. Ruth has a focus on system development and automation to ensure that the finance function supports the rapidly growing business through the efficient provision of financial information, commercial support and financial control."
            />

            <BoardMemberCard
              name="Sam Thornton"
              title="Chief Operating Officer"
              image="/images/team-image.jpg"
              bio="Sam is SBM Tech&apos;s Chief Operating Officer (COO) and is responsible for enhancing its global reputation for security services while also strengthening client relationships, ensuring exceptional support, and contributing to the board&apos;s strategic direction. Sam brings 20 years of experience in cyber security, including 12 years in consulting, and has a strong track record in managing large-scale, complex strategic engagements. Having held roles such as Head of Security, Lead Information Risk Manager, and Account Security Manager, Sam also brings expertise across stakeholder management, information assurance, and risk advisory."
            />
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
                Speak to our Team
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Embark on a journey to increase your cyber resilience, improve your cyber security posture, and reduce your cyber security risk with our comprehensive Security Advisory services.
              </p>
              <Link href="/contact-us" className="inline-flex items-center bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-xl">
                Speak to us
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Right Content - Professional Image */}
            <div className="relative h-full min-h-[500px]">
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <Image 
                  src="/images/businessImage.png" 
                  alt="Professional Team Consultation" 
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
