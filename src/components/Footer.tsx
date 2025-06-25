import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#2d1b69] via-[#241940] to-[#1e1537] text-white py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Services Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-cyan-400">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/cyber-security-consultancy" className="text-gray-300 hover:text-white transition-colors">Cybersecurity Consultancy</Link></li>
              <li><Link href="/managed-security-services" className="text-gray-300 hover:text-white transition-colors">Managed Security</Link></li>
              <li><Link href="/data-privacy" className="text-gray-300 hover:text-white transition-colors">Data Privacy</Link></li>
              <li><Link href="/penetration-testing" className="text-gray-300 hover:text-white transition-colors">Penetration Testing</Link></li>
            </ul>
          </div>

          {/* About Us Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-cyan-400">About Us</h3>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/about-us" className="text-gray-300 hover:text-white transition-colors">Why SBM Tech</Link></li>
            </ul>
          </div>

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
                <Link href="#" className="w-10 h-10 bg-cyan-600 hover:bg-cyan-700 rounded-full flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </Link>
                <Link href="#" className="w-10 h-10 bg-cyan-600 hover:bg-cyan-700 rounded-full flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Company Logo and Info */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">
            {/* Left Side - Logo */}
            <div className="flex items-center space-x-4">
              <Image 
                src="/images/company-logo.ico" 
                alt="SBM Tech Logo" 
                width={100} 
                height={35}
                className="transition-all duration-300"
              />
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
  );
} 