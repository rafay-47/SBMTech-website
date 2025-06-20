import Link from 'next/link';
import Image from 'next/image';

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  company?: string;
  companyLogo?: string;
  backgroundImage?: string;
  href: string;
}

export default function TestimonialCard({ 
  quote, 
  author, 
  position, 
  company, 
  companyLogo, 
  backgroundImage, 
  href 
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
      <div className="flex flex-col lg:flex-row h-full">
        {/* Image Section */}
        {backgroundImage && (
          <div className="lg:w-2/5 h-48 lg:h-auto relative">
            <Image
              src={backgroundImage}
              alt={company || 'Customer'}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#241940]/20 to-transparent"></div>
          </div>
        )}
        
        {/* Content Section */}
        <div className="lg:w-3/5 p-6 lg:p-8 flex flex-col justify-between">
          {/* Company Logo */}
          {companyLogo && (
            <div className="mb-4">
              <Image
                src={companyLogo}
                alt={`${company} logo`}
                width={120}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </div>
          )}
          
          {/* Quote */}
          <blockquote className="text-gray-700 italic mb-6 text-lg leading-relaxed flex-grow">
            "{quote}"
          </blockquote>
          
          {/* Author and CTA */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div>
              <div className="font-semibold text-[#241940]">{author}</div>
              <div className="text-sm text-gray-600">{position}</div>
              {company && !companyLogo && (
                <div className="text-sm text-gray-500">{company}</div>
              )}
            </div>
            
            <Link 
              href={href}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105 shadow-lg text-center lg:text-left"
            >
              Read their story
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 