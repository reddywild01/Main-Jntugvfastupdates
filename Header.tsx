import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Logo and Primary Nav */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center shadow-lg">
                <div className="text-2xl font-bold">
                  <span className="text-blue-900">JG</span>
                </div>
              </div>
              <div>
                <h1 className="text-white font-bold text-xl sm:text-2xl tracking-tight">
                  JNTUGVFASTUPDATES
                </h1>
                <p className="text-blue-200 text-xs sm:text-sm">
                  Real-Time Academic Updates
                </p>
              </div>
            </div>

            {/* Desktop Navigation - Institutional */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-white hover:text-blue-200 transition-colors font-medium">
                University
              </a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors font-medium">
                Administration
              </a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors font-medium">
                Academics
              </a>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Secondary Nav - Utility Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="hidden md:flex items-center justify-center space-x-8 h-12">
            <a href="#results" className="text-gray-700 hover:text-orange-600 font-medium transition-colors flex items-center space-x-1">
              <span>📊</span>
              <span>Exam Results</span>
            </a>
            <a href="#notifications" className="text-gray-700 hover:text-orange-600 font-medium transition-colors flex items-center space-x-1">
              <span>🔔</span>
              <span>Notifications</span>
            </a>
            <a href="#timetables" className="text-gray-700 hover:text-orange-600 font-medium transition-colors flex items-center space-x-1">
              <span>📅</span>
              <span>Time Tables</span>
            </a>
            <a href="#halltickets" className="text-gray-700 hover:text-orange-600 font-medium transition-colors flex items-center space-x-1">
              <span>🎫</span>
              <span>Hall Tickets</span>
            </a>
            <a href="#calculators" className="text-gray-700 hover:text-orange-600 font-medium transition-colors flex items-center space-x-1">
              <span>🧮</span>
              <span>Calculators</span>
            </a>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            <a href="#" className="block text-gray-700 hover:text-blue-900 font-medium py-2">
              University
            </a>
            <a href="#" className="block text-gray-700 hover:text-blue-900 font-medium py-2">
              Administration
            </a>
            <a href="#" className="block text-gray-700 hover:text-blue-900 font-medium py-2">
              Academics
            </a>
            <div className="border-t border-gray-200 pt-3 mt-3 space-y-3">
              <a href="#results" className="block text-gray-700 hover:text-orange-600 font-medium py-2">
                📊 Exam Results
              </a>
              <a href="#notifications" className="block text-gray-700 hover:text-orange-600 font-medium py-2">
                🔔 Notifications
              </a>
              <a href="#timetables" className="block text-gray-700 hover:text-orange-600 font-medium py-2">
                📅 Time Tables
              </a>
              <a href="#halltickets" className="block text-gray-700 hover:text-orange-600 font-medium py-2">
                🎫 Hall Tickets
              </a>
              <a href="#calculators" className="block text-gray-700 hover:text-orange-600 font-medium py-2">
                🧮 Calculators
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
