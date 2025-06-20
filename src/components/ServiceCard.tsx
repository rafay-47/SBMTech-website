import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  color: string;
  popularServices: {
    title: string;
    href: string;
  }[];
  viewMoreHref: string;
}

const getColorClasses = (color: string) => {
  const colorMap = {
    blue: {
      bg: 'from-slate-700 to-slate-600',
      border: 'border-l-slate-600',
      text: 'text-slate-700',
      hover: 'hover:shadow-slate-200/50'
    },
    green: {
      bg: 'from-teal-700 to-teal-600',
      border: 'border-l-teal-600',
      text: 'text-teal-700',
      hover: 'hover:shadow-teal-200/50'
    },
    purple: {
      bg: 'from-indigo-700 to-indigo-600',
      border: 'border-l-indigo-600',
      text: 'text-indigo-700',
      hover: 'hover:shadow-indigo-200/50'
    },
    red: {
      bg: 'from-rose-800 to-rose-700',
      border: 'border-l-rose-700',
      text: 'text-rose-800',
      hover: 'hover:shadow-rose-200/50'
    }
  };
  return colorMap[color as keyof typeof colorMap] || colorMap.blue;
};

export default function ServiceCard({ title, description, icon, color, popularServices, viewMoreHref }: ServiceCardProps) {
  const colorClasses = getColorClasses(color);

  return (
    <div className={`bg-white rounded-xl shadow-lg ${colorClasses.hover} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full`}>
      <div className="p-6 h-full flex flex-col relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-24 h-24 opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <pattern id={`grid-${color}`} width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
            <rect width="100" height="100" fill={`url(#grid-${color})`} />
          </svg>
        </div>

        {/* Header */}
        <div className="flex items-start space-x-4 mb-4 relative z-10">
          <div className={`w-12 h-12 bg-gradient-to-br ${colorClasses.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d={icon} />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#241940] mb-2">{title}</h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
          {description}
        </p>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-4"></div>

        {/* Popular Services */}
        <div className="mb-6">
          <div className="text-sm font-semibold text-gray-700 mb-3">Popular Services:</div>
          <div className="space-y-2">
            {popularServices.slice(0, 3).map((service, index) => (
              <div key={index} className="group">
                <Link 
                  href={service.href} 
                  className="flex items-center text-sm text-gray-600 hover:text-[#241940] transition-colors group"
                >
                  <svg className="w-4 h-4 mr-2 opacity-60 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                  </svg>
                  <span className="group-hover:font-medium transition-all">{service.title}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* View More Button */}
        <div className="mt-auto">
          <Link 
            href={viewMoreHref}
            className={`block w-full text-center py-3 px-4 bg-gradient-to-r ${colorClasses.bg} text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all`}
          >
            View More Services
          </Link>
        </div>
      </div>
    </div>
  );
} 