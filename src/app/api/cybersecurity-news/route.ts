import { NextResponse } from 'next/server';

interface NewsItem {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  source: string;
  category?: string;
  imageUrl?: string;
}

// RSS feed sources for cybersecurity news (expanded for comprehensive coverage)
const RSS_FEEDS = [
  // Core Cybersecurity News
  {
    url: 'https://feeds.feedburner.com/TheHackersNews',
    source: 'The Hacker News',
    category: 'Security'
  },
  {
    url: 'https://www.bleepingcomputer.com/feed/',
    source: 'BleepingComputer',
    category: 'Security'
  },
  {
    url: 'https://krebsonsecurity.com/feed/',
    source: 'Krebs on Security',
    category: 'Security'
  },
  {
    url: 'https://www.csoonline.com/feed/',
    source: 'CSO Online',
    category: 'Security'
  },
  {
    url: 'https://www.infosecurity-magazine.com/rss/news/',
    source: 'Infosecurity Magazine',
    category: 'Security'
  },
  {
    url: 'https://cyberscoop.com/feed/',
    source: 'CyberScoop',
    category: 'Security'
  },
  {
    url: 'https://therecord.media/feed/',
    source: 'The Record',
    category: 'Security'
  },
  {
    url: 'https://www.helpnetsecurity.com/feed/',
    source: 'Help Net Security',
    category: 'Security'
  },
  {
    url: 'https://securityboulevard.com/feed/',
    source: 'Security Boulevard',
    category: 'Security'
  },
  
  // Additional Hacker News & Security Sources
  {
    url: 'https://www.darkreading.com/rss.xml',
    source: 'Dark Reading',
    category: 'Security'
  },
  {
    url: 'https://threatpost.com/feed/',
    source: 'Threatpost',
    category: 'Threats'
  },
  {
    url: 'https://www.securityweek.com/feed/',
    source: 'Security Week',
    category: 'Security'
  },
  {
    url: 'https://www.cybersecuritydive.com/feeds/',
    source: 'Cybersecurity Dive',
    category: 'Security'
  },
  {
    url: 'https://portswigger.net/rss',
    source: 'PortSwigger',
    category: 'Security Research'
  },
  
  // CVE and Vulnerability Sources
  {
    url: 'https://www.cvedetails.com/rss-feeds/',
    source: 'CVE Details',
    category: 'CVE'
  },
  {
    url: 'https://feeds.feedburner.com/eset',
    source: 'ESET Security',
    category: 'Threats'
  },
  {
    url: 'https://www.malwarebytes.com/blog/feed/',
    source: 'Malwarebytes',
    category: 'Malware'
  },
  {
    url: 'https://blog.malwarebytes.com/feed/',
    source: 'Malwarebytes Labs',
    category: 'Research'
  },
  
  // Enterprise & Government Security
  {
    url: 'https://us-cert.cisa.gov/ncas/alerts.xml',
    source: 'CISA Alerts',
    category: 'Government'
  },
  {
    url: 'https://www.sans.org/feeds/newswire',
    source: 'SANS NewsBites',
    category: 'Education'
  },
  {
    url: 'https://blog.talosintelligence.com/feeds/',
    source: 'Cisco Talos',
    category: 'Threat Intelligence'
  },
  {
    url: 'https://www.fireeye.com/blog/feed',
    source: 'FireEye',
    category: 'Threat Intelligence'
  },
  
  // Additional Industry Sources
  {
    url: 'https://www.scmagazine.com/feed/',
    source: 'SC Magazine',
    category: 'Security'
  },
  {
    url: 'https://www.computerweekly.com/rss/Security.xml',
    source: 'Computer Weekly Security',
    category: 'Security'
  },
  {
    url: 'https://securityintelligence.com/feed/',
    source: 'Security Intelligence',
    category: 'Intelligence'
  },
  {
    url: 'https://www.fortinet.com/blog/rss.xml',
    source: 'Fortinet Blog',
    category: 'Security'
  },
  {
    url: 'https://blog.checkpoint.com/feed/',
    source: 'Check Point',
    category: 'Security'
  },
  
  // Open Source & Research
  {
    url: 'https://www.openwall.com/lists/oss-security/rss.xml',
    source: 'OSS Security',
    category: 'Open Source'
  },
  {
    url: 'https://www.rapid7.com/blog/rss/',
    source: 'Rapid7',
    category: 'Research'
  },
  {
    url: 'https://www.crowdstrike.com/blog/feed/',
    source: 'CrowdStrike',
    category: 'Threat Intelligence'
  },
  
  // Regional & Specialized
  {
    url: 'https://www.hackread.com/feed/',
    source: 'HackRead',
    category: 'Hacking News'
  },
  {
    url: 'https://cybernews.com/feed/',
    source: 'CyberNews',
    category: 'Security'
  },
  {
    url: 'https://www.techrepublic.com/rssfeeds/topic/security/',
    source: 'TechRepublic Security',
    category: 'Security'
  },
  
  // Cloud Security
  {
    url: 'https://cloudsecurityalliance.org/feed/',
    source: 'Cloud Security Alliance',
    category: 'Cloud Security'
  },
  {
    url: 'https://aws.amazon.com/blogs/security/feed/',
    source: 'AWS Security Blog',
    category: 'Cloud Security'
  },
  {
    url: 'https://cloudblogs.microsoft.com/microsoftsecure/feed/',
    source: 'Microsoft Security',
    category: 'Cloud Security'
  }
];

// Simple XML parser for RSS feeds with improved CDATA handling
interface ParsedItem {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  imageUrl?: string;
}

function parseXML(xmlString: string): ParsedItem[] {
  try {
    // This is a basic XML parser - in production, you might want to use a proper XML parsing library
    const items: ParsedItem[] = [];
    
    // Extract items from RSS feed
    const itemMatches = xmlString.match(/<item[^>]*>([\s\S]*?)<\/item>/gi);
    if (!itemMatches) return items;

    itemMatches.forEach(item => {
      // Helper function to extract content from XML tags with CDATA support
      const extractContent = (tagName: string, content: string): string => {
        const patterns = [
          // CDATA pattern
          new RegExp(`<${tagName}[^>]*><!\\[CDATA\\[(.*?)\\]\\]></${tagName}>`, 'i'),
          // Regular content pattern
          new RegExp(`<${tagName}[^>]*>(.*?)</${tagName}>`, 'i')
        ];
        
        for (const pattern of patterns) {
          const match = content.match(pattern);
          if (match && match[1]) {
            return match[1].trim();
          }
        }
        return '';
      };
      
      const title = extractContent('title', item);
      const description = extractContent('description', item);
      const link = extractContent('link', item);
      const pubDate = extractContent('pubDate', item);
      
      // Extract image URL from various RSS sources
      let imageUrl = '';
      
      // Try to find image in enclosure tag
      const enclosure = item.match(/<enclosure[^>]*url=['"](.*?)['"][^>]*type=['"]image[^'"]*['"]/i);
      if (enclosure) {
        imageUrl = enclosure[1];
      }
      
      // Try to find image in media:content or media:thumbnail
      if (!imageUrl) {
        const mediaContent = item.match(/<media:content[^>]*url=['"](.*?)['"][^>]*medium=['"]image['"]/i) ||
                           item.match(/<media:thumbnail[^>]*url=['"](.*?)['"][^>]*>/i);
        if (mediaContent) {
          imageUrl = mediaContent[1];
        }
      }
      
      // Try to find image in description HTML
      if (!imageUrl) {
        const descText = description || '';
        const imgInDesc = descText.match(/<img[^>]*src=['"](.*?)['"][^>]*>/i);
        if (imgInDesc) {
          imageUrl = imgInDesc[1];
        }
      }

      // Clean up and validate the extracted data
      if (title && description && link) {
        // Clean the description by removing HTML tags and decoding entities
        const cleanDescription = description
          .replace(/<[^>]*>/g, '') // Remove HTML tags
          .replace(/&amp;/g, '&')
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/&quot;/g, '"')
          .replace(/&#39;/g, "'")
          .replace(/&nbsp;/g, ' ')
          .trim()
          .substring(0, 200);

        items.push({
          title: title,
          description: cleanDescription,
          link: link,
          pubDate: pubDate || new Date().toISOString(),
          imageUrl: imageUrl.trim() || undefined
        });
      }
    });

    return items;
  } catch (error) {
    console.error('Error parsing XML:', error);
    return [];
  }
}

async function fetchRSSFeed(feedUrl: string, source: string, category: string): Promise<NewsItem[]> {
  const startTime = Date.now();
  try {
    //console.log(`Fetching RSS feed from: ${feedUrl}`);
    
    // Create a timeout promise
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error(`Timeout: ${source} took too long`)), 10000); // 10 second timeout
    });
    
    // Race between fetch and timeout
    const response = await Promise.race([
      fetch(feedUrl, {
        headers: {
          'User-Agent': 'SBMTech-Website/1.0'
        },
        next: { revalidate: 300 }, // Cache for 5 minutes
      }),
      timeoutPromise
    ]) as Response;

    if (!response.ok) {
      console.error(`Failed to fetch ${source}: ${response.status}`);
      return [];
    }

    const xmlText = await response.text();
    const items = parseXML(xmlText);
    
    //console.log(`✅ ${source} fetched successfully in ${Date.now() - startTime}ms (${items.length} items)`);

    // Fallback images for different sources using existing cybersecurity images
    const getFallbackImage = (sourceName: string) => {
      const fallbackImages = {
        // Core Cybersecurity News
        'The Hacker News': '/images/cyber-security-consultancy-banner.jpg',
        'BleepingComputer': '/images/managed-security.jpg',
        'Krebs on Security': '/images/penetration-testing-team.jpg',
        'CSO Online': '/images/data-privacy-team.jpg',
        'Infosecurity Magazine': '/images/securing.avif',
        'CyberScoop': '/images/pointing-monitor.jpg',
        'The Record': '/images/key-challenges.jpg',
        'Help Net Security': '/images/importance-of-cyber-security-consultancy.jpg',
        'Security Boulevard': '/images/managed-security-services-banner.webp',
        
        // Additional Hacker News & Security Sources
        'Dark Reading': '/images/data-privacy-banner.webp',
        'Threatpost': '/images/penetration-testing-banner.webp',
        'Security Week': '/images/cyber-security-consultancy-banner.jpg',
        'Cybersecurity Dive': '/images/managed-security.jpg',
        'PortSwigger': '/images/penetration-testing-team.jpg',
        
        // CVE and Vulnerability Sources
        'CVE Details': '/images/key-challenges.jpg',
        'ESET Security': '/images/securing.avif',
        'Malwarebytes': '/images/managed-security-services-banner.webp',
        'Malwarebytes Labs': '/images/importance-of-cyber-security-consultancy.jpg',
        
        // Enterprise & Government Security
        'CISA Alerts': '/images/data-privacy-team.jpg',
        'SANS NewsBites': '/images/pointing-monitor.jpg',
        'Cisco Talos': '/images/cyber-security-consultancy-banner.jpg',
        'FireEye': '/images/penetration-testing-banner.webp',
        
        // Additional Industry Sources
        'SC Magazine': '/images/managed-security.jpg',
        'Computer Weekly Security': '/images/data-privacy-banner.webp',
        'Security Intelligence': '/images/securing.avif',
        'Fortinet Blog': '/images/managed-security-services-banner.webp',
        'Check Point': '/images/key-challenges.jpg',
        
        // Open Source & Research
        'OSS Security': '/images/penetration-testing-team.jpg',
        'Rapid7': '/images/importance-of-cyber-security-consultancy.jpg',
        'CrowdStrike': '/images/pointing-monitor.jpg',
        
        // Regional & Specialized
        'HackRead': '/images/cyber-security-consultancy-banner.jpg',
        'CyberNews': '/images/managed-security.jpg',
        'TechRepublic Security': '/images/data-privacy-team.jpg',
        
        // Cloud Security
        'Cloud Security Alliance': '/images/data-privacy-banner.webp',
        'AWS Security Blog': '/images/securing.avif',
        'Microsoft Security': '/images/managed-security-services-banner.webp'
      };
      return fallbackImages[sourceName as keyof typeof fallbackImages] || '/images/cyber-security-consultancy-banner.jpg';
    };

    return items.slice(0, 5).map((item: ParsedItem) => ({
      title: item.title,
      description: item.description,
      link: item.link,
      pubDate: item.pubDate,
      source,
      category,
      imageUrl: item.imageUrl || getFallbackImage(source)
    }));
  } catch (error) {
    const fetchTime = Date.now() - startTime;
    console.error(`❌ ${source} failed after ${fetchTime}ms:`, error instanceof Error ? error.message : error);
    return [];
  }
}

export async function GET() {
  try {
    //console.log('Starting RSS feed fetch...');
    const startTime = Date.now();
    
    // Fetch news from multiple RSS feeds in parallel
    const feedPromises = RSS_FEEDS.map(feed => 
      fetchRSSFeed(feed.url, feed.source, feed.category)
    );

    const allFeeds = await Promise.allSettled(feedPromises);
    const fetchTime = Date.now() - startTime;
    //console.log(`RSS feeds fetched in ${fetchTime}ms`);
    
    // Combine all successful feeds
    const allNews: NewsItem[] = [];
    allFeeds.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        allNews.push(...result.value);
      } else {
        console.error(`Feed ${RSS_FEEDS[index].source} failed:`, result.reason);
      }
    });

    // Sort by publication date (newest first)
    allNews.sort((a, b) => {
      const dateA = new Date(a.pubDate);
      const dateB = new Date(b.pubDate);
      return dateB.getTime() - dateA.getTime();
    });

    // Return the latest 24 items (increased from 12 due to more sources)
    const latestNews = allNews.slice(0, 24);
    
    //console.log(`Returning ${latestNews.length} news items`);

    return NextResponse.json({
      success: true,
      news: latestNews,
      lastUpdated: new Date().toISOString(),
      fetchTimeMs: fetchTime,
      totalFeeds: RSS_FEEDS.length,
      successfulFeeds: allFeeds.filter(f => f.status === 'fulfilled').length
    });
  } catch (error) {
    console.error('Error in cybersecurity news API:', error);
    
    // Return fallback data in case of errors
    return NextResponse.json({
      success: false,
      news: [
        {
          title: 'Sample Cybersecurity News',
          description: 'This is a sample news item. Real news will be displayed when RSS feeds are accessible.',
          link: '#',
          pubDate: new Date().toISOString(),
          source: 'Sample Source',
          category: 'Security'
        }
      ],
      lastUpdated: new Date().toISOString(),
      error: 'Failed to fetch live news feeds'
    });
  }
} 