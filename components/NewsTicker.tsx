'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const newsItems = [
  { id: 1, text: "Abstract Submission date is extended till 25/04/2026.", link: "/call-for-papers" },
  { id: 3, text: "Abstract template and Paper template are available now for download.", link: "/call-for-papers" },
]; 
export default function NewsTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newsItems.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-primary/10 border-y border-primary/20 backdrop-blur-md relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center">
        <div className="flex-shrink-0 mr-4">
          <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wider flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            Latest News
          </span>
        </div>
        <div className="flex-1 overflow-hidden relative h-6">
          {newsItems.map((item, index) => (
            <div
              key={item.id}
              className={`absolute top-0 left-0 w-full transition-all duration-500 flex items-center ${
                index === currentIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
              }`}
            >
              <Link href={item.link} className="text-sm font-medium text-foreground hover:text-primary transition-colors truncate block">
                {item.text}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
