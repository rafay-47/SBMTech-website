'use client';

import { useState, useEffect } from 'react';
import NewsCard from './NewsCard';

interface NewsItem {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  source: string;
  category?: string;
  imageUrl?: string;
}

interface NewsResponse {
  success: boolean;
  news: NewsItem[];
  lastUpdated: string;
  error?: string;
  fetchTimeMs?: number;
  totalFeeds?: number;
  successfulFeeds?: number;
}

const DEMO_NEWS: NewsItem[] = [
  {
    title: "Loading Latest Cybersecurity News...",
    description: "Fetching the latest security threats, vulnerabilities, and industry updates from trusted sources.",
    link: "#",
    pubDate: new Date().toISOString(),
    source: "Loading",
    category: "Loading",
    imageUrl: "/images/cyber-security-consultancy-banner.jpg"
  },
  {
    title: "CVE Updates in Progress...",
    description: "Getting the most recent Common Vulnerabilities and Exposures from security databases.",
    link: "#",
    pubDate: new Date().toISOString(),
    source: "Loading",
    category: "CVE",
    imageUrl: "/images/managed-security.jpg"
  },
  {
    title: "Security News Aggregation...",
    description: "Collecting breaking cybersecurity news from The Hacker News, BleepingComputer, and more.",
    link: "#",
    pubDate: new Date().toISOString(),
    source: "Loading",
    category: "Security",
    imageUrl: "/images/penetration-testing-team.jpg"
  }
];

export default function CyberSecurityNews() {
  const [news, setNews] = useState<NewsItem[]>(DEMO_NEWS);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string>('');

  useEffect(() => {
    // Fetch news immediately on mount
    fetchNews();
    
    // Set up auto-refresh every 5 minutes
    const interval = setInterval(() => {
      fetchNews(true); // Silent refresh
    }, 5 * 60 * 1000); // 5 minutes

    return () => clearInterval(interval);
  }, []);

  const fetchNews = async (silent = false) => {
    try {
      if (!silent) {
        setLoading(true);
      }
      
      const fetchStartTime = Date.now();
      console.log("🚀 Starting news fetch from browser...");
      
      // Add cache-busting parameter for fresh news
      const cacheBuster = `?t=${Date.now()}`;
      const response = await fetch(`/api/cybersecurity-news${cacheBuster}`);
      const fetchEndTime = Date.now();
      console.log(`📡 API response received in ${fetchEndTime - fetchStartTime}ms`);
      
      const data: NewsResponse = await response.json();
      console.log("📊 API Response Data:", {
        success: data.success,
        newsCount: data.news?.length || 0,
        serverFetchTime: data.fetchTimeMs,
        totalFeeds: data.totalFeeds,
        successfulFeeds: data.successfulFeeds
      });
      
      if (data.success) {
        setNews(data.news || []);
        setLastUpdated(data.lastUpdated);
        setError(null);
        console.log('Successfully set news:', data.news?.length || 0, 'items');
      } else {
        setNews(data.news || []); // Show fallback data
        setError(data.error || 'Failed to fetch news');
        console.log('API returned error, using fallback data:', data.news?.length || 0);
      }
    } catch (err) {
      console.error('Error fetching news:', err);
      setError('Failed to load cybersecurity news');
      // Set some fallback news
      setNews([
        {
          title: 'Cybersecurity News Loading...',
          description: 'Please refresh the page to load the latest cybersecurity news and CVE updates.',
          link: '#',
          pubDate: new Date().toISOString(),
          source: 'System',
          category: 'Notice'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const formatLastUpdated = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return 'Recently';
    }
  };

  const handleRefreshClick = () => {
    fetchNews(false);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-100/30 to-cyan-100/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-indigo-100/25 to-purple-100/25 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-br from-teal-100/20 to-blue-100/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Security Icons */}
        <div className="absolute top-32 right-16 w-6 h-6 text-blue-300/40 animate-bounce" style={{animationDelay: '1s'}}>
          <svg fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z"/>
          </svg>
        </div>
        <div className="absolute bottom-32 left-20 w-5 h-5 text-cyan-300/35 animate-pulse" style={{animationDelay: '3s'}}>
          <svg fill="currentColor" viewBox="0 0 24 24">
            <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.1 16,12.7V16.2C16,16.8 15.4,17.3 14.8,17.3H9.2C8.6,17.3 8,16.8 8,16.2V12.7C8,12.1 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7Z"/>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#241940] mb-4">
            Latest Cybersecurity News & CVE Updates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Stay informed with the latest cybersecurity threats, vulnerabilities, and industry news 
            from trusted sources around the globe.
          </p>
          
          {/* Status Bar */}
          <div className="flex justify-center items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${error ? 'bg-yellow-400' : 'bg-green-400'}`}></div>
              <span>{error ? 'Limited connectivity' : 'Live updates'}</span>
            </div>
            {lastUpdated && (
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Last updated: {formatLastUpdated(lastUpdated)}</span>
              </div>
            )}
            <button 
              onClick={handleRefreshClick}
              disabled={loading}
              className="text-blue-600 hover:text-blue-800 font-medium disabled:opacity-50 transition-colors"
            >
              {loading ? 'Refreshing...' : 'Refresh'}
            </button>
          </div>
        </div>


        {/* News Grid */}
        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 animate-pulse">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div className="h-6 bg-gray-200 rounded-full w-24"></div>
                    <div className="h-4 bg-gray-200 rounded w-16"></div>
                  </div>
                  <div className="h-6 bg-gray-200 rounded mb-3"></div>
                  <div className="space-y-2 mb-4">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </div>
                  <div className="h-4 bg-gray-200 rounded w-32"></div>
                </div>
              </div>
            ))}
          </div>
        ) : news.length > 0 ? (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {news.slice(0, 6).map((newsItem, index) => {
                console.log('Rendering news item:', newsItem);
                return (
                  <NewsCard key={`${newsItem.source}-${index}-${newsItem.title.substring(0, 20)}`} news={newsItem} />
                );
              })}
            </div>

            {/* Show More Button */}
            {/* {news.length > 6 && (
              <div className="text-center">
                <button className="bg-gradient-to-r from-[#241940] to-[#2d1b69] hover:from-[#2d1b69] hover:to-[#241940] text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-xl">
                  View All Security News
                </button>
              </div>
            )} */}
          </>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-500 mb-4">
              <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              <p className="text-lg font-medium text-gray-700 mb-2">No news available</p>
              <p className="text-sm text-gray-500">Unable to fetch cybersecurity news at the moment. Please try refreshing.</p>
            </div>
            <button 
              onClick={handleRefreshClick}
              className="bg-gradient-to-r from-[#241940] to-[#2d1b69] hover:from-[#2d1b69] hover:to-[#241940] text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-800 text-center">
            <p className="font-medium">Note: {error}</p>
            <p className="text-sm mt-1">Some news sources may be temporarily unavailable. Please try refreshing the page.</p>
          </div>
        )}

        {/* News Sources */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-3">News sources include:</p>
          <div className="flex flex-wrap justify-center gap-2 text-xs text-gray-400">
            <span className="bg-white px-3 py-1 rounded-full border">The Hacker News</span>
            <span className="bg-white px-3 py-1 rounded-full border">BleepingComputer</span>
            <span className="bg-white px-3 py-1 rounded-full border">Krebs on Security</span>
            <span className="bg-white px-3 py-1 rounded-full border">CSO Online</span>
            <span className="bg-white px-3 py-1 rounded-full border">Infosecurity Magazine</span>
            <span className="bg-white px-3 py-1 rounded-full border">CyberScoop</span>
            <span className="bg-white px-3 py-1 rounded-full border">The Record</span>
            <span className="bg-white px-3 py-1 rounded-full border">Help Net Security</span>
            <span className="bg-white px-3 py-1 rounded-full border">Security Boulevard</span>
          </div>
        </div>
      </div>
    </section>
  );
} 