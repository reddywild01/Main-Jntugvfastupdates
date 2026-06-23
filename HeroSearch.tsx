import { useState } from 'react';
import { notifications } from '../data/mockData';

export default function HeroSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);

  const filteredResults = notifications.filter(n => 
    n.title.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 5);

  // Get top 3 latest notifications
  const topNotifications = notifications.slice(0, 3);

  return (
    <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-8">
          <h2 className="text-white text-2xl sm:text-3xl font-bold text-center mb-6">
            Search JNTUGVFASTUPDATES
          </h2>
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowResults(e.target.value.length > 0);
              }}
              placeholder="Search for results, notifications, hall tickets, circulars..."
              className="w-full px-6 py-4 pr-14 rounded-lg text-lg focus:outline-none focus:ring-4 focus:ring-orange-400 shadow-2xl"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Search Results Dropdown */}
            {showResults && searchQuery && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-2xl max-h-96 overflow-y-auto z-50">
                {filteredResults.length > 0 ? (
                  filteredResults.map((result) => (
                    <a
                      key={result.id}
                      href={result.link}
                      className="block px-6 py-4 hover:bg-blue-50 border-b border-gray-100 last:border-b-0"
                    >
                      <div className="flex items-start space-x-3">
                        <span className="text-2xl mt-1">
                          {result.category === 'results' && '📊'}
                          {result.category === 'hall-tickets' && '🎫'}
                          {result.category === 'notifications' && '🔔'}
                          {result.category === 'calendars' && '📅'}
                          {result.category === 'circulars' && '📋'}
                        </span>
                        <div className="flex-1">
                          <h4 className="text-gray-900 font-medium">{result.title}</h4>
                          <p className="text-sm text-gray-500 mt-1">{result.date}</p>
                        </div>
                      </div>
                    </a>
                  ))
                ) : (
                  <div className="px-6 py-8 text-center text-gray-500">
                    No results found for "{searchQuery}"
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Top 3 Latest Updates */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {topNotifications.map((notification) => (
            <a
              key={notification.id}
              href={notification.link}
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all p-5 rounded-lg border border-white/20 group"
            >
              <div className="flex items-start space-x-3">
                <span className="text-3xl">
                  {notification.category === 'results' && '📊'}
                  {notification.category === 'hall-tickets' && '🎫'}
                  {notification.category === 'notifications' && '🔔'}
                  {notification.category === 'calendars' && '📅'}
                  {notification.category === 'circulars' && '📋'}
                </span>
                <div className="flex-1 min-w-0">
                  {notification.isNew && (
                    <span className="inline-block px-2 py-1 bg-orange-500 text-white text-xs font-bold rounded mb-2">
                      NEW
                    </span>
                  )}
                  <h3 className="text-white font-semibold text-sm line-clamp-2 group-hover:text-orange-300 transition-colors">
                    {notification.title}
                  </h3>
                  <p className="text-blue-200 text-xs mt-2">{notification.date}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
