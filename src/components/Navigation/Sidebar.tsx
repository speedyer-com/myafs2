import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LayoutIcon as LayoutPlanIcon,
  ClipboardList,
  Paintbrush,
  Code2,
  TestTube2,
  Rocket,
  WrenchIcon,
  Bell,
  Settings,
  X,
  ChevronDown,
  ExternalLink,
  BookOpen,
  FileText,
  Video,
  Lightbulb
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MenuItem {
  icon: React.ElementType;
  label: string;
  path: string;
  description: string;
  subMenu?: {
    label: string;
    path: string;
    icon: React.ElementType;
    description: string;
  }[];
}

const menuItems: MenuItem[] = [
  {
    icon: LayoutPlanIcon,
    label: 'Planning',
    path: '/planning',
    description: 'Project planning and roadmap development',
    subMenu: [
      { icon: BookOpen, label: 'Project Guidelines', path: 'https://docs.google.com/document/d/e/planning-guidelines/pub?embedded=true', description: 'Best practices and methodologies' },
      { icon: FileText, label: 'Templates', path: 'https://docs.google.com/document/d/e/planning-templates/pub?embedded=true', description: 'Planning document templates' },
      { icon: Video, label: 'Training', path: 'https://docs.google.com/document/d/e/planning-training/pub?embedded=true', description: 'Planning process tutorials' }
    ]
  },
  {
    icon: ClipboardList,
    label: 'Requirements',
    path: '/requirements',
    description: 'Requirements gathering and analysis',
    subMenu: [
      { icon: Lightbulb, label: 'Best Practices', path: 'https://docs.google.com/document/d/e/requirements-best-practices/pub?embedded=true', description: 'Requirements documentation guidelines' },
      { icon: FileText, label: 'Templates', path: 'https://docs.google.com/document/d/e/requirements-templates/pub?embedded=true', description: 'Requirements document templates' }
    ]
  },
  {
    icon: Paintbrush,
    label: 'Design',
    path: '/design',
    description: 'UI/UX and system architecture design',
    subMenu: [
      { icon: BookOpen, label: 'Style Guide', path: 'https://docs.google.com/document/d/e/design-style-guide/pub?embedded=true', description: 'Design system documentation' },
      { icon: FileText, label: 'Patterns', path: 'https://docs.google.com/document/d/e/design-patterns/pub?embedded=true', description: 'Common design patterns' }
    ]
  },
  {
    icon: Code2,
    label: 'Coding',
    path: '/coding',
    description: 'Development and implementation',
    subMenu: [
      { icon: BookOpen, label: 'Standards', path: 'https://docs.google.com/document/d/e/coding-standards/pub?embedded=true', description: 'Coding standards and guidelines' },
      { icon: FileText, label: 'Examples', path: 'https://docs.google.com/document/d/e/coding-examples/pub?embedded=true', description: 'Code examples and snippets' }
    ]
  },
  {
    icon: TestTube2,
    label: 'Testing',
    path: '/testing',
    description: 'Quality assurance and validation',
    subMenu: [
      { icon: BookOpen, label: 'Test Plans', path: 'https://docs.google.com/document/d/e/testing-plans/pub?embedded=true', description: 'Test planning templates' },
      { icon: FileText, label: 'Checklists', path: 'https://docs.google.com/document/d/e/testing-checklists/pub?embedded=true', description: 'Testing checklists and procedures' }
    ]
  },
  {
    icon: Rocket,
    label: 'Deployment',
    path: '/deployment',
    description: 'Release management and deployment',
    subMenu: [
      { icon: BookOpen, label: 'Procedures', path: 'https://docs.google.com/document/d/e/deployment-procedures/pub?embedded=true', description: 'Deployment procedures and checklists' },
      { icon: FileText, label: 'Guides', path: 'https://docs.google.com/document/d/e/deployment-guides/pub?embedded=true', description: 'Deployment guides and documentation' }
    ]
  },
  {
    icon: WrenchIcon,
    label: 'Maintenance',
    path: '/maintenance',
    description: 'System maintenance and updates',
    subMenu: [
      { icon: BookOpen, label: 'Procedures', path: 'https://docs.google.com/document/d/e/maintenance-procedures/pub?embedded=true', description: 'Maintenance procedures and schedules' },
      { icon: FileText, label: 'Guides', path: 'https://docs.google.com/document/d/e/maintenance-guides/pub?embedded=true', description: 'Maintenance guides and documentation' }
    ]
  }
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const navigate = useNavigate();
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const handleNavigation = (path: string) => {
    navigate(path);
    if (!path.includes('http')) {
      onClose();
    }
  };

  const toggleSubmenu = (label: string) => {
    setExpandedItem(expandedItem === label ? null : label);
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[999] transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed top-0 left-0 w-[280px] h-full bg-white shadow-lg z-[1000] transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } overflow-y-auto`}
      >
        <div className="h-16 flex items-center justify-between px-4 border-b">
          <h2 className="text-lg font-semibold">Navigation</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-all duration-300"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 space-y-2">
          <nav>
            {menuItems.map((item) => (
              <div key={item.label} className="mb-1">
                <button
                  onClick={() => {
                    handleNavigation(item.path);
                    if (item.subMenu) {
                      toggleSubmenu(item.label);
                    }
                  }}
                  className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-all duration-200 group relative"
                  title={item.description}
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-gray-500 group-hover:text-[#9B00F5]" />
                    <span className="text-gray-700 group-hover:text-gray-900">{item.label}</span>
                  </div>
                  {item.subMenu && (
                    <ChevronDown
                      className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                        expandedItem === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                  
                  {/* Hover Description Tooltip */}
                  <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 w-48 p-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {item.description}
                    <div className="absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2 border-4 border-transparent border-r-gray-800"></div>
                  </div>
                </button>

                {/* Submenu */}
                {item.subMenu && (
                  <div
                    className={`overflow-hidden transition-all duration-200 ease-in-out ${
                      expandedItem === item.label ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pl-11 pr-4 py-2 space-y-1">
                      {item.subMenu.map((subItem) => (
                        <button
                          key={subItem.label}
                          onClick={() => handleNavigation(subItem.path)}
                          className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-all duration-200 group relative"
                          title={subItem.description}
                        >
                          <div className="flex items-center gap-2">
                            <subItem.icon className="w-4 h-4 text-gray-400 group-hover:text-[#9B00F5]" />
                            <span className="text-sm text-gray-600 group-hover:text-gray-900">
                              {subItem.label}
                            </span>
                          </div>
                          <ExternalLink className="w-3 h-3 text-gray-400" />
                          
                          {/* Submenu Item Tooltip */}
                          <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 w-48 p-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                            {subItem.description}
                            <div className="absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2 border-4 border-transparent border-r-gray-800"></div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="pt-6 border-t">
            <button
              onClick={() => handleNavigation('/notifications')}
              className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-all duration-200 group"
            >
              <Bell className="w-5 h-5 text-gray-500 group-hover:text-[#9B00F5]" />
              <span className="text-gray-700 group-hover:text-gray-900">Notifications</span>
            </button>
            <button
              onClick={() => handleNavigation('/settings')}
              className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-all duration-200 group"
            >
              <Settings className="w-5 h-5 text-gray-500 group-hover:text-[#9B00F5]" />
              <span className="text-gray-700 group-hover:text-gray-900">Settings</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}