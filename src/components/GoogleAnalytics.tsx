"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";

export default function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;

    const sendPageview = (url?: string) => {
      if (window.gtag) {
        window.gtag("event", "page_view", {
          page_path: url ?? window.location.pathname,
        });
      }
    };

    // Initial page load
    sendPageview();

    // Track SPA route changes
    sendPageview(pathname);
  }, [pathname]);

  return null;
}
