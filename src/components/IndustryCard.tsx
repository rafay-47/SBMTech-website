import Link from 'next/link';

interface IndustryCardProps {
  title: string;
  icon: string;
  href: string;
  color?: string;
}

const getColorClasses = (color?: string) => {
  const colorMap = {
    blue: 'hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 hover:border-blue-200',
    green: 'hover:bg-gradient-to-br hover:from-green-50 hover:to-emerald-50 hover:border-green-200',
    purple: 'hover:bg-gradient-to-br hover:from-purple-50 hover:to-violet-50 hover:border-purple-200',
    orange: 'hover:bg-gradient-to-br hover:from-orange-50 hover:to-red-50 hover:border-orange-200',
    cyan: 'hover:bg-gradient-to-br hover:from-cyan-50 hover:to-blue-50 hover:border-cyan-200',
    indigo: 'hover:bg-gradient-to-br hover:from-indigo-50 hover:to-purple-50 hover:border-indigo-200',
  };
  return colorMap[color as keyof typeof colorMap] || colorMap.blue;
};

export default function IndustryCard({ title, icon, href, color = 'blue' }: IndustryCardProps) {
  const colorClasses = getColorClasses(color);

  return (
    <Link href={href} className="block h-full group">
      <div className={`bg-white rounded-xl shadow-lg ${colorClasses} border border-gray-100 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl p-6 text-center h-full flex flex-col justify-center min-h-[200px] relative overflow-hidden`}>
        {/* Background Cyber Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <pattern id={`cyber-${color}`} width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="currentColor" opacity="0.3"/>
                <path d="M0,10 L20,10 M10,0 L10,20" stroke="currentColor" strokeWidth="0.3" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill={`url(#cyber-${color})`} />
          </svg>
        </div>

        {/* Icon */}
        <div className="mb-4 relative z-10">
          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#241940] to-[#2d1b69] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d={icon} />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-[#241940] mb-4 group-hover:text-blue-600 transition-colors relative z-10">
          {title}
        </h3>

        {/* Arrow Button */}
        <div className="text-cyan-600 font-medium group-hover:text-cyan-700 transition-colors flex items-center justify-center relative z-10">
          <span className="mr-2">View Industry</span>
          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
          </svg>
        </div>
      </div>
    </Link>
  );
} 