import Link from 'next/link';
import Image from 'next/image';

interface InsightCardProps {
  title: string;
  href: string;
  imageUrl: string;
  type: 'guide' | 'webinar' | 'event' | 'blog';
  isPopular?: boolean;
  date?: string;
  time?: string;
}

const getTypeColor = (type: string) => {
  const typeMap = {
    guide: 'bg-blue-600',
    webinar: 'bg-purple-600',
    event: 'bg-green-600',
    blog: 'bg-gray-600'
  };
  return typeMap[type as keyof typeof typeMap] || typeMap.guide;
};

const getTypeLabel = (type: string) => {
  const labelMap = {
    guide: 'Guide',
    webinar: 'Webinar',
    event: 'In Person Event',
    blog: 'Blog Post'
  };
  return labelMap[type as keyof typeof labelMap] || 'Guide';
};

export default function InsightCard({ 
  title, 
  href, 
  imageUrl, 
  type, 
  isPopular = false, 
  date, 
  time 
}: InsightCardProps) {
  return (
    <Link href={href} className="block group h-full">
      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden h-full">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Tags */}
          <div className="flex items-center justify-between mb-4">
            <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getTypeColor(type)}`}>
              {getTypeLabel(type)}
            </span>
            {isPopular && (
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-orange-500 to-red-500 text-white">
                Popular
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-[#241940] mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
            {title}
          </h3>

          {/* Date/Time for events and webinars */}
          {(date || time) && (
            <div className="text-sm text-gray-600 mb-4">
              {date && <span>{date}</span>}
              {date && time && <span> | </span>}
              {time && <span>{time}</span>}
            </div>
          )}

          {/* Hover Arrow */}
          <div className="flex items-center text-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-sm font-medium mr-2">Read more</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
} 