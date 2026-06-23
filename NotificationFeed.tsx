import { notifications } from '../data/mockData';

interface NotificationFeedProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function NotificationFeed({ selectedCategory, onCategoryChange }: NotificationFeedProps) {
  const categories = [
    { id: 'all', label: 'All Updates', icon: '📢' },
    { id: 'results', label: 'Results', icon: '📊' },
    { id: 'hall-tickets', label: 'Hall Tickets', icon: '🎫' },
    { id: 'calendars', label: 'Calendars', icon: '📅' },
    { id: 'notifications', label: 'Notifications', icon: '🔔' },
    { id: 'circulars', label: 'Circulars', icon: '📋' }
  ];

  const filteredNotifications = selectedCategory === 'all' 
    ? notifications 
    : notifications.filter(n => n.category === selectedCategory);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 px-6 py-4">
        <h2 className="text-white text-xl font-bold flex items-center">
          <span className="mr-2">🔴</span>
          Live Notification Feed
        </h2>
      </div>

      {/* Category Filter */}
      <div className="border-b border-gray-200 px-4 py-3 bg-gray-50">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-orange-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <span className="mr-1">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Notification List */}
      <div className="divide-y divide-gray-200 max-h-[800px] overflow-y-auto">
        {filteredNotifications.map((notification) => (
          <a
            key={notification.id}
            href={notification.link}
            className="block px-6 py-5 hover:bg-blue-50 transition-colors group"
          >
            <div className="flex items-start space-x-4">
              {/* Icon */}
              <div className="text-3xl flex-shrink-0 mt-1">
                {notification.category === 'results' && '📊'}
                {notification.category === 'hall-tickets' && '🎫'}
                {notification.category === 'notifications' && '🔔'}
                {notification.category === 'calendars' && '📅'}
                {notification.category === 'circulars' && '📋'}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {notification.isNew && (
                        <span className="inline-block px-2 py-1 bg-orange-600 text-white text-xs font-bold rounded uppercase">
                          New
                        </span>
                      )}
                      {notification.isUrgent && (
                        <span className="inline-block px-2 py-1 bg-red-600 text-white text-xs font-bold rounded uppercase animate-pulse">
                          Urgent
                        </span>
                      )}
                    </div>
                    <h3 className="text-gray-900 font-semibold text-base group-hover:text-blue-900 transition-colors">
                      {notification.title}
                    </h3>
                    {notification.description && (
                      <p className="text-gray-600 text-sm mt-1">
                        {notification.description}
                      </p>
                    )}
                  </div>
                  
                  {/* Arrow */}
                  <div className="text-gray-400 group-hover:text-blue-900 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Date */}
                <div className="flex items-center mt-3 text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {notification.date}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
