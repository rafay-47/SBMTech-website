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
      bg: 'from-[#241940] to-[#2d1b69]',
      border: 'border-l-[#2d1b69]',
      text: 'text-[#241940]',
      hover: 'hover:shadow-cyan-200/50'
    },
    green: {
      bg: 'from-[#2d1b69] to-[#1e1537]',
      border: 'border-l-[#1e1537]',
      text: 'text-[#2d1b69]',
      hover: 'hover:shadow-cyan-200/50'
    },
    purple: {
      bg: 'from-[#1e1537] to-[#241940]',
      border: 'border-l-[#241940]',
      text: 'text-[#1e1537]',
      hover: 'hover:shadow-purple-200/50'
    },
    red: {
      bg: 'from-[#241940] to-[#1e1537]',
      border: 'border-l-[#1e1537]',
      text: 'text-[#241940]',
      hover: 'hover:shadow-cyan-200/50'
    }
  };
  return colorMap[color as keyof typeof colorMap] || colorMap.blue;
};

export default function ServiceCard({ title, description, icon, color, popularServices, viewMoreHref }: ServiceCardProps) {
  const colorClasses = getColorClasses(color);

  return (
    <div className="group bg-gradient-to-br from-[#2d1b69] via-[#241940] to-[#1e1537] rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 h-full border border-[#2d1b69]/50 hover:border-cyan-400/30 overflow-hidden relative">
      <div className="p-8 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start space-x-4 mb-6">
          <div className={`w-14 h-14 bg-gradient-to-br ${colorClasses.bg} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d={icon} />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">{title}</h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 mb-8 leading-relaxed flex-grow text-lg">
          {description}
        </p>

        {/* Divider */}
        <div className="border-t border-cyan-400/20 mb-6"></div>

        {/* Popular Services */}
        <div className="mb-8">
          <div className="text-sm font-semibold text-cyan-400 mb-4 uppercase tracking-wider">Popular Services</div>
          <div className="space-y-3">
            {popularServices.slice(0, 3).map((service, index) => (
              <div key={index} className="group/item">
                <div className="flex items-center text-gray-300 hover:text-white transition-all duration-300 group/item p-2 rounded-lg hover:bg-[#2d1b69]/30">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${colorClasses.bg} mr-3 group-hover/item:scale-125 transition-transform duration-300`}></div>
                  <span className="group-hover/item:font-medium transition-all duration-300 text-sm">{service.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More Button */}
        <div className="mt-auto">
          <Link 
            href={viewMoreHref}
            className={`block w-full text-center py-4 px-6 bg-gradient-to-r ${colorClasses.bg} hover:from-cyan-500 hover:to-cyan-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-cyan-400/30`}
          >
            View More Services
          </Link>
        </div>
      </div>
    </div>
  );
} 