import { Notification, Department, QuickLink } from '../types';

export const notifications: Notification[] = [
  {
    id: '1',
    title: 'B.Tech 4-2 Semester (R20) Regular/Supplementary Examination Results - August 2025',
    category: 'results',
    date: '2025-12-15',
    isNew: true,
    isUrgent: true,
    description: 'Results are now available for download',
    link: '#'
  },
  {
    id: '2',
    title: 'Hall Tickets for B.Tech 3-1 Semester (R22) Regular Examinations - January 2026',
    category: 'hall-tickets',
    date: '2025-12-14',
    isNew: true,
    isUrgent: false,
    link: '#'
  },
  {
    id: '3',
    title: 'Academic Calendar for Academic Year 2025-26 - Updated Schedule',
    category: 'calendars',
    date: '2025-12-13',
    isNew: true,
    isUrgent: false,
    link: '#'
  },
  {
    id: '4',
    title: 'Circular: Mid-Term Examination Schedule for All Years',
    category: 'circulars',
    date: '2025-12-12',
    isNew: false,
    isUrgent: false,
    link: '#'
  },
  {
    id: '5',
    title: 'MCA 2-2 Semester (R21) Regular Examination Results',
    category: 'results',
    date: '2025-12-11',
    isNew: false,
    isUrgent: false,
    link: '#'
  },
  {
    id: '6',
    title: 'Important Notice: Postponement of B.Pharmacy Practical Examinations',
    category: 'notifications',
    date: '2025-12-10',
    isNew: false,
    isUrgent: true,
    link: '#'
  },
  {
    id: '7',
    title: 'Time Table for B.Tech 2-1 Semester (R22) Regular Examinations',
    category: 'calendars',
    date: '2025-12-09',
    isNew: false,
    isUrgent: false,
    link: '#'
  },
  {
    id: '8',
    title: 'Revised Syllabus for B.Tech CSE (R22 Regulation) - All Semesters',
    category: 'circulars',
    date: '2025-12-08',
    isNew: false,
    isUrgent: false,
    link: '#'
  }
];

export const departments: Department[] = [
  {
    id: '1',
    name: 'Computer Science & Engineering',
    shortName: 'CSE',
    icon: '💻',
    notificationCount: 12
  },
  {
    id: '2',
    name: 'Electronics & Communication Engineering',
    shortName: 'ECE',
    icon: '📡',
    notificationCount: 8
  },
  {
    id: '3',
    name: 'Mechanical Engineering',
    shortName: 'MECH',
    icon: '⚙️',
    notificationCount: 6
  },
  {
    id: '4',
    name: 'Civil Engineering',
    shortName: 'CIVIL',
    icon: '🏗️',
    notificationCount: 5
  },
  {
    id: '5',
    name: 'Electrical & Electronics Engineering',
    shortName: 'EEE',
    icon: '⚡',
    notificationCount: 7
  },
  {
    id: '6',
    name: 'Pharmacy',
    shortName: 'PHARMA',
    icon: '💊',
    notificationCount: 4
  }
];

export const quickLinks: QuickLink[] = [
  {
    id: '1',
    title: 'R22 Syllabus',
    icon: '📚',
    link: '#',
    category: 'syllabus'
  },
  {
    id: '2',
    title: 'Previous Year Papers',
    icon: '📝',
    link: '#',
    category: 'papers'
  },
  {
    id: '3',
    title: 'Academic Calendar',
    icon: '📅',
    link: '#',
    category: 'calendar'
  },
  {
    id: '4',
    title: 'R20 Regulations',
    icon: '📋',
    link: '#',
    category: 'regulation'
  },
  {
    id: '5',
    title: 'R18 Regulations',
    icon: '📄',
    link: '#',
    category: 'regulation'
  },
  {
    id: '6',
    title: 'Exam Time Tables',
    icon: '🕒',
    link: '#',
    category: 'calendar'
  }
];

export const alertMessages = [
  '🔴 URGENT: B.Tech 4-2 R20 Results Published - Check Now!',
  '📢 Hall Tickets for January 2026 Exams Available',
  '⚠️ Last Date for Fee Payment: 20th December 2025',
  '📌 New Academic Calendar Released for 2025-26'
];
