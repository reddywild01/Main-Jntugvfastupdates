export default function QuickActions() {
  const actions = [
    {
      title: 'Check Results',
      icon: '📊',
      description: 'View your exam results',
      link: '#',
      color: 'from-blue-600 to-blue-700'
    },
    {
      title: 'Download Hall Ticket',
      icon: '🎫',
      description: 'Get your exam hall ticket',
      link: '#',
      color: 'from-purple-600 to-purple-700'
    },
    {
      title: 'View Time Table',
      icon: '📅',
      description: 'Check examination schedule',
      link: '#',
      color: 'from-green-600 to-green-700'
    }
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-900 flex items-center">
        <span className="mr-2">⚡</span>
        Quick Actions
      </h2>
      
      <div className="space-y-3">
        {actions.map((action, index) => (
          <a
            key={index}
            href={action.link}
            className={`block bg-gradient-to-r ${action.color} rounded-xl p-5 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all group`}
          >
            <div className="flex items-center space-x-4">
              <div className="text-4xl">{action.icon}</div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg group-hover:scale-105 transition-transform">
                  {action.title}
                </h3>
                <p className="text-white/80 text-sm mt-1">
                  {action.description}
                </p>
              </div>
              <svg className="w-6 h-6 text-white/80 group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
