import { useState } from 'react';
import Header from './components/Header';
import AlertTicker from './components/AlertTicker';
import HeroSearch from './components/HeroSearch';
import NotificationFeed from './components/NotificationFeed';
import QuickActions from './components/QuickActions';
import DepartmentGrid from './components/DepartmentGrid';
import UtilityWidgets from './components/UtilityWidgets';
import Footer from './components/Footer';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Alert Ticker Bar */}
      <AlertTicker />
      
      {/* Dual Navigation Header */}
      <Header />
      
      {/* Hero Section with Search */}
      <HeroSearch />
      
      {/* Main Content Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column: Live Notification Feed (2/3 width on desktop) */}
          <div className="lg:col-span-2 space-y-6">
            <NotificationFeed 
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
            
            {/* Department Grid */}
            <DepartmentGrid />
          </div>
          
          {/* Right Column: Utility Widgets & Quick Links (1/3 width on desktop) */}
          <div className="lg:col-span-1 space-y-6">
            <QuickActions />
            <UtilityWidgets />
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
