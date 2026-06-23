import { useState, useEffect } from 'react';
import { alertMessages } from '../data/mockData';

export default function AlertTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % alertMessages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 text-white py-2 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-sm uppercase tracking-wide whitespace-nowrap">
            Live Updates
          </span>
          <div className="flex-1 overflow-hidden">
            <div 
              className="transition-all duration-500 ease-in-out"
              style={{ transform: `translateY(-${currentIndex * 100}%)` }}
            >
              {alertMessages.map((message, index) => (
                <div 
                  key={index}
                  className="h-6 flex items-center text-sm font-medium"
                >
                  {message}
                </div>
              ))}
            </div>
          </div>
          <span className="animate-pulse text-sm font-bold whitespace-nowrap">●</span>
        </div>
      </div>
    </div>
  );
}
