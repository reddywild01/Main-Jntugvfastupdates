import { departments } from '../data/mockData';

export default function DepartmentGrid() {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-indigo-900 to-indigo-800 px-6 py-4">
        <h2 className="text-white text-xl font-bold">Department-wise Updates</h2>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {departments.map((dept) => (
            <a
              key={dept.id}
              href="#"
              className="relative bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 hover:border-blue-500 rounded-lg p-5 transition-all hover:shadow-lg group"
            >
              {/* Notification Badge */}
              {dept.notificationCount > 0 && (
                <div className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
                  {dept.notificationCount}
                </div>
              )}
              
              <div className="flex items-center space-x-4">
                <div className="text-4xl">{dept.icon}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-900 transition-colors">
                    {dept.shortName}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-1">
                    {dept.name}
                  </p>
                </div>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-900 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
