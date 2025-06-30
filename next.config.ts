import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Core Cybersecurity News Sources (most important)
      {
        protocol: 'https',
        hostname: 'thehackernews.com',
      },
      {
        protocol: 'https',
        hostname: '1.bp.blogspot.com',
      },
      {
        protocol: 'https',
        hostname: '2.bp.blogspot.com',
      },
      {
        protocol: 'https',
        hostname: '3.bp.blogspot.com',
      },
      {
        protocol: 'https',
        hostname: '4.bp.blogspot.com',
      },
      {
        protocol: 'https',
        hostname: 'www.bleepstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'bleepstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'krebsonsecurity.com',
      },
      {
        protocol: 'https',
        hostname: 'www.csoonline.com',
      },
      {
        protocol: 'https',
        hostname: 'images.idgesg.net',
      },
      {
        protocol: 'https',
        hostname: 'www.infosecurity-magazine.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.infosecurity-magazine.com',
      },
      {
        protocol: 'https',
        hostname: 'www.cyberscoop.com',
      },
      {
        protocol: 'https',
        hostname: 'cyberscoop.com',
      },
      {
        protocol: 'https',
        hostname: 'therecord.media',
      },
      {
        protocol: 'https',
        hostname: 'cms.therecord.media',
      },
      {
        protocol: 'https',
        hostname: 'www.helpnetsecurity.com',
      },
      {
        protocol: 'https',
        hostname: 'securityboulevard.com',
      },
      {
        protocol: 'https',
        hostname: 'www.securityboulevard.com',
      },
      
      // Major Security Publications
      {
        protocol: 'https',
        hostname: 'www.darkreading.com',
      },
      {
        protocol: 'https',
        hostname: 'threatpost.com',
      },
      {
        protocol: 'https',
        hostname: 'media.threatpost.com',
      },
      {
        protocol: 'https',
        hostname: 'www.securityweek.com',
      },
      {
        protocol: 'https',
        hostname: 'www.cybersecuritydive.com',
      },
      {
        protocol: 'https',
        hostname: 'portswigger.net',
      },
      
      // Malware & Threat Intelligence
      {
        protocol: 'https',
        hostname: 'www.malwarebytes.com',
      },
      {
        protocol: 'https',
        hostname: 'blog.malwarebytes.com',
      },
      {
        protocol: 'https',
        hostname: 'www.eset.com',
      },
      {
        protocol: 'https',
        hostname: 'static.eset.com',
      },
      
      // Government & Enterprise
      {
        protocol: 'https',
        hostname: 'us-cert.cisa.gov',
      },
      {
        protocol: 'https',
        hostname: 'www.cisa.gov',
      },
      {
        protocol: 'https',
        hostname: 'www.sans.org',
      },
      {
        protocol: 'https',
        hostname: 'blog.talosintelligence.com',
      },
      {
        protocol: 'https',
        hostname: 'www.fireeye.com',
      },
      
      // Industry Leaders
      {
        protocol: 'https',
        hostname: 'www.scmagazine.com',
      },
      {
        protocol: 'https',
        hostname: 'www.computerweekly.com',
      },
      {
        protocol: 'https',
        hostname: 'securityintelligence.com',
      },
      {
        protocol: 'https',
        hostname: 'www.fortinet.com',
      },
      {
        protocol: 'https',
        hostname: 'blog.checkpoint.com',
      },
      {
        protocol: 'https',
        hostname: 'www.rapid7.com',
      },
      {
        protocol: 'https',
        hostname: 'www.crowdstrike.com',
      },
      
      // Popular Security News
      {
        protocol: 'https',
        hostname: 'www.hackread.com',
      },
      {
        protocol: 'https',
        hostname: 'cybernews.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.cybernews.com',
      },
      
      // Cloud Security
      {
        protocol: 'https',
        hostname: 'aws.amazon.com',
      },
      {
        protocol: 'https',
        hostname: 'cloudblogs.microsoft.com',
      },
      
      // Common CDN services
      {
        protocol: 'https',
        hostname: 'cdn.mos.cms.futurecdn.net',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      }
    ],
  },
};

export default nextConfig;
