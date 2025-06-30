import Link from 'next/link';
import Image from 'next/image';

interface NewsItem {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  source: string;
  category?: string;
  imageUrl?: string;
}

interface NewsCardProps {
  news: NewsItem;
}

export default function NewsCard({ news }: NewsCardProps) {
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
    } catch {
      return 'Recent';
    }
  };

  const cleanText = (text: string) => {
    // Clean HTML entities and extra markup
    return text
      .replace(/&quot;/g, '"')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&#8217;/g, "'")
      .replace(/&#8216;/g, "'")
      .replace(/&#8220;/g, '"')
      .replace(/&#8221;/g, '"')
      .replace(/<[^>]*>/g, '') // Remove any remaining HTML tags
      .trim();
  };

  const getCategoryColor = (category?: string) => {
    if (!category) return 'bg-gray-100 text-gray-800';
    
    switch (category.toLowerCase()) {
      case 'cve':
      case 'vulnerability':
        return 'bg-red-100 text-red-800';
      case 'security':
        return 'bg-blue-100 text-blue-800';
      case 'breach':
      case 'incident':
        return 'bg-orange-100 text-orange-800';
      case 'advisory':
        return 'bg-yellow-100 text-yellow-800';
      case 'loading':
        return 'bg-gray-200 text-gray-500 animate-pulse';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group overflow-hidden">
      {/* News Image */}
      {news.imageUrl && (
        <div className="relative h-48 w-full">
          {news.imageUrl.startsWith('/images/') ? (
            // Use Next.js Image for local images
            <Image
              src={news.imageUrl}
              alt={news.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            // Use Next.js Image for external images with unoptimized flag
            <Image
              src={news.imageUrl}
              alt={news.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              unoptimized
              onError={(e) => {
                // Fallback to default image if the external image fails to load
                const target = e.target as HTMLImageElement;
                target.src = '/images/cyber-security-consultancy-banner.jpg';
              }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      )}
      
      <div className="p-6">
        {/* Header with source and date */}
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
              {news.source}
            </span>
            {news.category && (
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${getCategoryColor(news.category)}`}>
                {news.category}
              </span>
            )}
          </div>
          <span className="text-sm text-gray-500">
            {formatDate(news.pubDate)}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {cleanText(news.title)}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm line-clamp-3 mb-4 leading-relaxed">
          {cleanText(news.description)}
        </p>

        {/* Read more link */}
        {news.link !== '#' ? (
          <Link 
            href={news.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors group"
          >
            Read Full Article
            <svg 
              className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ) : (
          <span className="inline-flex items-center text-gray-400 font-medium text-sm">
            <svg className="w-4 h-4 mr-1 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Loading...
          </span>
        )}
      </div>
    </div>
  );
} 