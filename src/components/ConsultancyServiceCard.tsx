interface ConsultancyServiceCardProps {
  title: string;
  description: string;
  href: string;
  buttonText?: string;
}

export default function ConsultancyServiceCard({ 
  title, 
  description, 
}: ConsultancyServiceCardProps) {
  return (
    <div className="group relative">
      <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 overflow-hidden hover-lift">
        {/* Gradient accent line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
        
        <div className="p-8 space-y-6">
          {/* Service Icon */}
          <div className="w-14 h-14 bg-gradient-to-br from-[#241940]/10 to-[#2d1b69]/10 rounded-2xl flex items-center justify-center group-hover:from-cyan-500/20 group-hover:to-blue-600/20 transition-all duration-300">
            <svg className="w-8 h-8 text-[#241940] group-hover:text-cyan-600 transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
          </div>
          
          {/* Title */}
          <h3 className="text-xl font-bold text-[#241940] leading-tight group-hover:text-cyan-700 transition-colors duration-300">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-enhanced leading-relaxed line-clamp-4">
            {description}
          </p>
          
          {/* Learn More Link
          <div className="pt-4">
            <Link 
              href={href} 
              className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-semibold text-sm transition-all duration-300 group-hover:gap-2 gap-1"
            >
              Learn More
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
} 