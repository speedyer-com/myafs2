import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';

interface AppLauncherProps {
  isOpen: boolean;
  onClose: () => void;
}

const apps = [
  { name: 'Dashboard', icon: '📊', color: 'bg-blue-500', path: '/dashboard' },
  { name: 'Projects', icon: '📁', color: 'bg-purple-500', path: '/projects' },
  { name: 'Calendar', icon: '📅', color: 'bg-green-500', path: '/calendar' },
  { name: 'Messages', icon: '💬', color: 'bg-yellow-500', path: '/messages' },
  { name: 'Documents', icon: '📄', color: 'bg-red-500', path: '/documents' },
  { name: 'Analytics', icon: '📈', color: 'bg-indigo-500', path: '/analytics' },
  { name: 'Tasks', icon: '✓', color: 'bg-pink-500', path: '/tasks' },
  { name: 'Settings', icon: '⚙️', color: 'bg-gray-500', path: '/settings' },
  { name: 'Help', icon: '❓', color: 'bg-teal-500', path: '/help' },
];

export default function AppLauncher({ isOpen, onClose }: AppLauncherProps) {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-transparent z-[999]"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed top-16 right-4 w-[320px] bg-white rounded-xl shadow-xl z-[1000] transform transition-all duration-300 origin-top-right ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        }`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Apps</h3>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-lg transition-all duration-200"
              aria-label="Close app launcher"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {apps.map((app) => (
              <button
                key={app.name}
                onClick={() => handleNavigation(app.path)}
                className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 group"
              >
                <span className={`w-12 h-12 ${app.color} rounded-lg flex items-center justify-center text-2xl`}>
                  {app.icon}
                </span>
                <span className="text-sm text-gray-700 group-hover:text-gray-900">{app.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}