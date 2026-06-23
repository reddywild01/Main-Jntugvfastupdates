import { useState } from 'react';
import { quickLinks } from '../data/mockData';

export default function UtilityWidgets() {
  const [activeCalculator, setActiveCalculator] = useState<'sgpa' | 'cgpa' | 'percentage'>('sgpa');
  
  // SGPA Calculator State
  const [subjects, setSubjects] = useState([
    { credits: 3, grade: 'O' },
    { credits: 3, grade: 'A+' }
  ]);

  const gradePoints: { [key: string]: number } = {
    'O': 10, 'A+': 9, 'A': 8, 'B+': 7, 'B': 6, 'C': 5, 'D': 4, 'F': 0
  };

  const calculateSGPA = () => {
    let totalCredits = 0;
    let totalPoints = 0;
    
    subjects.forEach(sub => {
      const points = gradePoints[sub.grade] || 0;
      totalCredits += sub.credits;
      totalPoints += sub.credits * points;
    });
    
    return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : '0.00';
  };

  const addSubject = () => {
    if (subjects.length < 8) {
      setSubjects([...subjects, { credits: 3, grade: 'O' }]);
    }
  };

  const removeSubject = (index: number) => {
    if (subjects.length > 1) {
      setSubjects(subjects.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="space-y-6">
      {/* Calculator Widget */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-orange-600 to-red-600 px-6 py-4">
          <h2 className="text-white text-xl font-bold flex items-center">
            <span className="mr-2">🧮</span>
            Academic Calculators
          </h2>
        </div>

        <div className="p-6">
          {/* Calculator Tabs */}
          <div className="flex space-x-2 mb-4">
            <button
              onClick={() => setActiveCalculator('sgpa')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCalculator === 'sgpa'
                  ? 'bg-orange-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              SGPA
            </button>
            <button
              onClick={() => setActiveCalculator('cgpa')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCalculator === 'cgpa'
                  ? 'bg-orange-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              CGPA
            </button>
            <button
              onClick={() => setActiveCalculator('percentage')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCalculator === 'percentage'
                  ? 'bg-orange-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              %
            </button>
          </div>

          {/* SGPA Calculator */}
          {activeCalculator === 'sgpa' && (
            <div className="space-y-3">
              {subjects.map((subject, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <input
                    type="number"
                    value={subject.credits}
                    onChange={(e) => {
                      const newSubjects = [...subjects];
                      newSubjects[index].credits = parseInt(e.target.value) || 0;
                      setSubjects(newSubjects);
                    }}
                    className="w-20 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Credits"
                    min="1"
                    max="6"
                  />
                  <select
                    value={subject.grade}
                    onChange={(e) => {
                      const newSubjects = [...subjects];
                      newSubjects[index].grade = e.target.value;
                      setSubjects(newSubjects);
                    }}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="O">O (10)</option>
                    <option value="A+">A+ (9)</option>
                    <option value="A">A (8)</option>
                    <option value="B+">B+ (7)</option>
                    <option value="B">B (6)</option>
                    <option value="C">C (5)</option>
                    <option value="D">D (4)</option>
                    <option value="F">F (0)</option>
                  </select>
                  {subjects.length > 1 && (
                    <button
                      onClick={() => removeSubject(index)}
                      className="text-red-600 hover:text-red-700 p-2"
                    >
                      ✕
                    </button>
                  )}
                </div>
              ))}
              
              {subjects.length < 8 && (
                <button
                  onClick={addSubject}
                  className="w-full py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-orange-500 hover:text-orange-600 transition-colors"
                >
                  + Add Subject
                </button>
              )}

              <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-lg p-4 mt-4">
                <div className="text-center">
                  <p className="text-sm text-gray-700 font-medium">Your SGPA</p>
                  <p className="text-4xl font-bold text-orange-600 mt-2">
                    {calculateSGPA()}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* CGPA Calculator */}
          {activeCalculator === 'cgpa' && (
            <div className="text-center py-8 text-gray-500">
              <p className="mb-4">Enter semester SGPAs to calculate CGPA</p>
              <p className="text-sm">Coming soon...</p>
            </div>
          )}

          {/* Percentage Calculator */}
          {activeCalculator === 'percentage' && (
            <div className="text-center py-8 text-gray-500">
              <p className="mb-4">Convert CGPA to Percentage</p>
              <p className="text-sm">Coming soon...</p>
            </div>
          )}
        </div>
      </div>

      {/* Quick Links Sidebar */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-purple-900 to-purple-800 px-6 py-4">
          <h2 className="text-white text-xl font-bold flex items-center">
            <span className="mr-2">🔗</span>
            Quick Links
          </h2>
        </div>

        <div className="p-4 space-y-2">
          {quickLinks.map((link) => (
            <a
              key={link.id}
              href={link.link}
              className="flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-purple-50 rounded-lg transition-colors group"
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{link.icon}</span>
                <span className="font-medium text-gray-900 group-hover:text-purple-900">
                  {link.title}
                </span>
              </div>
              <svg className="w-5 h-5 text-gray-400 group-hover:text-purple-900 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
