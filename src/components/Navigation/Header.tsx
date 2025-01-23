import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  Bell,
  User,
  Menu,
  Grid,
  Book,
  BookTemplate,
  FileText,
  Compass,
  Plus
} from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
  onAppLauncherClick: () => void;
}

const navButtons = [
  { icon: Book, label: 'Catalog', path: '/catalog' },
  { icon: BookTemplate, label: 'Templates', path: '/templates' },
  { icon: FileText, label: 'Documentation', path: '/documentation' },
  { icon: Compass, label: 'Explore', path: '/explore' },
  { icon: Plus, label: 'Create', path: '/create' },
];

export default function Header({ onMenuClick, onAppLauncherClick }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white/95 backdrop-blur-sm shadow-sm z-[1000] px-4">
      <div className="h-full max-w-[1920px] mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="p-2 hover:bg-gray-100 rounded-lg transition-all duration-300 hover:scale-105"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
          
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-[#9B00F5] to-[#00DCFF] p-2 rounded-lg">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#9B00F5] to-[#00DCFF]">
              DevFlow
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-1 ml-4">
            {navButtons.map((button) => (
              <button
                key={button.label}
                onClick={() => navigate(button.path)}
                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200 group"
                title={button.label}
              >
                <button.icon className="w-4 h-4 text-gray-500 group-hover:text-[#9B00F5]" />
                <span>{button.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="flex-1 max-w-2xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="search"
              placeholder="Search..."
              className="w-full h-10 pl-10 pr-4 rounded-lg border border-gray-200 focus:outline-none focus:border-[#9B00F5] focus:ring-2 focus:ring-[#9B00F5]/10 transition-all duration-300"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            className="p-2 hover:bg-gray-100 rounded-lg transition-all duration-300 hover:scale-105 relative"
            aria-label="Notifications"
          >
            <Bell className="w-6 h-6 text-gray-700" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          
          <button
            onClick={onAppLauncherClick}
            className="p-2 hover:bg-gray-100 rounded-lg transition-all duration-300 hover:scale-105"
            aria-label="App launcher"
          >
            <Grid className="w-6 h-6 text-gray-700" />
          </button>

          <button
            className="ml-2 flex items-center gap-2 p-1.5 hover:bg-gray-100 rounded-lg transition-all duration-300 hover:scale-105"
            aria-label="User profile"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#9B00F5] to-[#00DCFF] flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}