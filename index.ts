export interface Notification {
  id: string;
  title: string;
  category: 'results' | 'hall-tickets' | 'notifications' | 'calendars' | 'circulars';
  date: string;
  isNew: boolean;
  isUrgent: boolean;
  link?: string;
  description?: string;
}

export interface Department {
  id: string;
  name: string;
  shortName: string;
  icon: string;
  notificationCount: number;
}

export interface QuickLink {
  id: string;
  title: string;
  icon: string;
  link: string;
  category: 'syllabus' | 'papers' | 'calendar' | 'regulation';
}
